---
id: "_packages_internal_src_global_"
title: "Module: packages/internal/src/global"
---

# Module: "packages/internal/src/global"

## Index

### Variables

* [freeExports](_packages_internal_src_global_.md#freeexports)
* [freeGlobal](_packages_internal_src_global_.md#freeglobal)
* [freeGlobalThis](_packages_internal_src_global_.md#freeglobalthis)
* [freeModule](_packages_internal_src_global_.md#freemodule)
* [freeProcess](_packages_internal_src_global_.md#freeprocess)
* [freeSelf](_packages_internal_src_global_.md#freeself)
* [moduleExports](_packages_internal_src_global_.md#moduleexports)
* [root](_packages_internal_src_global_.md#root)

## Variables

### freeExports

• `Const` **freeExports**: any = typeof exports === 'object' && exports !== null && !exports['nodeType'] && exports

*Defined in [packages/internal/src/global.ts:38](https://github.com/extend-js/extend/blob/77925b5/packages/internal/src/global.ts#L38)*

exports 对象检测

**`constant`** { any } freeSelf

**`description`** Node.js 原生支持 CommonJS 模块加载机制，在全局环境上会暴露 module 对象和 exports 对象

___

### freeGlobal

• `Const` **freeGlobal**: Global & *typeof* globalThis \| false = typeof global === 'object' && global !== null && global.Object === Object && global

*Defined in [packages/internal/src/global.ts:5](https://github.com/extend-js/extend/blob/77925b5/packages/internal/src/global.ts#L5)*

在 node 环境中捕获 global 变量

**`constant`** { (NodeJS.Global & typeof globalThis) | false } freeGlobal

___

### freeGlobalThis

• `Const` **freeGlobalThis**: *typeof* globalThis \| false = typeof globalThis === 'object' && globalThis !== null && globalThis.Object === Object && globalThis

*Defined in [packages/internal/src/global.ts:15](https://github.com/extend-js/extend/blob/77925b5/packages/internal/src/global.ts#L15)*

获取 globalThis 变量

**`constant`** { typeof globalThis | false } freeGlobalThis

___

### freeModule

• `Const` **freeModule**: NodeModule \| false = freeExports && typeof module === 'object' && module !== null && !module['nodeType'] && module

*Defined in [packages/internal/src/global.ts:45](https://github.com/extend-js/extend/blob/77925b5/packages/internal/src/global.ts#L45)*

module 对象检测

**`constant`** { NodeModule | false } freeSelf

**`description`** 先判断是否存在 exports 对象, 因为这两个在 Node.js 中肯定是同时存在的

___

### freeProcess

• `Const` **freeProcess**: Process \| false = moduleExports && freeGlobal && freeGlobal.process

*Defined in [packages/internal/src/global.ts:59](https://github.com/extend-js/extend/blob/77925b5/packages/internal/src/global.ts#L59)*

从 Node.js 中检测可用变量 process

**`constant`** { NodeJS.Process | false } freeProcess

___

### freeSelf

• `Const` **freeSelf**: Window & *typeof* globalThis \| false = typeof self === 'object' && self !== null && self.Object === Object && self

*Defined in [packages/internal/src/global.ts:26](https://github.com/extend-js/extend/blob/77925b5/packages/internal/src/global.ts#L26)*

获取 self 变量

**`constant`** { (Window & typeof globalThis) | false } freeSelf

___

### moduleExports

• `Const` **moduleExports**: boolean = freeModule && freeModule.exports === freeExports

*Defined in [packages/internal/src/global.ts:53](https://github.com/extend-js/extend/blob/77925b5/packages/internal/src/global.ts#L53)*

检测当前环境是否支持 CommonJS 模块加载机制

**`constant`** { boolean } moduleExports

**`description`** CommonJS 规定，exports 对象必须为 module.exports 的引用。

___

### root

• `Const` **root**: any = freeGlobalThis \|\| freeGlobal \|\| freeSelf \|\| Function('return this')()

*Defined in [packages/internal/src/global.ts:65](https://github.com/extend-js/extend/blob/77925b5/packages/internal/src/global.ts#L65)*

获取顶层全局对象

**`constant`** { any } root
