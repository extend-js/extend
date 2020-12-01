# 如何使用该仓库

## 开发设置

你需要 [Node.js 10+](http://nodejs.org), 和 [Yarn 1.x](https://yarnpkg.com/en/docs/install)

克隆项目并切换到相应的开发分支

```bash
git clone https://github.com/extend-js/extend.git
```

安装依赖

```bash
yarn
```

所用工具的概述:

- [TypeScript](https://www.typescriptlang.org/) 作为开发语言

- [Rollup](https://rollupjs.org) 用于打包

- [Jest](https://jestjs.io/) 用于单元测试

- [Prettier](https://prettier.io/) 用于代码格式化

## 构建配置

默认情况下, 软件包可以通过 `package.json` 中的 `buildOptions` 字段作为打包配置选项：

```json
{
  "buildOptions": {
    "name": "js-extend",
    "formats": ["esm-bundler", "cjs"],
    "exports": "named",
    "entryFile": "src/index.ts",
    "globals": {
      "jquery": "$"
    }
  }
}
```

### 参数详情

- `name(String)` 生成包的名称(全局变量名)。用于 `iife/umd` 包，同一页上的其他脚本可以访问它。

- entryFile(String) 入口文件。默认为 `src/index.ts`。

- exports(String) 使用什么导出模式。默认为 `named`。

  - default 如果你使用 export default ... 仅仅导出一个东西，那适合用这个

  - named 如果你导出多个东西，适合用这个

  - auto 根据 entry 模块导出的内容猜测你的意图

  - none 如果你不导出任何内容 (例如，你正在构建应用程序，而不是库)，则适合用这个

- globals(Object) 全局模块。默认为 `{}`。用于 `umd/iife` 包，提供将外部模块ID转换为全局模块的功能。

- formats(Array) 生成包的格式。默认为 `['cjs', 'esm-bundler']`。支持下列格式：

  - cjs CommonJS，适用于 Node。

  - esm-bundler 将软件包保存为适用于 Node 的 ES 模块文件。

  - esm-browser 将软件包保存为现代浏览器中引入的 ES 模块文件。

  - global 一个自动执行的功能，适合作为 script 标签。

## 脚本

### `yarn bootstrap`

创建库包的基本模板:

```bash
yarn bootstrap <target>
```

- `target` 软件包名称；

- `-f(--force)` 强制还原初始化设置

- `-p(--private)` 私有化

### `yarn build`

```bash
yarn build [targets]
```

构建特定格式的包

```bash
yarn build [targets] -f esm-browser,cjs
```

- `targets` 要构建的软件包名称，支持模糊匹配，默认所有；

- `-f(--formats)` 构建特定格式软件包, 多种格式指定为以逗号分隔的列表;
  - **`global`**
  - **`esm-bundler`**
  - **`esm-browser`**
  - **`cjs`**

- `-s(--sourcemap)` 生成 sourcemap 文件。注意，这会使构建速度变慢;

- `-t(--types)` 汇总 d.ts 文件;
  - 在 `temp/<packageName>.api.md` 中生成 API 报告。该报告包含 [api-extractor](https://api-extractor.com/) 发出的潜在警告。
  - 在 `temp/<packageName>.api.json` 中生成 API 模型 json。该文件可用于生成导出的 API 的 Markdown 版本。

- `-r(--release)` 是否发布的包;

- `-d(--devOnly)` 仅打包开发环境包;

- `-p(--prodOnly)` 仅打包生产环境包；

- `-a(--all)` 匹配所有符合规则的目标，否则只匹配第一次被匹配的的目标。

### `yarn dev`

监视文件更改。当您要在HTML页面中加载内部版本以进行快速调试时, 这很有用:

```bash
yarn dev <target>
```

- `target` 要监听的包名，必填;

- `-f(--formats)` 构建特定格式软件包, 多种格式指定为以逗号分隔的列表, 和 `build` 脚本一样;

- `-s(--sourcemap)` 生成 sourcemap 文件。注意，这会使构建速度变慢。

### `yarn release`

自动发布 packages 下的所有包:

```bash
yarn release
```

- `--tag` 发行标签;

- `--preid` 预发行版本标识符;

- `--dry` 只打印运行命令但不运行(会更新版本号);

- `--skipTests` 跳过测试;

- `--skipBuild` 跳过打包;

### 执行测试

可以使用 [Jest CLI 选项](https://jestjs.io/docs/en/cli)。

```bash
# 运行本地测试
yarn test

# 在监视模式下运行测试
yarn test --watch

# 在特定文件中运行测试
yarn test fileName

# 运行特定文件测试在一个特定的文件
yarn test fileName -t 'test name'
```

会在 `coverage` 目录下生成测试覆盖率报告

```bash
yarn test:coverage

# 提交代码覆盖率报告
yarn codecov
```

### 格式检测

检测目录结构

```bash
yarn ls-lint
```

检测 ESLint

```bash
yarn lint
```

### 修复代码

运行所有匹配 `fix:*` 的命令

```bash
yarn fix
```

基于 `ESLint` 修复 `.ts` 和 `.js` 文件

```bash
yarn fix:lint
```

基于 `prettier` 修复 `.json` 文件

```bash
yarn fix:json
```

基于 `prettier` 修复 `.ts` 和 `.js` 文件

```bash
yarn prettier
```

### 文档操作

使用 `vuepress` 生成文档静态站

```bash
yarn docs:dev
```

会在`.vuepress/dist`目录下生成静态资源包

```bash
yarn docs:build
```

### 提交 Git

通过 `cz-customizable` 适配器定制项目的提交说明：

```bash
yarn commit
```

### 生成日志

会在项目根目录下生成 `CHANGELOG.md` 日志文件

```bash
yarn changelog
```

## 项目结构

此存储库采用 [monorepo](https://en.wikipedia.org/wiki/Monorepo) 管理方式，在 `packages` 目录下托管多个关联包:

- `internal`: 内部使用的一个公共方法集合，提供给其他包共用，不作为公共包发布。

- `validator`: 检测器，各种判断方法的汇总集合。

### 导入包

```js
import { isObject } from '@roshin/extends-validator'
```

这可以通过以下几种配置实现：

- 对于 TypeScript，在 `tsconfig.json` 中配置 `compilerOptions.path`

- 对于 Jset，在 `jest.config.js` 中配置 `moduleNameMapper`

- 对于纯 Node.js，它们使用[Yarn Workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/)链接。

### 包依赖

导入包时需要遵循一些规则：

- 软件包不要直接使用相对路径引入，对于强依赖的包，应该在 `package.json` 中列出

- 软件包 `internal` 不应该作为依赖包使用，应该直接使用别名或者[Yarn Workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/)

## 测试

每个软件包中的单元测试应放在 `__tests__` 文件夹中。有关如何编写新的测试规范，请查阅[Jest 文档](https://jestjs.io/docs/en/using-matchers)和现有测试用例。
