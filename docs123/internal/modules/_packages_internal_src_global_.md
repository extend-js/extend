# Module: "packages/internal/src/global"

## Variables

## freeExports

• `Const` **freeExports**: any = typeof exports === 'object' && exports !== null && !exports['nodeType'] && exports

*定义于 [packages/internal/src/global.ts:38](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/global.ts#L38)*

exports 对象检测

**`constant`**123 { any } freeSelf

**`description`**123 Node.js 原生支持 CommonJS 模块加载机制，在全局环境上会暴露 module 对象和 exports 对象

___

## freeGlobal

• `Const` **freeGlobal**: Global & *typeof* globalThis | false = typeof global === 'object' && global !== null && global.Object === Object && global

*定义于 [packages/internal/src/global.ts:5](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/global.ts#L5)*

在 node 环境中捕获 global 变量

**`constant`**123 { (NodeJS.Global & typeof globalThis) | false } freeGlobal

___

## freeGlobalThis

• `Const` **freeGlobalThis**: *typeof* globalThis | false = typeof globalThis === 'object' && globalThis !== null && globalThis.Object === Object && globalThis

*定义于 [packages/internal/src/global.ts:15](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/global.ts#L15)*

获取 globalThis 变量

**`constant`**123 { typeof globalThis | false } freeGlobalThis

___

## freeModule

• `Const` **freeModule**: NodeModule | false = freeExports && typeof module === 'object' && module !== null && !module['nodeType'] && module

*定义于 [packages/internal/src/global.ts:45](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/global.ts#L45)*

module 对象检测

**`constant`**123 { NodeModule | false } freeSelf

**`description`**123 先判断是否存在 exports 对象, 因为这两个在 Node.js 中肯定是同时存在的

___

## freeProcess

• `Const` **freeProcess**: Process | false = moduleExports && freeGlobal && freeGlobal.process

*定义于 [packages/internal/src/global.ts:59](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/global.ts#L59)*

从 Node.js 中检测可用变量 process

**`constant`**123 { NodeJS.Process | false } freeProcess

___

## freeSelf

• `Const` **freeSelf**: Window & *typeof* globalThis | false = typeof self === 'object' && self !== null && self.Object === Object && self

*定义于 [packages/internal/src/global.ts:26](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/global.ts#L26)*

获取 self 变量

**`constant`**123 { (Window & typeof globalThis) | false } freeSelf

___

## moduleExports

• `Const` **moduleExports**: boolean = freeModule && freeModule.exports === freeExports

*定义于 [packages/internal/src/global.ts:53](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/global.ts#L53)*

检测当前环境是否支持 CommonJS 模块加载机制

**`constant`**123 { boolean } moduleExports

**`description`**123 CommonJS 规定，exports 对象必须为 module.exports 的引用。

___

## root

• `Const` **root**: any = freeGlobalThis \|\| freeGlobal \|\| freeSelf \|\| Function('return this')()

*定义于 [packages/internal/src/global.ts:65](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/global.ts#L65)*

获取顶层全局对象

**`constant`**123 { any } root
