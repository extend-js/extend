module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module' // 允许使用 imports
  },
  plugins: ['vue', 'prettier'],
  rules: {
    /* ----- 不同环境 ----- */
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止使用console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止使用debugger
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止使用alert confirm prompt
    'prettier/prettier': 'warn',
    'no-var': 'error', // 不要使用 var 声明变量
    'prefer-const': 'error', // 如果一个变量从不重新赋值，使用 const 声明
    'prefer-template': 'warn', // 能使用模板字符串的地方，尽量使用模板字符串
    'no-template-curly-in-string': 'error', // 防止在单引号或者双引号内出现模板字符串的引用方式，如 "hello ${word}"
    // 'template-curly-spacing': ["error", "always"], // 模板字符串内部间距
    'no-useless-concat': "error", // 禁止不必要的字符串拼接
    // 关于注释的空格，这里表示文字离注释起码一格
    'spaced-comment': [
      'warn',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+']
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true
        }
      }
    ],
    // 块语句中的内容不能为空
    'no-empty': [
      'warn',
      {
        allowEmptyCatch: true // 允许空 catch 子句
      }
    ]
  }
};
