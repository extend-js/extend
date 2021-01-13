module.exports = {
  types: [
    { value: 'feat', name: 'feat: 新增功能' },
    { value: 'fix', name: 'fix: bug 修复' },
    { value: 'docs', name: 'docs: 文档更新' },
    { value: 'style', name: 'style: 不影响代码含义的更改(空格，格式，分号缺失等)' },
    { value: 'refactor', name: 'refactor: 重构代码(既没有新增功能，也没有修复 bug)' },
    { value: 'perf', name: 'perf: 性能优化' },
    { value: 'test', name: 'test: 新增测试用例或是更新现有测试' },
    { value: 'chore', name: 'chore: 其他不修改 src 或 测试文件 的更改' },
    { value: 'revert', name: 'revert: 回滚某个更早之前的提交' },
    { value: 'build', name: 'build: 修改项目构建系统(例如 glup，webpack，rollup 的配置等)' },
    { value: 'ci', name: 'ci: 修改项目的持续集成流程(例如 Travis，Circle，Jenkins，GitLab CI 的配置等)' },
    { value: 'wip', name: 'wip: 正在进行中的' }
  ],
  // 指定特定项目的范围
  // scopes: [
  //   { name: 'init' }, // 初始化
  //   { name: 'validator' }, // 验证器
  //   { name: 'scripts' } // 脚本
  // ],
  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberRegExp: '\\d{1,5}',
  // 如果要覆盖特定提交类型的作用域，例如: 'fix'
  // scopeOverrides: {
  //   fix: [
  //     {name: 'merge'},
  //     {name: 'style'},
  //     {name: 'e2eTest'},
  //     {name: 'unitTest'}
  //   ]
  // },
  // 覆盖消息
  messages: {
    type: '选择更改的类型:',
    scope: '表示此次更改的范围(可选):',
    customScope: '表示此次更改的范围:', // allowCustomScopes 为 true 时启用
    subject: '写一个简短的更改描述:',
    body: '详细的更改说明(可选)。使用 "|" 表示换行:',
    // breaking: '列出所有更改(可选):',
    breaking: '列出所有非兼容性更改(可选):',
    footer: '列出此次更改关闭的问题(可选)。例如: #31, #34:',
    confirmCommit: '确定要继续上面的提交?'
  },
  allowCustomScopes: true, // 将选项自定义选项添加到范围选择，以便您仍然可以在需要时键入范围，默认 false
  allowBreakingChanges: ['feat', 'fix'], // 您想要 breaking change 提示问题的提交类型列表，默认 'none'
  skipQuestions: 'none', // 您要跳过的问题列表，默认 'none'
  subjectLimit: 100, // 限制主题长度，默认 100
  breaklineChar: '|', // 在 body 和 footer 中的换行符，默认 '|'
  ticketNumberPrefix: 'ISSUES CLOSED:', // 设置页脚代码的自定义前缀，默认 'ISSUES CLOSED：'
  BreakingPrefix: 'BREAKING CHANGE:', // 为提交消息中的 Breaking 块设置自定义前缀，默认 'BREAKING CHANGE：'
  footerPrefix: 'ISSUES CLOSED:', // 在提交消息中为 footer 块设置自定义前缀。设置为空字符串以删除前缀，默认 'ISSUES CLOSED：'
  askForBreakingChangeFirst: true, // 为 true 时,它要求将更改作为第一个问题，默认 false
  upperCaseSubject: false // 为 true 时,首字母大写，默认 false
};
