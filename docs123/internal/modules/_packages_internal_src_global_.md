Module &quot;packages/internal/src/global&quot;

## Variables

## freeExports

• `Const` **freeExports**: any = typeof exports === 'object' && exports !== null && !exports['nodeType'] && exports

exports 对象检测

**`constant`**123 { any } freeSelf

**`description`**123 Node.js 原生支持 CommonJS 模块加载机制，在全局环境上会暴露 module 对象和 exports 对象

*Defined in [packages/internal/src/global.ts:38](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/global.ts#L38)*

___

## freeGlobal

• `Const` **freeGlobal**: Global & *typeof* globalThis | false = typeof global === 'object' && global !== null && global.Object === Object && global

在 node 环境中捕获 global 变量

**`constant`**123 { (NodeJS.Global & typeof globalThis) | false } freeGlobal

*Defined in [packages/internal/src/global.ts:5](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/global.ts#L5)*

___

## freeGlobalThis

• `Const` **freeGlobalThis**: *typeof* globalThis | false = typeof globalThis === 'object' && globalThis !== null && globalThis.Object === Object && globalThis

获取 globalThis 变量

**`constant`**123 { typeof globalThis | false } freeGlobalThis

*Defined in [packages/internal/src/global.ts:15](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/global.ts#L15)*

___

## freeModule

• `Const` **freeModule**: NodeModule | false = freeExports && typeof module === 'object' && module !== null && !module['nodeType'] && module

module 对象检测

**`constant`**123 { NodeModule | false } freeSelf

**`description`**123 先判断是否存在 exports 对象, 因为这两个在 Node.js 中肯定是同时存在的

*Defined in [packages/internal/src/global.ts:45](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/global.ts#L45)*

___

## freeProcess

• `Const` **freeProcess**: Process | false = moduleExports && freeGlobal && freeGlobal.process

从 Node.js 中检测可用变量 process

**`constant`**123 { NodeJS.Process | false } freeProcess

*Defined in [packages/internal/src/global.ts:59](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/global.ts#L59)*

___

## freeSelf

• `Const` **freeSelf**: Window & *typeof* globalThis | false = typeof self === 'object' && self !== null && self.Object === Object && self

获取 self 变量

**`constant`**123 { (Window & typeof globalThis) | false } freeSelf

*Defined in [packages/internal/src/global.ts:26](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/global.ts#L26)*

___

## moduleExports

• `Const` **moduleExports**: boolean = freeModule && freeModule.exports === freeExports

检测当前环境是否支持 CommonJS 模块加载机制

**`constant`**123 { boolean } moduleExports

**`description`**123 CommonJS 规定，exports 对象必须为 module.exports 的引用。

*Defined in [packages/internal/src/global.ts:53](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/global.ts#L53)*

___

## root

• `Const` **root**: any = freeGlobalThis \|\| freeGlobal \|\| freeSelf \|\| Function('return this')()

获取顶层全局对象

**`constant`**123 { any } root

*Defined in [packages/internal/src/global.ts:65](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/global.ts#L65)*

___
