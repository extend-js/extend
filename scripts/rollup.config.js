const path = require('path');
const chalk = require('chalk'); // node 终端样式库
const typescript = require('typescript'); // typescript 模块
const json = require('@rollup/plugin-json'); // 将 .json文件转换为 ES6 模块
const alias = require('@rollup/plugin-alias'); // 定义别名
const ts = require('rollup-plugin-typescript2'); // 编译 typescript
const commonjs = require('@rollup/plugin-commonjs'); // 将 CommonJS 模块转换为 ES6
const builtins = require('rollup-plugin-node-builtins'); // 允许 required / imported 内置节点
const globals = require('rollup-plugin-node-globals'); // 插入节点全局变量，包括插件
const replace = require('@rollup/plugin-replace'); // 在捆绑时替换文件中的字符串
const { nodeResolve } = require('@rollup/plugin-node-resolve'); // 解析 node_modules 中的模块
const { babel } = require('@rollup/plugin-babel'); // babel 插件
const { eslint } = require('rollup-plugin-eslint'); // eslint 插件
const { terser } = require('rollup-plugin-terser'); // js 压缩插件

if (!process.env.TARGET) throw new Error('必须通过 --environment TARGET 指定目标包');

const { resolveRoot, resolveTarget, generatePkgName, formatPkgName } = require('./utils');

const masterVersion = require(resolveRoot('./package.json')).version; // 主版本
const pkgName = generatePkgName(process.env.TARGET);
const name = formatPkgName(pkgName); // 包名
const packageDir = resolveTarget(process.env.TARGET); // 目标包位置
const resolve = (p) => path.resolve(packageDir, p); // 取到包内的文件路径
const pkg = require(resolve(`package.json`)); // 包的 package.json 文件
// 包的配置
const packageOptions = Object.assign(
  {
    name: '', // 生成包的名称（全局变量名）
    formats: ['esm-bundler', 'cjs'], // 默认构建类型
    exports: 'named', // 使用什么导出模式
    globals: {}, // 全局模块
    enableNonBrowserBranches: false, // 是否开启非浏览器分支
    entryFile: 'src/index.ts' // 入口文件
  },
  pkg.buildOptions || {}
);

let hasTSChecked = false; // 确保 TS 每次构建仅检查一次

// 几种输出格式配置
const outputConfigs = {
  // ES 模块文件，在 webpack 中使用
  'esm-bundler': {
    file: resolve(`dist/${name}.esm-bundler.js`),
    format: `es`
  },
  // ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
  'esm-browser': {
    file: resolve(`dist/${name}.esm-browser.js`),
    format: `es`
  },
  // CommonJS，适用于 Node 和 Browserify / Webpack
  cjs: {
    file: resolve(`dist/${name}.cjs.js`),
    format: `cjs`
  },
  // 一个自执行的函数，适合作为 <script> 标签
  global: {
    file: resolve(`dist/${name}.global.js`),
    format: `iife`
  }
};

// 包构建类型
const inlineFormats = process.env.FORMATS && process.env.FORMATS.split(','); // 指定构建类型
const packageFormats = inlineFormats || packageOptions.formats; // 根据优先级拿到构建类型

// 创建包的配置集
const packageConfigs = process.env.PROD_ONLY ? [] : packageFormats.map((format) => createConfig(format, outputConfigs[format]));

// 如果是生产环境下，再创建压缩包
if (process.env.NODE_ENV === 'production') {
  packageFormats.forEach((format) => {
    if (format === 'cjs') {
      packageConfigs.push(createProductionConfig(format));
    }
    if (/^(global|esm-browser)$/.test(format)) {
      packageConfigs.push(createMinifiedConfig(format));
    }
  });
}

module.exports = packageConfigs;

/**
 * 创建配置
 * @param { string } format 包的构建类型
 * @param {*} output 输出配置
 * @param { any[] } plugins 插件
 */
function createConfig(format, output, plugins = []) {
  // 如果没有输出配置
  if (!output) {
    console.log(chalk.yellow(`无效的格式: "${format}"`));
    process.exit(1);
  }

  // 定义需要构建的包类型
  const isProductionBuild = process.env.__DEV__ === 'false' || /\.prod\.js$/.test(output.file || ''); // 生产包
  const isBundlerESMBuild = /esm-bundler/.test(format); // es 包
  const isBrowserESMBuild = /esm-browser/.test(format); // 浏览器端 es 包
  const isNodeBuild = format === 'cjs'; // commonjs 包
  const isGlobalBuild = /global/.test(format); // 浏览器包

  // 输出配置
  output.exports = packageOptions.exports; // 使用什么导出模式
  output.globals = packageOptions.globals; // 全局模块
  output.sourcemap = !!process.env.SOURCE_MAP; // 是否生成 sourcemap 文件
  output.externalLiveBindings = false; // 不生成支持实时绑定的代码
  // 生成包的名称（全局变量名）
  if (isGlobalBuild) output.name = packageOptions.name;

  // ts 插件
  const shouldEmitDeclarations = process.env.TYPES && !hasTSChecked;
  const tsPlugin = ts({
    check: process.env.NODE_ENV === 'production' && !hasTSChecked, // 是否对代码进行诊断检查
    typescript: typescript, // 随插件安装的 typescript 模块
    tsconfig: resolveRoot('./tsconfig.json'), // tsconfig.json的路径。
    cacheRoot: resolveRoot('./node_modules/.rts2_cache'), // 缓存路径。
    // 合并 tsconfig.json 配置
    tsconfigOverride: {
      compilerOptions: {
        module: 'ESNext', // 指定生成哪个模块系统代码
        sourceMap: output.sourcemap,
        declaration: shouldEmitDeclarations,
        declarationMap: shouldEmitDeclarations
      },
      exclude: ['**/__tests__']
    }
  });
  hasTSChecked = true; // 确保每个版本只检查一次

  // 非浏览器包的插件
  const nodePlugins =
    packageOptions.enableNonBrowserBranches && !isNodeBuild
      ? [
          nodeResolve({
            // 将自定义选项传递给解析插件
            customResolveOptions: {
              moduleDirectory: 'node_modules'
            },
            extensions: ['.js', '.ts'], // 支持的后缀
            preferBuiltins: true // 首选内置模块
          }),
          commonjs({
            sourceMap: false // 不生成 CommonJS 模块的 sourceMap
          }),
          builtins(),
          globals(),
          babel({
            configFile: resolveRoot('./babel.config.js'),
            exclude: 'node_modules/**', // 忽略掉 node_modules 内的
            extensions: ['.js', '.ts'], // 支持的文件扩展名数组, babel 默认不支持 ts 需要手动添加
            babelHelpers: 'runtime'
          })
        ]
      : [];
  const external =
    isGlobalBuild || isBrowserESMBuild
      ? packageOptions.enableNonBrowserBranches
        ? []
        : ['source-map', '@babel/parser', 'estree-walker']
      : [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];

  return {
    input: resolve(packageOptions.entryFile),
    external, // 外链
    plugins: [
      json({
        namedExports: false // 不要为JSON对象的每个属性生成命名导出
      }),
      alias({
        entries: []
      }),
      eslint({
        throwOnError: true,
        throwOnWarning: true,
        exclude: ['node_modules/**', '**/dist/**']
      }),
      tsPlugin,
      createReplacePlugin(isProductionBuild, isBundlerESMBuild, isBrowserESMBuild, isGlobalBuild, isNodeBuild),
      ...nodePlugins,
      ...plugins
    ],
    output,
    onwarn: (msg, warn) => {
      if (!/Circular/.test(msg)) warn(msg);
    },
    // 去掉这里可以兼容低版本浏览器，但是会增加其体积，建议分离，用户单独引入 babel/polyfill 会更好
    treeshake: {
      moduleSideEffects: false
    }
  };
}

/**
 * replace 插件
 * @param { boolean } isProduction 是否生产包
 * @param { boolean } isBundlerESMBuild 是否 es 包
 * @param { boolean } isBrowserESMBuild 是否浏览器端 es 包
 * @param { boolean } isGlobalBuild 是否浏览器包
 * @param { boolean } isNodeBuild 是否 commonjs 包
 */
function createReplacePlugin(isProduction, isBundlerESMBuild, isBrowserESMBuild, isGlobalBuild, isNodeBuild) {
  const replacements = {
    __COMMIT__: `"${process.env.COMMIT}"`,
    __VERSION__: `"${masterVersion}"`,
    __DEV__: isBundlerESMBuild ? `(process.env.NODE_ENV !== 'production')` : `${!isProduction}`,
    __BROWSER__: `${isGlobalBuild || isBrowserESMBuild}`,
    __GLOBAL__: `${isGlobalBuild}`,
    __TEST__: `${false}`,
    __ESM_BUNDLER__: `${isBundlerESMBuild}`,
    __ESM_BROWSER__: `${isBrowserESMBuild}`,
    __NODE_JS__: `${isNodeBuild}`
  };
  Object.keys(replacements).forEach((key) => {
    if (key in process.env) {
      replacements[key] = process.env[key];
    }
  });
  return replace(replacements);
}

/**
 * 构建生产包
 * @param { string } format 包的构建类型
 */
function createProductionConfig(format) {
  return createConfig(format, {
    file: resolve(`dist/${name}.${format}.prod.js`),
    format: outputConfigs[format].format
  });
}

/**
 * 构建生产包（压缩版）
 * @param { string } format 包的构建类型
 */
function createMinifiedConfig(format) {
  return createConfig(
    format,
    {
      file: outputConfigs[format].file.replace(/\.js$/, '.prod.js'),
      format: outputConfigs[format].format
    },
    [
      terser({
        module: /^esm/.test(format),
        compress: {
          ecma: 2015,
          pure_getters: true
        }
      })
    ]
  );
}
