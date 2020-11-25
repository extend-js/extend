/**
 * Git 提交规范 commitlint 校验配置
 * {@link http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html | 提交规范说明参考}
 * @description Header 部分是必填的，Body 和 Footer 可以省略。Header 只有一行，包括三个字段：type（必需）、scope（可选）和 subject（必需）
 * @example
 *  <type>(<scope>): <subject>
 *  // 空一行
 *  <body>
 *  // 空一行
 *  <footer>
 */

'use strict';
// const message = process.env['HUSKY_GIT_PARAMS'];
// const fs = require('fs');

// 支持的 type
const types = [
  'build', // 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
  'ci', // 主要目的是修改项目持续集成流程 (例如 Travis，Jenkins，GitLab CI，Circle等) 的提交
  'feat', // 新增功能
  'fix', // bug 修复
  'docs', // 文档更新
  'perf', // 性能优化
  'refactor', // 重构代码(既没有新增功能，也没有修复 bug)
  'style', // 不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
  'test', // 新增测试用例或是更新现有测试
  'revert', // 回滚某个更早之前的提交
  'release', // 发布
  'wip', // 正在进行中的
  'chore' // 不属于以上类型的其他类型，(日常事务)琐碎的/乏味无聊的/构建工具相关的
];

// 支持的 scope
// const scopes = ['init', 'validator', 'scripts', 'test'];

// function parseMessage(message) {
//   const PATTERN = /^(\w+)(?:\(([^)]+)\))?\\: (.+)$/;
//   const match = PATTERN.exec(message);
//   if (!match) {
//     return null;
//   }
//   return {
//     type: match[1] || null,
//     scope: match[2] || null
//   };
// }

// function getScopesRule() {
//   const messages = fs.readFileSync(message, { encoding: 'utf-8' });
//   const parsed = parseMessage(messages.split('\n')[0]);
//   if (!parsed) {
//     return [2, 'always', scopes];
//   }
//   const { scope, type } = parsed;
//   if (scope && !scopes.includes(scope) && type !== 'release' && !/module:.+/.test(scope)) {
//     return [2, 'always', scopes];
//   } else {
//     return [2, 'always', []];
//   }
// }

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', types] // 类型规则
    // 'scope-enum': getScopesRule // 作用域规则
  }
};
