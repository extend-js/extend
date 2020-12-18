/**
 * 为尚不存在的软件包创建 package.json, README, LICENSE，api-extractor.json，src/index.ts 等
 * @example
 *  node ./script/bootstrap.js [targets] => 初始化 packages 下的软件包，默认全部
 *  -f || --force => 强制还原初始化设置
 *  -p || --private => 私有化
 */

import fse from 'fs-extra'; // fs 扩展工具包
import chalk from 'chalk'; // node 终端样式库
import minimist from 'minimist'; // 轻量级的命令行参数解析引擎
import {
  targets as allTargets,
  resolveRoot,
  isDirectory,
  resolveTarget,
  camelCase,
  generatePkgName,
  formatPkgName,
  loadFile
} from './utils';

const currentVersion: string = loadFile(resolveRoot('package.json')).version; // 当前主版本版本号

const args: minimist.ParsedArgs = minimist(process.argv.slice(2)); // 命令行参数解析规则
const targets: string[] = args._ || allTargets; // 目标项目，如果 packages 内没有，则会新建，默认所有
const isForce: boolean = args.force || args.f; // 强制格式化，如果包含此参数则会强制处理 package.json 等文件
const isPrivate: boolean = args.private || args.p; // 是否定义为私有包

targets.forEach((target: string) => {
  const targetDir = resolveTarget(target);
  // 如果路径不存在，创建
  if (!fse.existsSync(targetDir)) fse.ensureDirSync(targetDir);
  // 如果不是文件夹，跳过
  if (!isDirectory(targetDir)) return;

  // package.json
  const pkgName = generatePkgName(target);
  const name = formatPkgName(pkgName);
  const pkgPath = resolveTarget(target, `package.json`);

  if (isForce || !fse.existsSync(pkgPath)) {
    // 默认 package.json 配置
    const json = {
      name: pkgName, // 模块名
      version: currentVersion, // 版本号
      description: name, // 描述
      main: 'index.js', // 主入口文件(commonjs 模块代码)
      module: `dist/${name}.esm-bundler.js`, // es 模块代码
      types: `dist/${name}.d.ts`, // typescript 模块代码
      license: 'MIT', // 软件授权条款
      ...(isPrivate
        ? {
            private: true,
            // 自定义配置的打包选项
            buildOptions: {
              formats: ['esm-bundler', 'cjs'] // 打包格式
            }
          } // 私有包
        : {
            // 自定义配置的打包选项
            buildOptions: {
              name: camelCase(`${name}`), // 生成包名称、全局变量名
              formats: ['esm-bundler', 'esm-browser', 'cjs', 'global'] // 打包格式
            },
            unpkg: `dist/${name}.global.js`, // npm 上所有的文件都开启 cdn 服务地址
            jsdelivr: `dist/${name}.global.js`, // cdn公共库
            sideEffects: false, // 使得支持 tree shaking
            files: [`index.js`, `dist`], // 被项目包含的文件名
            // 项目关键字
            keywords: ['roshin', 'typescript', 'javascript', 'js', 'utils', 'rollup', 'lerna'],
            // 项目开发者
            author: {
              name: 'Roshin',
              email: '1425258785@qq.com'
            },
            // 项目仓库地址
            repository: {
              type: 'git',
              url: 'https://github.com/extend-js/extend.git'
            },
            // bug 提交地址
            bugs: {
              url: 'https://github.com/extend-js/extend/issues'
            },
            // 项目包的官网
            homepage: `https://github.com/extend-js/extend/tree/master/packages/${target}#readme`
          })
    };
    fse.outputJsonSync(pkgPath, json, { spaces: 2 });
  }

  // README.md
  const readmePath = resolveTarget(target, `README.md`);
  if (isForce || !fse.existsSync(readmePath)) {
    fse.outputFileSync(readmePath, `# ${name}`);
  }

  // api-extractor.json
  const apiExtractorConfigPath = resolveTarget(target, `api-extractor.json`);
  if (isForce || !fse.existsSync(apiExtractorConfigPath)) {
    fse.outputFileSync(
      apiExtractorConfigPath,
      `
{
  "extends": "../../api-extractor.json",
  "mainEntryPointFilePath": "./dist/packages/${target}/src/index.d.ts",
  "dtsRollup": {
    "publicTrimmedFilePath": "./dist/${name}.d.ts"
  }
}
`.trim()
    );
  }

  // src/index.ts
  const indexPath = resolveTarget(target, `src/index.ts`);
  if (!fse.existsSync(indexPath)) {
    fse.outputFileSync(
      indexPath,
      `
export default {};
    `.trim() + '\n'
    );
  }

  // __tests__/.gitkeep
  const testsPath = resolveTarget(target, `__tests__/.gitkeep`);
  if (!fse.existsSync(testsPath)) {
    fse.outputFileSync(testsPath, ``);
  }

  // index.js
  const nodeIndexPath = resolveTarget(target, `index.js`);
  if (isForce || !fse.existsSync(nodeIndexPath)) {
    fse.outputFileSync(
      nodeIndexPath,
      `
'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/${name}.cjs.prod.js');
} else {
  module.exports = require('./dist/${name}.cjs.js');
}
    `.trim() + '\n'
    );
  }

  // LICENSE
  const licensePath = resolveTarget(target, `LICENSE`);
  if (!isPrivate && (isForce || !fse.existsSync(licensePath))) {
    fse.copySync(resolveRoot('LICENSE'), licensePath);
  }

  console.log();
  console.log(chalk.cyan(`${resolveTarget(target)}`));
});
