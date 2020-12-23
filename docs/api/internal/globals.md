---
id: "globals"
title: "API"
---

## baseGetTag

> `Const`**baseGetTag**(`arg`: any): string

获取参数的数据的类型

<h3>参数:</h3>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`arg` | any | 需要获取类型的参数 |

<h3>返回:</h3>

`(string)`: 数据类型名称 Null | Undefined | Number | Object | ...

<h3>示例</h3>

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

> 定义于 [packages/internal/src/baseGetTag.ts:33](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/baseGetTag.ts#L33)

___

## baseIsNative

> **baseIsNative**(`value`: any): boolean

isNative 的基本实现没有错误的填充检查

<h3>参数:</h3>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的值 |

<h3>返回:</h3>

`(boolean)`: 是否是内置函数

<h3>示例</h3>

 baseIsNative(Array.prototype.push); // => true
 baseIsNative(_); // => false

> 定义于 [packages/internal/src/baseIsNative.ts:28](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/baseIsNative.ts#L28)

___

## MAX\_SAFE\_INTEGER

> `Const`**MAX\_SAFE\_INTEGER**: number = Number.MAX\_SAFE\_INTEGER \|\| 9007199254740991

Number 最大值

<h3>constant</h3>

Number.MAX_SAFE_INTEGER<h3>示例</h3>

 MAX_SAFE_INTEGER // => 9007199254740991

> 定义于 [packages/internal/src/constant.ts:15](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/constant.ts#L15)

___

## MIN\_SAFE\_INTEGER

> `Const`**MIN\_SAFE\_INTEGER**: number = Number.MIN\_SAFE\_INTEGER \|\| -9007199254740991

Number 最小值

<h3>constant</h3>

Number.MIN_SAFE_INTEGER<h3>示例</h3>

 MIN_SAFE_INTEGER // => -9007199254740991

> 定义于 [packages/internal/src/constant.ts:23](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/constant.ts#L23)

___

## coreJsData

> `Const`**coreJsData**: any = root['\_\_core-js\_shared\_\_']

用于检测扩展的 core-js 填充

<h3>constant</h3>

coreJsData

> 定义于 [packages/internal/src/constant.ts:7](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/constant.ts#L7)

___

## funcProto

> `Const`**funcProto**: Function = Function.prototype

Function 原型链

<h3>constant</h3>

Function.prototype

> 定义于 [packages/internal/src/constant.ts:64](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/constant.ts#L64)

___

## funcToString

> `Const`**funcToString**: () => string = funcProto.toString

Function 原型链

<h3>constant</h3>

Function.prototype

> 定义于 [packages/internal/src/constant.ts:70](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/constant.ts#L70)

___

## getPrototypeOf

> `Const`**getPrototypeOf**: getPrototypeOf = Object.getPrototypeOf

返回对象的原型

<h3>constant</h3>

Object.getPrototypeOf<h3>示例</h3>

 nativeGetPrototypeOf(obj) === Object.prototype // => true
 nativeGetPrototypeOf([]) === Array.prototype // => true

> 定义于 [packages/internal/src/constant.ts:58](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/constant.ts#L58)

___

## hasOwnProperty

> `Const`**hasOwnProperty**: (v: string \| number \| symbol) => boolean = objectProto.hasOwnProperty

基于 Object 原型链上的 hasOwnProperty 方法，检测属性值是否存在

<h3>constant</h3>

Object.prototype.hasOwnProperty<h3>示例</h3>

 const obj = { a: 1, b: 2 }
 objectHasOwnProperty.call(obj, 'a') // true
 objectHasOwnProperty.call(obj, 'toString') // false

> 定义于 [packages/internal/src/constant.ts:39](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/constant.ts#L39)

___

## objectProto

> `Const`**objectProto**: Object = Object.prototype

Object 原型链

<h3>constant</h3>

Object.prototype

> 定义于 [packages/internal/src/constant.ts:29](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/constant.ts#L29)

___

## objectToString

> `Const`**objectToString**: () => string = objectProto.toString

基于 Object 原型链上的 toString 方法，获取对象的类型

<h3>constant</h3>

Object.prototype.toString<h3>示例</h3>

 objectToString.call({}) // [object Object]
 objectToString.call([]) // [object Array]
 objectToString.call(function () {}) // [object Function]

> 定义于 [packages/internal/src/constant.ts:49](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/constant.ts#L49)

___

## symbolToStringTag

> `Const`**symbolToStringTag**: symbol \| undefined = root.Symbol ? root.Symbol.toStringTag : undefined

定义对象的自定义类型标签，通过 Object.prototype.toString.call 获取

<h3>constant</h3>

Symbol.toStringTag

> 定义于 [packages/internal/src/constant.ts:76](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/constant.ts#L76)

___

## freeExports

> `Const`**freeExports**: any = typeof exports === 'object' && exports !== null && !exports['nodeType'] && exports

exports 对象检测

<h3>constant</h3>

{ any } freeSelf<h3>description</h3>

Node.js 原生支持 CommonJS 模块加载机制，在全局环境上会暴露 module 对象和 exports 对象

> 定义于 [packages/internal/src/global.ts:38](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/global.ts#L38)

___

## freeGlobal

> `Const`**freeGlobal**: Global & *typeof* globalThis \| false = typeof global === 'object' && global !== null && global.Object === Object && global

在 node 环境中捕获 global 变量

<h3>constant</h3>

{ (NodeJS.Global & typeof globalThis) | false } freeGlobal

> 定义于 [packages/internal/src/global.ts:5](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/global.ts#L5)

___

## freeGlobalThis

> `Const`**freeGlobalThis**: *typeof* globalThis \| false = typeof globalThis === 'object' && globalThis !== null && globalThis.Object === Object && globalThis

获取 globalThis 变量

<h3>constant</h3>

{ typeof globalThis | false } freeGlobalThis

> 定义于 [packages/internal/src/global.ts:15](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/global.ts#L15)

___

## freeModule

> `Const`**freeModule**: NodeModule \| false = freeExports && typeof module === 'object' && module !== null && !module['nodeType'] && module

module 对象检测

<h3>constant</h3>

{ NodeModule | false } freeSelf<h3>description</h3>

先判断是否存在 exports 对象, 因为这两个在 Node.js 中肯定是同时存在的

> 定义于 [packages/internal/src/global.ts:45](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/global.ts#L45)

___

## freeProcess

> `Const`**freeProcess**: Process \| false = moduleExports && freeGlobal && freeGlobal.process

从 Node.js 中检测可用变量 process

<h3>constant</h3>

{ NodeJS.Process | false } freeProcess

> 定义于 [packages/internal/src/global.ts:59](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/global.ts#L59)

___

## freeSelf

> `Const`**freeSelf**: Window & *typeof* globalThis \| false = typeof self === 'object' && self !== null && self.Object === Object && self

获取 self 变量

<h3>constant</h3>

{ (Window & typeof globalThis) | false } freeSelf

> 定义于 [packages/internal/src/global.ts:26](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/global.ts#L26)

___

## moduleExports

> `Const`**moduleExports**: boolean = freeModule && freeModule.exports === freeExports

检测当前环境是否支持 CommonJS 模块加载机制

<h3>constant</h3>

{ boolean } moduleExports<h3>description</h3>

CommonJS 规定，exports 对象必须为 module.exports 的引用。

> 定义于 [packages/internal/src/global.ts:53](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/global.ts#L53)

___

## root

> `Const`**root**: any = freeGlobalThis \|\| freeGlobal \|\| freeSelf \|\| Function('return this')()

获取顶层全局对象

<h3>constant</h3>

{ any } root

> 定义于 [packages/internal/src/global.ts:65](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/global.ts#L65)

___

## isMaskable

> `Const`**isMaskable**(`value`: any): boolean

检测参数的源码是否能够被屏蔽

<h3>参数:</h3>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

<h3>返回:</h3>

`(boolean)`: 如果参数能够被屏蔽, 返回true, 否则返回false

> 定义于 [packages/internal/src/isMaskable.ts:9](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/isMaskable.ts#L9)

___

## isMasked

> `Const`**isMasked**(`value`: any): boolean

检测参数的源码是否被屏蔽

<h3>参数:</h3>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

<h3>返回:</h3>

`(boolean)`: 如果参数被屏蔽, 返回true, 否则返回false

> 定义于 [packages/internal/src/isMasked.ts:16](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/isMasked.ts#L16)

___

## toSource

> `Const`**toSource**(`value`: any): string

将函数转换为其源代码

<h3>参数:</h3>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要处理的函数 |

<h3>返回:</h3>

`(string)`: 返回源代码

<h3>示例</h3>

 toSource(() => { console.log(1) }) // => "() => { console.log(1) }"
 toSource(console.log) // => "function log() { [native code] }"

> 定义于 [packages/internal/src/toSource.ts:11](https://github.com/extend-js/extend/blob/4306f22/packages/internal/src/toSource.ts#L11)

___
