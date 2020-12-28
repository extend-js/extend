---
id: "globals"
title: "API"
---

## baseGetTag <Badge text="0.0.1"/>

``` ts
const baseGetTag: (arg: any) => string
```

获取参数的数据的类型

<h4>参数:</h4>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`arg` | any | 需要获取类型的参数 |

<h4> 作者</h4>

roshin

<h4>返回:</h4>

`(string)`: 数据类型名称 Null | Undefined | Number | Object | ...

<h4> 示例</h4>

``` js
baseGetTag(null) // => 'Null'
baseGetTag(void 0) // => 'Undefined'
baseGetTag(NaN) // => 'Number'

class MyObject {}
baseGetTag(new MyObject) // => 'MyObject'

class ValidatorClass {
  get [Symbol.toStringTag]() {
    return 'test';
  }
}
baseGetTag(new ValidatorClass) // => 'test'

const obj = {}
Object.defineProperty(obj, Symbol.toStringTag, { value: 'customObj' });
baseGetTag(obj) // => 'customObj'

const obj2 = {}
obj2[Symbol.toStringTag] = 'test'
baseGetTag(obj2) // => 'Object'
```

> 定义于 [packages/internal/src/baseGetTag.ts:37](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/baseGetTag.ts#L37)

___

## baseIsNative

``` ts
baseIsNative: (value: any) => boolean
```

isNative 的基本实现没有错误的填充检查

<h4>参数:</h4>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的值 |

<h4> 作者</h4>

roshin

<h4>返回:</h4>

`(boolean)`: 是否是内置函数

<h4> 示例</h4>

``` js
baseIsNative(Array.prototype.push); // => true
baseIsNative(_); // => false
```

> 定义于 [packages/internal/src/baseIsNative.ts:32](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/baseIsNative.ts#L32)

___

## MAX\_SAFE\_INTEGER <Badge text="0.0.1"/>

``` ts
const  MAX\_SAFE\_INTEGER: number = Number.MAX\_SAFE\_INTEGER \|\| 9007199254740991
```

Number 最大值

<h4> 作者</h4>

roshin

<h4> constant</h4>

Number.MAX_SAFE_INTEGER

<h4> 示例</h4>

``` js
MAX_SAFE_INTEGER // => 9007199254740991
```

> 定义于 [packages/internal/src/constant.ts:21](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/constant.ts#L21)

___

## MIN\_SAFE\_INTEGER <Badge text="0.0.1"/>

``` ts
const  MIN\_SAFE\_INTEGER: number = Number.MIN\_SAFE\_INTEGER \|\| -9007199254740991
```

Number 最小值

<h4> 作者</h4>

roshin

<h4> constant</h4>

Number.MIN_SAFE_INTEGER

<h4> 示例</h4>

``` js
MIN_SAFE_INTEGER // => -9007199254740991
```

> 定义于 [packages/internal/src/constant.ts:33](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/constant.ts#L33)

___

## coreJsData <Badge text="0.0.1"/>

``` ts
const  coreJsData: any = root['\_\_core-js\_shared\_\_']
```

用于检测扩展的 core-js 填充

<h4> 作者</h4>

roshin

<h4> constant</h4>

coreJsData

> 定义于 [packages/internal/src/constant.ts:9](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/constant.ts#L9)

___

## funcProto <Badge text="0.0.1"/>

``` ts
const  funcProto: Function = Function.prototype
```

Function 原型链

<h4> 作者</h4>

roshin

<h4> constant</h4>

Function.prototype

> 定义于 [packages/internal/src/constant.ts:90](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/constant.ts#L90)

___

## funcToString <Badge text="0.0.1"/>

``` ts
const  funcToString: () => string = funcProto.toString
```

Function 原型链

<h4> 作者</h4>

roshin

<h4> constant</h4>

Function.prototype

> 定义于 [packages/internal/src/constant.ts:98](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/constant.ts#L98)

___

## getPrototypeOf <Badge text="0.0.1"/>

``` ts
const  getPrototypeOf: (o: any) => any = Object.getPrototypeOf
```

返回对象的原型

<h4> 作者</h4>

roshin

<h4> constant</h4>

Object.getPrototypeOf

<h4> 示例</h4>

``` js
nativeGetPrototypeOf(obj) === Object.prototype // => true
nativeGetPrototypeOf([]) === Array.prototype // => true
```

> 定义于 [packages/internal/src/constant.ts:82](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/constant.ts#L82)

___

## hasOwnProperty <Badge text="0.0.1"/>

``` ts
const  hasOwnProperty: (v: string \| number \| symbol) => boolean = objectProto.hasOwnProperty
```

基于 Object 原型链上的 hasOwnProperty 方法，检测属性值是否存在

<h4> 作者</h4>

roshin

<h4> constant</h4>

Object.prototype.hasOwnProperty

<h4> 示例</h4>

``` js
const obj = { a: 1, b: 2 }
objectHasOwnProperty.call(obj, 'a') // true
objectHasOwnProperty.call(obj, 'toString') // false
```

> 定义于 [packages/internal/src/constant.ts:55](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/constant.ts#L55)

___

## objectProto <Badge text="0.0.1"/>

``` ts
const  objectProto: Object = Object.prototype
```

Object 原型链

<h4> 作者</h4>

roshin

<h4> constant</h4>

Object.prototype

> 定义于 [packages/internal/src/constant.ts:41](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/constant.ts#L41)

___

## objectToString <Badge text="0.0.1"/>

``` ts
const  objectToString: () => string = objectProto.toString
```

基于 Object 原型链上的 toString 方法，获取对象的类型

<h4> 作者</h4>

roshin

<h4> constant</h4>

Object.prototype.toString

<h4> 示例</h4>

``` js
objectToString.call({}) // [object Object]
objectToString.call([]) // [object Array]
objectToString.call(function () {}) // [object Function]
```

> 定义于 [packages/internal/src/constant.ts:69](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/constant.ts#L69)

___

## symbolToStringTag <Badge text="0.0.1"/>

``` ts
const  symbolToStringTag: symbol \| undefined = root.Symbol ? root.Symbol.toStringTag : undefined
```

定义对象的自定义类型标签，通过 Object.prototype.toString.call 获取

<h4> 作者</h4>

roshin

<h4> constant</h4>

Symbol.toStringTag

> 定义于 [packages/internal/src/constant.ts:106](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/constant.ts#L106)

___

## freeExports <Badge text="0.0.1"/>

``` ts
const  freeExports: any = typeof exports === 'object' && exports !== null && !exports['nodeType'] && exports
```

exports 对象检测
::: warning 注意
Node.js 原生支持 CommonJS 模块加载机制，在全局环境上会暴露 module 对象和 exports 对象
:::

<h4> 作者</h4>

roshin

<h4> constant</h4>

freeSelf

> 定义于 [packages/internal/src/global.ts:48](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/global.ts#L48)

___

## freeGlobal <Badge text="0.0.1"/>

``` ts
const  freeGlobal: Global & *typeof* globalThis \| false = typeof global === 'object' && global !== null && global.Object === Object && global
```

在 node 环境中捕获 global 变量
::: warning 注意
这里有个缺陷 global 是可以被冒充的 => var global = { Object: Object }
:::

<h4> 作者</h4>

roshin

<h4> constant</h4>

freeGlobal

> 定义于 [packages/internal/src/global.ts:10](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/global.ts#L10)

___

## freeGlobalThis <Badge text="0.0.1"/>

``` ts
const  freeGlobalThis: *typeof* globalThis \| false = typeof globalThis === 'object' && globalThis !== null && globalThis.Object === Object && globalThis
```

获取 globalThis 变量
::: warning 注意
globalThis 提供了一个标准的方式来获取不同环境下的全局 this 对象, 也就是全局对象自身。
可以确保代码在不同的环境下，都可以正常工作。
:::

<h4> 作者</h4>

roshin

<h4> constant</h4>

freeGlobalThis

> 定义于 [packages/internal/src/global.ts:23](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/global.ts#L23)

___

## freeModule <Badge text="0.0.1"/>

``` ts
const  freeModule: NodeModule \| false = freeExports && typeof module === 'object' && module !== null && !module['nodeType'] && module
```

module 对象检测
::: warning 注意
先判断是否存在 exports 对象, 因为这两个在 Node.js 中肯定是同时存在的
:::

<h4> 作者</h4>

roshin

<h4> constant</h4>

freeSelf

> 定义于 [packages/internal/src/global.ts:59](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/global.ts#L59)

___

## freeProcess <Badge text="0.0.1"/>

``` ts
const  freeProcess: Process \| false = moduleExports && freeGlobal && freeGlobal.process
```

从 Node.js 中检测可用变量 process

<h4> 作者</h4>

roshin

<h4> constant</h4>

freeProcess

> 定义于 [packages/internal/src/global.ts:79](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/global.ts#L79)

___

## freeSelf <Badge text="0.0.1"/>

``` ts
const  freeSelf: Window & *typeof* globalThis \| false = typeof self === 'object' && self !== null && self.Object === Object && self
```

获取 self 变量
::: warning 注意
self 在浏览器中大部分情况下指向的是当前 window 引用;
而在 worker 中，只有 self 这个顶层全局对象，是没有 window 对象的;
:::

<h4> 作者</h4>

roshin

<h4> constant</h4>

freeSelf

> 定义于 [packages/internal/src/global.ts:36](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/global.ts#L36)

___

## moduleExports <Badge text="0.0.1"/>

``` ts
const  moduleExports: boolean = freeModule && freeModule.exports === freeExports
```

检测当前环境是否支持 CommonJS 模块加载机制
::: warning 注意
CommonJS 规定，exports 对象必须为 module.exports 的引用。
:::

<h4> 作者</h4>

roshin

<h4> constant</h4>

moduleExports

> 定义于 [packages/internal/src/global.ts:71](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/global.ts#L71)

___

## root <Badge text="0.0.1"/>

``` ts
const  root: any = freeGlobalThis \|\| freeGlobal \|\| freeSelf \|\| // eslint-disable-next-line @typescript-eslint/no-implied-eval Function('return this')()
```

获取顶层全局对象
::: warning 注意
首先是 globalThis，因为这有最大的普适性；
接着是 global，因为在 node 的环境中，性能的考量会比浏览器环境更重要；
在有 window 的环境中，self 肯定是 window 对象的引用；
在松散模式下，可以在函数中返回 this 获取全局对象，但是在严格模式下，this 会返回 undefined;
因此也可以使用 Function('return this')() 来获取顶层全局对象。
:::

<h4> 作者</h4>

roshin

<h4> constant</h4>

{ any } root

> 定义于 [packages/internal/src/global.ts:94](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/global.ts#L94)

___

## isMaskable <Badge text="0.0.1"/>

``` ts
const isMaskable: (value: any) => boolean
```

检测参数的源码是否能够被屏蔽

<h4>参数:</h4>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

<h4> 作者</h4>

roshin

<h4>返回:</h4>

`(boolean)`: 如果参数能够被屏蔽, 返回true, 否则返回false

> 定义于 [packages/internal/src/isMaskable.ts:11](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/isMaskable.ts#L11)

___

## isMasked <Badge text="0.0.1"/>

``` ts
const isMasked: (value: any) => boolean
```

检测参数的源码是否被屏蔽

<h4>参数:</h4>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

<h4> 作者</h4>

roshin

<h4>返回:</h4>

`(boolean)`: 如果参数被屏蔽, 返回true, 否则返回false

> 定义于 [packages/internal/src/isMasked.ts:18](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/isMasked.ts#L18)

___

## toSource <Badge text="0.0.1"/>

``` ts
const toSource: (value: any) => string
```

将函数转换为其源代码

<h4>参数:</h4>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要处理的函数 |

<h4> 作者</h4>

roshin

<h4>返回:</h4>

`(string)`: 返回源代码

<h4> 示例</h4>

``` js
toSource(() => { console.log(1) }) // => "() => { console.log(1) }"
toSource(console.log) // => "function log() { [native code] }"
```

> 定义于 [packages/internal/src/toSource.ts:15](https://github.com/extend-js/extend/blob/be43eb3/packages/internal/src/toSource.ts#L15)

___
