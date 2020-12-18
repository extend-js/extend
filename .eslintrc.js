module.exports = {
  parser: '@typescript-eslint/parser', // 定义ESLint的解析器
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaVersion: 2019, // 允许解析现代 es 特性
    sourceType: 'module', // 允许使用 imports
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'jest', 'prettier'],
  rules: {
    /* ----- 不同环境 ----- */
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止使用console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止使用debugger
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止使用alert confirm prompt

    /* ----- 空格 ----- */
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
    // 块之前的空格
    'space-before-blocks': [
      'warn',
      {
        functions: 'always', // 函数块
        keywords: 'always', // 关键字块，if、for
        classes: 'always' // 类
      }
    ],
    // 关键字前后空格 if \ for
    'keyword-spacing': [
      'warn',
      {
        before: true,
        after: true
      }
    ],
    /* ----- 其他风格 ----- */
    // 块语句中的内容不能为空
    'no-empty': [
      'warn',
      {
        allowEmptyCatch: true // 允许空catch子句
      }
    ],
    eqeqeq: 'error', // 强制全等
    // indent: ['error', 2], // 强制缩进2字符
    'no-var': 2, // 不要使用 var 声明变量
    'prefer-const': 2, // 如果一个变量从不重新赋值，使用 const 声明
    'no-global-assign': ['error', { exceptions: ['console'] }],

    /* ----- typescript ----- */
    '@typescript-eslint/no-explicit-any': 'off', // 取消不允许使用类型any
    '@typescript-eslint/ban-types': 'off', // 取消禁止使用特定类型
    '@typescript-eslint/no-unsafe-assignment': 'off', // 取消不允许将任何变量和属性分配
    '@typescript-eslint/no-unsafe-return': 'off', // 取消禁止从函数返回任何函数
    '@typescript-eslint/no-unsafe-member-access': 'off', // 取消禁止对 any 类型变量的成员访问
    '@typescript-eslint/no-unsafe-call': 'off', // 取消不允许调用 any 类型的值
    '@typescript-eslint/no-inferrable-types': 'off', // 不允许对初始化为数字，字符串或布尔值的变量或参数进行显式类型声明
    // '@typescript-eslint/no-implied-eval': 'off', // 允许 eval 相关的方法
    '@typescript-eslint/restrict-template-expressions': 'off', // 强制模板文字表达式为字符串类型
    // 强制未绑定方法以其预期范围调用
    '@typescript-eslint/unbound-method': [
      'off',
      {
        ignoreStatic: true
      }
    ],
    // 要求在导出的函数和类的公共类方法上显式返回和参数类型
    '@typescript-eslint/explicit-module-boundary-types': [
      'warn',
      {
        allowArgumentsExplicitlyTypedAsAny: true // 取消参数为 'any' 的警告
      }
    ]
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    },
    {
      files: ['*.spec.ts', '*.spec.js', '*.test.ts', '*.test.js', '**/tests/**', '**/__tests__/**'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off'
      }
    }
  ]
};
