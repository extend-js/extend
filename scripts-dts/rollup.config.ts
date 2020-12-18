import path from 'path';
import chalk from 'chalk'; // node 终端样式库
import json from '@rollup/plugin-json'; // 将 .json文件转换为 ES6 模块
import alias from '@rollup/plugin-alias'; // 定义别名
import commonjs from '@rollup/plugin-commonjs'; // 将 CommonJS 模块转换为 ES6
import replace from '@rollup/plugin-replace'; // 在捆绑时替换文件中的字符串
import { nodeResolve } from '@rollup/plugin-node-resolve'; // 解析 node_modules 中的模块
import { babel } from '@rollup/plugin-babel'; // babel 插件
import typescript from 'typescript'; // typescript 模块
import ts from 'rollup-plugin-typescript2'; // 编译 typescript
import builtins from 'rollup-plugin-node-builtins'; // 允许 required / imported 内置节点
import globals from 'rollup-plugin-node-globals'; // 插入节点全局变量，包括插件
import { eslint } from 'rollup-plugin-eslint'; // eslint 插件
import { terser } from 'rollup-plugin-terser'; // js 压缩插件

if (!process.env.TARGET) throw new Error('必须通过 --environment TARGET 指定目标包');

import { BuildOptions } from './types';
import { OutputOptions } from 'rollup';
import { resolveRoot, resolveTarget, generatePkgName, formatPkgName, loadFile } from './utils';

const masterVersion: string = loadFile(resolveRoot('./package.json')).version; // 主版本
const pkgName: string = generatePkgName(process.env.TARGET);
const name: string = formatPkgName(pkgName); // 包名
const packageDir: string = resolveTarget(process.env.TARGET); // 目标包位置
const resolve = (p: string): string => path.resolve(packageDir, p); // 取到包内的文件路径
const pkg = loadFile(resolve(`package.json`)); // 包的 package.json 文件
// 包的配置
const packageOptions: BuildOptions = pkg.buildOptions || {};

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
const defaultFormats: string[] = ['esm-bundler', 'cjs']; // 默认构建类型
const inlineFormats: string[] | '' | undefined = process.env.FORMATS && process.env.FORMATS.split(','); // 指定构建类型
const packageFormats: string[] = inlineFormats || packageOptions.formats || defaultFormats; // 根据优先级拿到构建类型

// 创建包的配置集
const packageConfigs = process.env.PROD_ONLY ? [] : packageFormats.map((format) => createConfig(format, outputConfigs[format]));

// 如果是生产环境下，再创建压缩包
if (process.env.NODE_ENV === 'production') {
  packageFormats.forEach((format) => {
    // CommonJS
    if (format === 'cjs') {
      packageConfigs.push(createProductionConfig(format));
    }
    // 浏览器环境
    if (/^(global|esm-browser)$/.test(format)) {
      packageConfigs.push(createMinifiedConfig(format));
    }
  });
}

export default packageConfigs;

/**
 * 创建配置
 * @param { string } format 包的构建类型
 * @param {*} output 输出配置
 * @param { any[] } plugins 插件
 */
function createConfig(format: string, output: OutputOptions, plugins: any[] = []): any {
  // 如果没有输出配置
  if (!output) {
    console.log(chalk.yellow(`无效的格式: "${format}"`));
    process.exit(1);
  }

  // 定义需要构建的包类型
  const isProductionBuild: boolean = process.env.__DEV__ === 'false' || /\.prod\.js$/.test(output.file || ''); // 生产包
  const isBundlerESMBuild: boolean = /esm-bundler/.test(format); // es 包
  const isBrowserESMBuild: boolean = /esm-browser/.test(format); // 浏览器端 es 包
  const isGlobalBuild: boolean = /global/.test(format); // 浏览器包
  const isNodeBuild: boolean = format === 'cjs'; // commonjs 包

  // 输出配置
  output.exports = packageOptions.exports || 'named'; // 使用什么导出模式
  output.globals = packageOptions.globals || {}; // 全局模块
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
  const defaultExternal =
    isGlobalBuild || isBrowserESMBuild
      ? packageOptions.enableNonBrowserBranches
        ? []
        : ['source-map', '@babel/parser', 'estree-walker']
      : [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];

  const entryFile = packageOptions.entryFile || 'src/index.ts'; // 入口文件
  const externals = packageOptions.external || defaultExternal; // 外链

  return {
    input: resolve(entryFile),
    external: externals, // 外链
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
    onwarn: (msg: string, warn: (arg0: any) => void) => {
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
function createReplacePlugin(
  isProduction: boolean,
  isBundlerESMBuild: boolean,
  isBrowserESMBuild: boolean,
  isGlobalBuild: boolean,
  isNodeBuild: boolean
) {
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
function createProductionConfig(format: string) {
  return createConfig(format, {
    file: resolve(`dist/${name}.${format}.prod.js`),
    format: outputConfigs[format].format
  });
}

/**
 * 构建生产包（压缩版）
 * @param { string } format 包的构建类型
 */
function createMinifiedConfig(format: string) {
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
