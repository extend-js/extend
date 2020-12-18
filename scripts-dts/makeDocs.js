// /**
//  * 生成文档
//  * @example
//  *  node ./script/makeDocs.js [targets]
//  *  targets => packages 下的软件包，多个使用逗号分隔，默认全部
//  *  -s || --select => 选择软件包，将会列出 packages 下所有软件包列表
//  *  -a || --all => 匹配所有符合规则的目标，否则只匹配第一次被匹配的的目标
//  */

// const path = require('path');
// const fse = require('fs-extra'); // fs 扩展工具包
// const minimist = require('minimist'); // 轻量级的命令行参数解析引擎
// const chalk = require('chalk'); // node 终端样式库
// const { prompt } = require('enquirer'); // 创建交互式 cli 提示

// const { targets: allTargets, fuzzyMatchTarget, resolveRoot, formatPkgName, generatePkgName } = require('./utils');

// const args = minimist(process.argv.slice(2)); // 命令行参数解析规则

// const targets = args._; // 目标项目
// const select = args.select || args.s; // 选择软件包
// const allMatching = args.all || args.a; // 匹配所有符合规则的目标，否则只匹配第一次被匹配的的目标

// run();

// /**
//  * 运行主程序
//  */
// async function run() {
//   const targetList = await prompts();
//   targetList.forEach((target) => {
//     makeDoc(target);
//   });
// }

// /**
//  * 生成文档
//  * @param { string } _target 软件包名
//  */
// function makeDoc(_target) {
//   const json = require(resolveRoot('./temp', `./${_target}.api.json`));
//   console.log(resolveRoot('./temp', `./${_target}.api.json`));
// }

// // const json = require('../temp/extend-validator.api.json');

// // // json.name -- 名字
// // // json.members -- 名字
// // console.log(json.name);

// /**
//  * 用户交互部分
//  * @returns { object } 交互所产生的值
//  */
// async function prompts() {
//   const targetList = allTargets.map(generatePkgName); // 可用包列表
//   let _targets = targetList.map(formatPkgName); // 默认所有可用包
//   if (select) {
//     // 选择软件包
//     const { list } = await prompt({
//       type: 'select', // 提示的类型
//       multiple: true, // 允许多选
//       name: 'list', // 返回值对象上的键
//       result: (names) => names.map(formatPkgName), // 格式化返回结果
//       message: '请选择需要生成文档的软件包', // 在终端中呈现提示时显示的消息
//       choices: targetList // 选项数组
//     });
//     _targets = list;
//   } else if (targets.length >= 1) {
//     // 如果有输入的包
//     _targets = fuzzyMatchTarget(targets, allMatching).map((v) => formatPkgName(generatePkgName(v)));
//   }
//   return _targets;
// }
