# 安装和使用

## 安装

[@roshin/extend](https://github.com/extend-js/extend) 使用 [monorepo](https://en.wikipedia.org/wiki/Monorepo) 管理各个工具包，使用 [yarn](https://yarn.bootcss.com/) 管理依赖项。具体安装如下：

```bash
yarn add @roshin/extend-<packageName>
# or
npm install @roshin/extend-<packageName> --save
```

## 使用

考虑到引入体积问题，`@roshin/extend` 不提供整体的引入方式，可以根据不同的业务需求引入不同的模块。

```javascript
// 检测是否是对象
const { isObject } = require("@roshin/extend-validator");
isObject({}); // => true
isObject([1, 2, 3]); // => true
isObject(function fn() {}); // => true
isObject(null); // => false
```

> 更多关于 @roshin/extend 的模块可查看 [介绍](/guide/introduction)。
