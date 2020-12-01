# Git 消息提交规范

Git 提交应当书写规范的提交说明。如果没有规范的提交说明，很难阐述当前代码的提交性质（修复Bug、代码性能优化、新增功能或者发布版本等）

## 作用

- 提供更多的历史信息，方便快速浏览

- 可以过滤某些 commit，便于筛选代码 review

- 可以追踪 commit 生成更新日志

- 可以关联 issues

> 这里改编自 [Angular 的提交约定](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular)。

## 定制

这里引入 `commitlint` 约束项目遵循 `Angular` 规范。通过 `cz-customizable` 适配器定制项目的提交说明，可以使用 `cz` 的命令 `git cz` 代替 `git commit` 进行提交说明：

```bash
yarn commit
```

## 规范

**`Git 提交消息`** 可分为三个部分：`Header`、`Body` 和 `Footer`。

```javascript
<Header>

<Body>

<Footer>
```

### Header

`Header` 部分包括三个字段 `type`（必需）、`scope`（可选）和 `subject`（必需）。

```javascript
<type>(<scope>): <subject>
```

#### type

`type` 用于说明 `commit` 的提交性质。

- `feat` 新增功能
- `fix` bug 修复
- `docs` 文档更新
- `style` 不影响代码含义的更改(空格，格式，分号缺失等)
- `refactor` 重构代码(既没有新增功能，也没有修复 bug)
- `perf` 性能优化
- `test` 新增测试用例或是更新现有测试
- `chore` 其他不修改 src 或 测试文件 的更改
- `revert` 回滚某个更早之前的提交
- `build` 修改项目构建系统(例如 glup，webpack，rollup 的配置等)
- `ci` 修改项目的持续集成流程(例如 Travis，Circle，Jenkins，GitLab CI 的配置等)
- `wip` 正在进行中的

#### scope

`scope` 说明 `commit` 影响的范围，可以省略。`scope` 依据项目而定，例如在业务项目中可以依据菜单或者功能模块划分，如果是组件库开发，则可以依据组件划分。

例如：

```javascript
feat(validator): 新增 'isObject' 方法
```

#### subject

`subject` 是 `commit` 的简短描述。长度不超过 `100` 个字符。

### Body

`commit` 的详细描述，说明代码提交的详细说明，可省略。

### Footer

如果代码的提交是不兼容变更或关闭问题，则 `Footer` 必需，否则可以省略。

#### 不兼容变更

当前代码与上一个版本不兼容，则 `Footer` 以 `BREAKING CHANGE` 开头，后面是对变动的描述、以及变动的理由和迁移方法。

#### 关闭问题

如果当前提交是针对特定的 `issue`，那么可以在 `Footer` 部分填写需要关闭的单个 `issue` 或一系列 `issues`。

## 示例

```javascript
feat(validator): 新增 'getTag' 方法

整合 'baseGetTag' 方法的功能到 'getTag' 中

BREAKING CHANGE: 删除 'baseGetTag' 方法

ISSUES CLOSED: #31
```
