/**
 * 在监视模式下运行汇总以进行开发
 * @example
 *  node ./script/dev.js <target> => 监听指定文件变化
 *  -f || --formats => 构建特定格式软件包
 *  -s || --sourcemap => 生成 sourcemap 文件
 */

import path from 'path';
import chalk from 'chalk'; // node 终端样式库
import execa from 'execa'; // 子进程管理工具
import minimist from 'minimist'; // 轻量级的命令行参数解析引擎
import { fuzzyMatchTarget } from './utils';

const configFile = path.resolve(__dirname, './rollup.config.js'); // 默认 rollup 配置文件路径

const args: minimist.ParsedArgs = minimist(process.argv.slice(2));
const target: string = args._.length ? fuzzyMatchTarget(args._)[0] : ''; // 目标项目
const formats: boolean = args.formats || args.f; // 构建特定格式软件包
const sourceMap: boolean = args.sourcemap || args.s; // 生成 sourcemap 文件

const commit: string = execa.sync('git', ['rev-parse', 'HEAD']).stdout.slice(0, 7); // 拿到本次提交哈希值

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
