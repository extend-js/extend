/**
 * 生成生产版本并将 d.ts 文件缝合在一起
 * @example
 *  node ./script/build.js [targets] => 打包 packages 下的软件包，默认全部
 *  -f || --formats => 构建特定格式软件包
 *  -s || --sourcemap => 生成 sourcemap 文件
 *  -t || --types => 汇总 d.ts 文件
 *  -r || --release => 仅打包需要发布的包
 *  -a || --all => 匹配所有符合规则的目标，否则只匹配第一次被匹配的的目标
 *  -d || --devOnly => 仅打包开发环境包
 *  -p || --prodOnly => 仅打包生产环境包
 */

const path = require('path');
const fse = require('fs-extra'); // fs 扩展工具包
const minimist = require('minimist'); // 轻量级的命令行参数解析引擎
const execa = require('execa'); // 子进程管理工具
const chalk = require('chalk'); // node 终端样式库
const { gzipSync } = require('zlib'); // 通用的压缩库
const { compress } = require('brotli'); // 通用目的的无损压缩算法
const { targets: allTargets, fuzzyMatchTarget, resolveRoot, resolveTarget } = require('./utils');

const configFile = path.resolve(__dirname, './rollup.config.js'); // 默认 rollup 配置文件路径

const args = minimist(process.argv.slice(2)); // 命令行参数解析规则

const targets = args._; // 目标项目
const formats = args.formats || args.f; // 构建特定格式软件包
const sourceMap = args.sourcemap || args.s; // 生成 sourcemap 文件
const devOnly = args.devOnly || args.d; // 仅打包开发环境包
const prodOnly = !devOnly && (args.prodOnly || args.p); // 仅打包生产环境包
const isRelease = args.release || args.r; // 是否仅打包需要发布的包
const buildTypes = args.t || args.types || isRelease; // 是否汇总 d.ts 文件
const buildAllMatching = args.all || args.a; // 匹配所有符合规则的目标，否则只匹配第一次被匹配的的目标
const commit = execa.sync('git', ['rev-parse', 'HEAD']).stdout.slice(0, 7); // 拿到本次提交哈希值

run();

/**
 * 运行程序
 */
async function run() {
  // 删除发行版的构建缓存，以避免枚举值过时
  if (isRelease) fse.removeSync(resolveRoot('./node_modules/.rts2_cache'));
  // 没有指定包
  if (!targets.length) {
    await buildAll(allTargets); // 打包所有包
    checkAllSizes(allTargets); // 枚举所有包大小
  }
  // 构建指定包
  else {
    await buildAll(fuzzyMatchTarget(targets, buildAllMatching)); // 打包指定包
    checkAllSizes(fuzzyMatchTarget(targets, buildAllMatching)); // 枚举指定包大小
  }
}

/**
 * 打包所有指定包
 * @param { string[] } targets 指定包名集合
 */
async function buildAll(targets) {
  for (const target of targets) {
    await build(target);
  }
}

/**
 * 打包指定包
 * @param { string } target 指定包名
 */
async function build(target) {
  const pkg = require(resolveTarget(target, './package.json'));
  // 仅打包需要发布的包
  if (isRelease && pkg.private) return;
  // 如果构建特定格式，请不要删除
  if (!formats) {
    fse.removeSync(resolveTarget(target, './dist'));
    fse.removeSync(resolveRoot('./dist'));
    fse.removeSync(resolveRoot('./temp'));
  }

  const env = (pkg.buildOptions && pkg.buildOptions.env) || (devOnly ? 'development' : 'production');
  await execa(
    'rollup',
    [
      `-c=${configFile}`, // 使用配置文件
      '--environment', // 将设置传递到配置文件
      // 这一块是给 rollup.config.js 用的环境变量
      [
        `COMMIT:${commit}`, // git 提交记录的哈希值
        `TARGET:${target}`, // 需要构建的目标
        `NODE_ENV:${env}`, // 当前环境变量
        formats ? `FORMATS:${formats}` : ``, // 输出的文件类型（cjs, es, iife）
        buildTypes ? `TYPES:true` : ``, // 是否汇总 d.ts 文件
        prodOnly ? `PROD_ONLY:true` : ``, // 仅打包生产环境包
        sourceMap ? `SOURCE_MAP:true` : `` // 生成 sourceMap 文件
      ]
        .filter(Boolean)
        .join(',')
    ],
    { stdio: 'inherit' }
  );

  // 汇总构建 ${target} 的 d.ts 文件
  buildDts(target);
}

/**
 * 汇总构建 d.ts 文件
 * @param { string } _target 要构建的目标包名
 */
async function buildDts(_target) {
  const pkg = require(resolveTarget(_target, './package.json'));
  if (buildTypes && pkg.types) {
    console.log();
    console.log(chalk.bold(chalk.yellow(`汇总 ${_target} 的 d.ts 文件...`)));

    // 构建 types
    const { Extractor, ExtractorConfig } = require('@microsoft/api-extractor');
    const extractorConfigPath = resolveTarget(_target, './api-extractor.json');
    const extractorConfig = ExtractorConfig.loadFileAndPrepare(extractorConfigPath);
    const extractorResult = Extractor.invoke(extractorConfig, {
      localBuild: true,
      showVerboseMessages: true
    });

    if (extractorResult.succeeded) {
      // 将其他 d.ts连接到汇总 dts
      const typesDir = resolveTarget(_target, './types');
      if (fse.existsSync(typesDir)) {
        const dtsPath = resolveTarget(_target, pkg.types);
        const existing = fse.readFileSync(dtsPath, 'utf-8');
        const typeFiles = fse.readdirSync(typesDir);
        const toAdd = await Promise.all(
          typeFiles.map((file) => {
            return fse.readFile(path.resolve(typesDir, file), 'utf-8');
          })
        );
        await fse.writeFile(dtsPath, existing + '\n' + toAdd.join('\n'));
      }
      console.log(chalk.bold(chalk.green(`提取程序已成功完成.`)));
    } else {
      console.error(`提取器已完成，出现 ${extractorResult.errorCount} 个错误和 ${extractorResult.warningCount} 个警告`);
      process.exitCode = 1;
    }
    fse.removeSync(resolveTarget(_target, './dist/packages'));
  }
}

/**
 * 检测所有指定文件大小
 * @param { string[] } _targets 指定文件名集合
 */
function checkAllSizes(_targets) {
  if (devOnly) return;
  console.log();
  for (const target of _targets) {
    const filePath = resolveTarget(target, `./dist/${target}.global.prod.js`);
    checkFileSize(filePath);
  }
  console.log();
}

/**
 * 检查文件大小
 * @param { string } _target 文件路径
 */
function checkFileSize(_filePath) {
  if (!fse.existsSync(_filePath)) return;
  const file = fse.readFileSync(_filePath, 'utf-8');
  const minSize = (file.length / 1024).toFixed(2) + 'kb';
  const gzipped = gzipSync(file);
  const gzippedSize = (gzipped.length / 1024).toFixed(2) + 'kb';
  const compressed = compress(file);
  const compressedSize = (compressed.length / 1024).toFixed(2) + 'kb';
  console.log(
    `${chalk.gray(chalk.bold(path.basename(_filePath)))} min:${minSize} / gzip:${gzippedSize} / brotli:${compressedSize}`
  );
}
