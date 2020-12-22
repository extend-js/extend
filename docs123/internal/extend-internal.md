---
id: "extend-internal"
title: "@roshin/extend-internal"
---

## baseGetTag

`Const`**baseGetTag**(`arg`: any): string

获取参数的数据的类型

**`example`**123 
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

### 参数:

Name | Type | Description |
------ | ------ | ------ |
`arg` | any | 需要获取类型的参数 |

### 返回值:

string

数据类型名称 Null | Undefined | Number | Object | ...

*定义于 [packages/internal/src/baseGetTag.ts:33](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/baseGetTag.ts#L33)*

## baseIsNative

**baseIsNative**(`value`: any): boolean

isNative 的基本实现没有错误的填充检查

**`example`**123 
 baseIsNative(Array.prototype.push); // => true
 baseIsNative(_); // => false

### 参数:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的值 |

### 返回值:

boolean

是否是内置函数

*定义于 [packages/internal/src/baseIsNative.ts:28](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/baseIsNative.ts#L28)*

## MAX\_SAFE\_INTEGER

• `Const` **MAX\_SAFE\_INTEGER**: number = Number.MAX\_SAFE\_INTEGER \|\| 9007199254740991

*定义于 [packages/internal/src/constant.ts:15](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/constant.ts#L15)*

Number 最大值

**`constant`**123 Number.MAX_SAFE_INTEGER

**`example`**123 
 MAX_SAFE_INTEGER // => 9007199254740991

___

## MIN\_SAFE\_INTEGER

• `Const` **MIN\_SAFE\_INTEGER**: number = Number.MIN\_SAFE\_INTEGER \|\| -9007199254740991

*定义于 [packages/internal/src/constant.ts:23](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/constant.ts#L23)*

Number 最小值

**`constant`**123 Number.MIN_SAFE_INTEGER

**`example`**123 
 MIN_SAFE_INTEGER // => -9007199254740991

___

## coreJsData

• `Const` **coreJsData**: any = root['\_\_core-js\_shared\_\_']

*定义于 [packages/internal/src/constant.ts:7](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/constant.ts#L7)*

用于检测扩展的 core-js 填充

**`constant`**123 coreJsData

___

## funcProto

• `Const` **funcProto**: Function = Function.prototype

*定义于 [packages/internal/src/constant.ts:64](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/constant.ts#L64)*

Function 原型链

**`constant`**123 Function.prototype

___

## funcToString

• `Const` **funcToString**: () => string = funcProto.toString

*定义于 [packages/internal/src/constant.ts:70](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/constant.ts#L70)*

Function 原型链

**`constant`**123 Function.prototype

___

## getPrototypeOf

• `Const` **getPrototypeOf**: getPrototypeOf = Object.getPrototypeOf

*定义于 [packages/internal/src/constant.ts:58](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/constant.ts#L58)*

返回对象的原型

**`constant`**123 Object.getPrototypeOf

**`example`**123 
 nativeGetPrototypeOf(obj) === Object.prototype // => true
 nativeGetPrototypeOf([]) === Array.prototype // => true

___

## hasOwnProperty

• `Const` **hasOwnProperty**: (v: string | number | symbol) => boolean = objectProto.hasOwnProperty

*定义于 [packages/internal/src/constant.ts:39](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/constant.ts#L39)*

基于 Object 原型链上的 hasOwnProperty 方法，检测属性值是否存在

**`constant`**123 Object.prototype.hasOwnProperty

**`example`**123 
 const obj = { a: 1, b: 2 }
 objectHasOwnProperty.call(obj, 'a') // true
 objectHasOwnProperty.call(obj, 'toString') // false

___

## objectProto

• `Const` **objectProto**: Object = Object.prototype

*定义于 [packages/internal/src/constant.ts:29](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/constant.ts#L29)*

Object 原型链

**`constant`**123 Object.prototype

___

## objectToString

• `Const` **objectToString**: () => string = objectProto.toString

*定义于 [packages/internal/src/constant.ts:49](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/constant.ts#L49)*

基于 Object 原型链上的 toString 方法，获取对象的类型

**`constant`**123 Object.prototype.toString

**`example`**123 
 objectToString.call({}) // [object Object]
 objectToString.call([]) // [object Array]
 objectToString.call(function () {}) // [object Function]

___

## symbolToStringTag

• `Const` **symbolToStringTag**: symbol | undefined = root.Symbol ? root.Symbol.toStringTag : undefined

*定义于 [packages/internal/src/constant.ts:76](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/constant.ts#L76)*

定义对象的自定义类型标签，通过 Object.prototype.toString.call 获取

**`constant`**123 Symbol.toStringTag

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

## isMaskable

`Const`**isMaskable**(`value`: any): boolean

检测参数的源码是否能够被屏蔽

### 参数:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

### 返回值:

boolean

如果参数能够被屏蔽, 返回true, 否则返回false

*定义于 [packages/internal/src/isMaskable.ts:9](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/isMaskable.ts#L9)*

## isMasked

`Const`**isMasked**(`value`: any): boolean

检测参数的源码是否被屏蔽

### 参数:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

### 返回值:

boolean

如果参数被屏蔽, 返回true, 否则返回false

*定义于 [packages/internal/src/isMasked.ts:16](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/isMasked.ts#L16)*

## toSource

`Const`**toSource**(`value`: any): string

将函数转换为其源代码

**`example`**123 
 toSource(() => { console.log(1) }) // => "() => { console.log(1) }"
 toSource(console.log) // => "function log() { [native code] }"

### 参数:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要处理的函数 |

### 返回值:

string

返回源代码

*定义于 [packages/internal/src/toSource.ts:11](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/toSource.ts#L11)*
