/**
 * 在监视模式下运行汇总以进行开发
 * @example
 *  node ./script/dev.js <target> => 监听指定文件变化
 *  -f || --formats => 构建特定格式软件包
 *  -s || --sourcemap => 生成 sourcemap 文件
 */

const path = require('path');
const chalk = require('chalk'); // node 终端样式库
const execa = require('execa'); // 子进程管理工具
const minimist = require('minimist'); // 轻量级的命令行参数解析引擎
const { fuzzyMatchTarget } = require('./utils');

const configFile = path.resolve(__dirname, './rollup.config.js'); // 默认 rollup 配置文件路径

const args = minimist(process.argv.slice(2));
const target = args._.length ? fuzzyMatchTarget(args._)[0] : ''; // 目标项目
const formats = args.formats || args.f; // 构建特定格式软件包
const sourceMap = args.sourcemap || args.s; // 生成 sourcemap 文件
const commit = execa.sync('git', ['rev-parse', 'HEAD']).stdout.slice(0, 7); // 拿到本次提交哈希值

if (!target) {
  console.log(chalk.yellow(`请指定需要监听构建的包`));
  process.exit(1);
}

execa(
  'rollup',
  [
    `-wc=${configFile}`, // 使用配置文件
    '--environment',
    [`COMMIT:${commit}`, `TARGET:${target}`, formats ? `FORMATS:${formats}` : ``, sourceMap ? `SOURCE_MAP:true` : ``]
      .filter(Boolean)
      .join(',')
  ],
  {
    stdio: 'inherit'
  }
);
