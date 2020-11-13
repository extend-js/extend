module.exports = {
  tabWidth: 2, // 指定每个缩进的空格数
  useTabs: false, // 使用 tab 缩进，false 表示空格缩进
  printWidth: 130, // 每行的最大长度
  proseWrap: 'preserve', // 使用默认的折行标准
  htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
  semi: true, // 使用分号结尾
  singleQuote: true, // 使用单引号
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  jsxBracketSameLine: true, // jsx 标签的反尖括号需要换行
  trailingComma: 'none', // 末尾不需要逗号
  bracketSpacing: true, // 大括号内的首尾需要空格
  arrowParens: 'always', // 箭头函数，只有一个参数的时候，也需要括号
  requirePragma: false, // 不需要写文件开头的 @prettier
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  endOfLine: 'auto' // 换行符保持现状
};
