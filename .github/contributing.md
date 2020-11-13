# 贡献指南

您好！我很高兴迎您为此扩展库做贡献。在提交您的文稿之前，请确保花一点时间并通读以下准则：

- [行为准则](https://www.contributor-covenant.org/version/1/0/0)
- [拉取请求准则](#拉取请求准则)
- [开发设置](#开发设置)
- [项目结构](#项目结构)
- [测试](#测试)

## 拉取请求准则

- 从基础分支签出一个主题分支，例如: `master`，然后合并回该分支。

- 如果添加新功能：
  - 添加随附的测试用例。
  - 提供令人信服的理由来添加此功能。理想情况下，您应该先打开一个建议问题，然后再进行处理。

- 如果要修复错误：
  - 如果要解决特殊问题，请在PR标题中添加 `(fix #xxxx[,#xxxx])` （#xxxx 是 issue ID）以获得更好的发布日志，例如 `update entities encoding/decoding (fix #3899)`
  - 提供PR中错误的详细说明。首选现场演示。
  - 如果适用，添加适当的测试范围。您可以通过运行来检查代码添加的范围 `yarn test --coverage`。

- 在 PR 上工作时可以有多个小提交 GitHub 可以在合并之前自动压缩它们。

- 确保测试通过！

- 提交消息必须遵循[提交消息约定](https://github.com/conventional-changelog/commitlint/tree/master/commitlint/config-conventional)（基于[Angular 约定](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)），以便可以自动生成更改日志。提交消息会在提交之前自动验证（通过 [yorkie](https://github.com/yyx990803/yorkie) 调用 [Git Hooks](https://git-scm.com/docs/githooks)）。

- 只要安装了dev依赖项，提交时会自动检查代码样式（通过 [yorkie](https://github.com/yyx990803/yorkie) 调用 [Git Hooks](https://git-scm.com/docs/githooks)）。

## 开发设置

你需要 [Node.js 10+](http://nodejs.org), 和 [Yarn 1.x](https://yarnpkg.com/en/docs/install)

克隆仓库后, 运行:

```bash
yarn # 安装项目的依赖项
```

所用工具的高级概述:

- [TypeScript](https://www.typescriptlang.org/) 作为开发语言
- [Rollup](https://rollupjs.org) 用于打包
- [Jest](https://jestjs.io/) 用于单元测试
- [Prettier](https://prettier.io/) 用于代码格式化

## 配置

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

该 `bootstrap` 脚本将生成包模板:

```bash
yarn bootstrap [target]
```

- `target` 软件包名称；

- `-f(--force)` 强制还原初始化设置

- `-p(--private)` 私有化

### `yarn build`

该 `build` 脚本将生成构建包:

```bash
# 构建包
yarn build [targets]

# 构建特定格式的包
yarn build [targets] -f esm-browser,cjs
```

- `targets` 要构建的软件包名称，支持模糊匹配；

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

该 `dev` 脚本将监视文件更改。当您要在HTML页面中加载内部版本以进行快速调试时, 这很有用:

```bash
yarn dev <target>
```

- `target` 要监听的包名，必填;

- `-f(--formats)` 构建特定格式软件包, 多种格式指定为以逗号分隔的列表, 和 `build` 脚本一样;

- `-s(--sourcemap)` 生成 sourcemap 文件。注意，这会使构建速度变慢。

### `yarn release`

该 `release` 脚本将自动发布 packages 下的可用包:

```bash
yarn release
```

- `--tag` 发行标签;

- `--preid` 预发行版本标识符;

- `--dry` 只打印运行命令但不运行(会更新版本号);

- `--skipTests` 跳过测试;

- `--skipBuild` 跳过打包;

### `yarn test`

该 `test` 脚本仅调用 `jest` 二进制文件，因此可以使用所有的 [Jest CLI 选项](https://jestjs.io/docs/en/cli)。一些例子

```bash
# 运行所有测试
$ yarn test

# 在监视模式下运行测试
$ yarn test --watch

# 在特定文件中运行测试
$ yarn test fileName

# 运行特定文件测试在一个特定的文件
$ yarn test fileName -t 'test name'
```

## 项目结构

此存储库采用 [monorepo](https://en.wikipedia.org/wiki/Monorepo) 管理方式，在 `packages` 目录下托管多个关联包:

- `internal`: 内部包，作为内部使用的一个包，提供一些内置的方法，不作为公共包发布。

- `validator`: 检测器，一些判断方法汇总封装。

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
