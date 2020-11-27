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
    'prettier/prettier': 1,
    'no-var': 2, // 不要使用 var 声明变量
    'prefer-const': 2, // 如果一个变量从不重新赋值，使用 const 声明
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
