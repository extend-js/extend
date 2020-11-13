/**
 * 自动发布
 * 如果发布失败，可尝试更改镜像源
 * 镜像源管理工具
 *  npm install -g yrm
 *  npm install -g nrm
 * @example
 *  ts-node ./script/release.js => 自动发布 packages 下的可用包
 *  --tag => 发行标签
 *  --preid => 预发行版本标识符
 *  --dry => 只打印运行命令但不运行(会更新版本)
 *  --skipTests => 跳过测试
 *  --skipBuild => 跳过打包
 */

const path = require('path');
const fse = require('fs-extra'); // fs 扩展工具包
const chalk = require('chalk'); // node终端样式库
const execa = require('execa'); // 子进程管理工具
const semver = require('semver'); // 语义版本控制程序
const minimist = require('minimist'); // 轻量级的命令行参数解析引擎
const { prompt } = require('enquirer'); // 创建交互式 cli 提示

const { targets, resolveRoot, resolveTarget } = require('./utils');

const mainPkg = require(resolveRoot('./package.json')); // 主 package.json 文件
const currentVersion = mainPkg.version; // 当前版本号
const prerelease = semver.prerelease(currentVersion) || []; // 返回预发布版本的数组,如果不存在,则返回 null

const args = minimist(process.argv.slice(2)); // 解析后的命令行参数
const preId = args.preid || prerelease[0] || 'alpha'; // 预发行版本标识符
const releaseTag = args.tag; // 发行标签
const isDryRun = args.dry; // 只打印运行命令但不运行
const skipTests = args.skipTests; // 跳过测试
const skipBuild = args.skipBuild; // 跳过打包

const skippedPackages = []; // 需要跳过发布的包

/**
 * 运行命令
 * @param { any } bin - 执行命令
 * @param { any } args - 命令参数
 * @param { object } opts - 命令选项
 */
const run = (bin, args, opts = {}) => execa(bin, args, { stdio: 'inherit', ...opts });

/**
 * 打印运行命令
 * @param { any } bin - 执行命令
 * @param { any } args - 命令参数
 * @param { object } opts - 命令选项
 */
const dryRun = (bin, args, opts = {}) => console.log(chalk.blue(`[dryrun] ${bin} ${args.join(' ')}`), opts);

/**
 * 判断是否打印运行命令
 * @param { any } bin - 执行命令
 * @param { any } args - 命令参数
 * @param { object } opts - 命令选项
 */
const runIfNotDry = isDryRun ? dryRun : run;

/**
 * 打印
 * @param { string } msg - 打印字符串
 */
const step = (msg) => console.log(chalk.cyan(msg));

/**
 * 入口主函数
 */
async function main() {
  const { isRelease, version: targetVersion } = await prompts();
  if (!isRelease || !targetVersion) return;

  step('\n运行测试...');
  if (!skipTests && !isDryRun) {
    await run(resolveRoot('node_modules/.bin/jest'), ['--clearCache']);
    await run('yarn', ['test']);
  } else {
    console.log(`(跳过测试)`);
  }

  step('\n更新版本及依赖...');
  updateVersions(targetVersion);

  step('\n打包所有软件包...');
  if (!skipBuild && !isDryRun) {
    await run('yarn', ['build', '--release']);
  } else {
    console.log(`(跳过打包)`);
  }

  step('\n生成提交日志...');
  await changelog(targetVersion);

  step('\n发布程序包...');
  for (const pkg of targets) {
    await publishPackage(pkg, targetVersion, runIfNotDry);
  }

  step('\n推送到 git 仓库...');
  await commitGit(targetVersion);
}

/**
 * 用户交互部分
 * @returns { object } 交互所产生的值
 */
async function prompts() {
  // 版本发行类型，请根据你的修改正确的使用版本号，语义化版本(https://semver.org/lang/zh-CN/)了解下
  const versionIncrements = ['patch', 'minor', 'major', 'prepatch', 'preminor', 'premajor', 'prerelease'];
  const inc = (type) => semver.inc(currentVersion, type, preId); // 计算版本号

  let targetVersion = args._[0]; // 目标版本
  if (!targetVersion) {
    const { release } = await prompt({
      type: 'select', // 提示的类型
      name: 'release', // 返回值对象上的键
      message: '请选择发行类型', // 在终端中呈现提示时显示的消息
      choices: versionIncrements.map((v) => `${v} ([${currentVersion}] ==> ${inc(v)})`).concat(['custom']) // 选项数组
    });
    if (release === 'custom') {
      const { version } = await prompt({
        type: 'input', // 提示的类型
        name: 'version', // 返回值对象上的键
        message: '请输入自定义版本号', // 在终端中呈现提示时显示的消息
        initial: currentVersion // 默认值
      });
      targetVersion = version;
    } else {
      const match = release.match(/.*==>(.*)\)/) || [];
      targetVersion = match[1].trim();
    }
  }

  if (!semver.valid(targetVersion)) throw new Error(`无效的版本号: ${targetVersion}`);

  const { yes } = await prompt({
    type: 'confirm',
    name: 'yes',
    message: `发布 v${targetVersion}. 确认?`,
    initial: 'Y'
  });

  if (!yes) return;

  return { version: targetVersion, isRelease: yes };
}

/**
 * 更新所有包版本和依赖关系
 * @param { string } _version 将要更新的目标版本
 */
function updateVersions(_version) {
  if (!_version) return;

  updatePackage(resolveRoot(), _version); // 更新根目录的 package.json 版本以及依赖关系
  // 更新所有包的 package.json 版本以及依赖关系
  targets.forEach((target) => {
    updatePackage(resolveTarget(target), _version);
  });
}

/**
 * 更新包版本和依赖关系
 * @param { string } pkgRoot package.json 文件路径
 * @param { string } version 将要更新的目标版本
 */
function updatePackage(pkgRoot, _version) {
  const pkgPath = path.resolve(pkgRoot, './package.json');
  const pkg = fse.readJsonSync(pkgPath);
  pkg.version = _version;
  updateDeps(pkg, 'dependencies', _version);
  updateDeps(pkg, 'peerDependencies', _version);
  fse.outputJsonSync(pkgPath, pkg, { spaces: 2 });
}

/**
 * 更新包依赖
 * @param { any } pkg package.json 文件内容
 * @param { "dependencies" | "peerDependencies" } depType "dependencies" | "peerDependencies"
 * @param { string } version 将要更新的目标版本
 */
function updateDeps(pkg, depType, _version) {
  const deps = pkg[depType];
  if (!deps) return;
  Object.keys(deps).forEach((dep) => {
    if (
      dep === mainPkg.name ||
      (dep.startsWith(`${mainPkg.name}-`) && targets.includes(dep.replace(new RegExp(`^${mainPkg.name}-`), '')))
    ) {
      console.log(chalk.yellow(`${pkg.name} -> ${depType} -> ${dep}@${_version}`));
      deps[dep] = _version;
    }
  });
}

/**
 * 发布包
 * @param { string } _name 包名称
 * @param { string } version 将要发布的版本
 * @param { Function } runIfNotDry 运行命令函数
 */
async function publishPackage(_name, _version, runIfNotDry) {
  if (skippedPackages.includes(_name)) return;
  const pkgRoot = resolveTarget(_name);
  const pkgPath = resolveTarget(_name, './package.json');
  const pkg = fse.readJsonSync(pkgPath);
  const tag = releaseTag && typeof releaseTag === 'string' ? releaseTag : '';
  if (pkg.private) return;
  step(`${_name} 发布中...`);
  try {
    await runIfNotDry(
      'yarn',
      [
        'publish',
        '--new-version',
        _version,
        ...(tag ? ['--tag', tag] : []),
        '--access',
        'public',
        '--registry',
        'https://registry.npmjs.org/'
      ],
      {
        cwd: pkgRoot,
        stdio: 'pipe'
      }
    );
    if (!isDryRun) console.log(chalk.green(`${_name}@${_version} 发布成功`));
  } catch (e) {
    if (e.stderr.match(/previously published/)) {
      console.log(chalk.red(`跳过已发布: ${_name}`));
    } else {
      throw e;
    }
  }
}

/**
 * n生成提交日志
 * @param { string } _version 版本号
 */
async function changelog(_version) {
  if (!_version) return;
  await run(`yarn`, ['changelog']);

  const { stdout } = await run('git', ['diff'], { stdio: 'pipe' });
  if (stdout) {
    step('\n提交更改...');
    await runIfNotDry('git', ['add', '-A']);
    await runIfNotDry('git', ['commit', '-m', `release: v${_version}`]);
  } else {
    console.log('没有要提交的更改.');
  }
}

/**
 * 提交并推送到 git 仓库
 * @param { string } _version 版本号
 */
async function commitGit(_version) {
  if (!_version) return;
  await runIfNotDry('git', ['tag', `v${_version}`]);
  await runIfNotDry('git', ['push', 'origin', `refs/tags/v${_version}`]);
  await runIfNotDry('git', ['push']);
  if (isDryRun) console.log(`\n空运行完成-运行 git diff 以查看软件包更改`);
  if (skippedPackages.length) console.log(chalk.yellow(`以下软件包被跳过并且未发布:\n- ${skippedPackages.join('\n- ')}`));
  console.log();
}

main().catch((err) => {
  console.error(err);
});
