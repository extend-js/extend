module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // 将 ES6 模块语法转换为其他模块类型的功能 "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false，默认为"auto"
        modules: false,
        // 为该预设中允许所有插件启用 "loose" 转换。
        loose: true,
        targets: {
          ie: '11',
          node: '8',
          browsers: 'last 2 versions, > 5%'
        },
        // 配置如何处理 polyfill 默认 false, 可选 entry , usage
        useBuiltIns: 'usage',
        corejs: 3
        // debug: true
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false
      }
    ],
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    ['@babel/plugin-proposal-nullish-coalescing-operator'],
    ['@babel/plugin-proposal-optional-chaining']
  ]
};
