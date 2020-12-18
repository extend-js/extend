---
id: "_extend_internal_d_"
title: "Module: extend-internal.d"
---

**[@roshin/extend](../README.md)**

> [Globals](../README.md) / "extend-internal.d"

# Module: "extend-internal.d"

## Index

### Variables

* [MAX\_SAFE\_INTEGER](_extend_internal_d_.md#max_safe_integer)
* [MIN\_SAFE\_INTEGER](_extend_internal_d_.md#min_safe_integer)
* [baseGetTag](_extend_internal_d_.md#basegettag)
* [coreJsData](_extend_internal_d_.md#corejsdata)
* [freeExports](_extend_internal_d_.md#freeexports)
* [freeGlobal](_extend_internal_d_.md#freeglobal)
* [freeGlobalThis](_extend_internal_d_.md#freeglobalthis)
* [freeModule](_extend_internal_d_.md#freemodule)
* [freeProcess](_extend_internal_d_.md#freeprocess)
* [freeSelf](_extend_internal_d_.md#freeself)
* [funcProto](_extend_internal_d_.md#funcproto)
* [funcToString](_extend_internal_d_.md#functostring)
* [getPrototypeOf](_extend_internal_d_.md#getprototypeof)
* [hasOwnProperty](_extend_internal_d_.md#hasownproperty)
* [isMaskable](_extend_internal_d_.md#ismaskable)
* [moduleExports](_extend_internal_d_.md#moduleexports)
* [objectProto](_extend_internal_d_.md#objectproto)
* [objectToString](_extend_internal_d_.md#objecttostring)
* [root](_extend_internal_d_.md#root)
* [symbolToStringTag](_extend_internal_d_.md#symboltostringtag)

### Functions

* [baseIsNative](_extend_internal_d_.md#baseisnative)

## Variables

### MAX\_SAFE\_INTEGER

• `Const` **MAX\_SAFE\_INTEGER**: number

*Defined in extend-internal.d.ts:133*

Number 最大值

**`constant`** Number.MAX_SAFE_INTEGER

**`example`** 
 MAX_SAFE_INTEGER // => 9007199254740991

___

### MIN\_SAFE\_INTEGER

• `Const` **MIN\_SAFE\_INTEGER**: number

*Defined in extend-internal.d.ts:141*

Number 最小值

**`constant`** Number.MIN_SAFE_INTEGER

**`example`** 
 MIN_SAFE_INTEGER // => -9007199254740991

___

### baseGetTag

• `Const` **baseGetTag**: (arg: any) => string

*Defined in extend-internal.d.ts:30*

获取参数的数据的类型

**`param`** 需要获取类型的参数

**`returns`** 数据类型名称 Null | Undefined | Number | Object | ...

**`example`** 
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

___

### coreJsData

• `Const` **coreJsData**: any

*Defined in extend-internal.d.ts:46*

用于检测扩展的 core-js 填充

**`constant`** coreJsData

___

### freeExports

• `Const` **freeExports**: any

*Defined in extend-internal.d.ts:56*

exports 对象检测

**`constant`** { any } freeSelf

**`description`** Node.js 原生支持 CommonJS 模块加载机制，在全局环境上会暴露 module 对象和 exports 对象

___

### freeGlobal

• `Const` **freeGlobal**: Global & *typeof* globalThis \| false

*Defined in extend-internal.d.ts:62*

在 node 环境中捕获 global 变量

**`constant`** { (NodeJS.Global & typeof globalThis) | false } freeGlobal

___

### freeGlobalThis

• `Const` **freeGlobalThis**: *typeof* globalThis \| false

*Defined in extend-internal.d.ts:68*

获取 globalThis 变量

**`constant`** { typeof globalThis | false } freeGlobalThis

___

### freeModule

• `Const` **freeModule**: NodeModule \| false

*Defined in extend-internal.d.ts:75*

module 对象检测

**`constant`** { NodeModule | false } freeSelf

**`description`** 先判断是否存在 exports 对象, 因为这两个在 Node.js 中肯定是同时存在的

___

### freeProcess

• `Const` **freeProcess**: Process \| false

*Defined in extend-internal.d.ts:81*

从 Node.js 中检测可用变量 process

**`constant`** { NodeJS.Process | false } freeProcess

___

### freeSelf

• `Const` **freeSelf**: Window & *typeof* globalThis \| false

*Defined in extend-internal.d.ts:87*

获取 self 变量

**`constant`** { (Window & typeof globalThis) | false } freeSelf

___

### funcProto

• `Const` **funcProto**: Function

*Defined in extend-internal.d.ts:93*

Function 原型链

**`constant`** Function.prototype

___

### funcToString

• `Const` **funcToString**: () => string

*Defined in extend-internal.d.ts:99*

Function 原型链

**`constant`** Function.prototype

___

### getPrototypeOf

• `Const` **getPrototypeOf**: (o: any) => any

*Defined in extend-internal.d.ts:108*

返回对象的原型

**`constant`** Object.getPrototypeOf

**`example`** 
 nativeGetPrototypeOf(obj) === Object.prototype // => true
 nativeGetPrototypeOf([]) === Array.prototype // => true

___

### hasOwnProperty

• `Const` **hasOwnProperty**: (v: string \| number \| symbol) => boolean

*Defined in extend-internal.d.ts:118*

基于 Object 原型链上的 hasOwnProperty 方法，检测属性值是否存在

**`constant`** Object.prototype.hasOwnProperty

**`example`** 
 const obj = { a: 1, b: 2 }
 objectHasOwnProperty.call(obj, 'a') // true
 objectHasOwnProperty.call(obj, 'toString') // false

___

### isMaskable

• `Const` **isMaskable**: (value: any) => boolean

*Defined in extend-internal.d.ts:125*

检测参数的源码是否能够被屏蔽

**`param`** 要检测的参数

**`returns`** 如果参数能够被屏蔽, 返回true, 否则返回false

___

### moduleExports

• `Const` **moduleExports**: boolean

*Defined in extend-internal.d.ts:148*

检测当前环境是否支持 CommonJS 模块加载机制

**`constant`** { boolean } moduleExports

**`description`** CommonJS 规定，exports 对象必须为 module.exports 的引用。

___

### objectProto

• `Const` **objectProto**: Object

*Defined in extend-internal.d.ts:154*

Object 原型链

**`constant`** Object.prototype

___

### objectToString

• `Const` **objectToString**: () => string

*Defined in extend-internal.d.ts:164*

基于 Object 原型链上的 toString 方法，获取对象的类型

**`constant`** Object.prototype.toString

**`example`** 
 objectToString.call({}) // [object Object]
 objectToString.call([]) // [object Array]
 objectToString.call(function () {}) // [object Function]

___

### root

• `Const` **root**: any

*Defined in extend-internal.d.ts:170*

获取顶层全局对象

**`constant`** { any } root

___

### symbolToStringTag

• `Const` **symbolToStringTag**: symbol \| undefined

*Defined in extend-internal.d.ts:176*

定义对象的自定义类型标签，通过 Object.prototype.toString.call 获取

**`constant`** Symbol.toStringTag

## Functions

### baseIsNative

▸ **baseIsNative**(`value`: any): boolean

*Defined in extend-internal.d.ts:40*

isNative 的基本实现没有错误的填充检查

**`example`** 
 baseIsNative(Array.prototype.push); // => true
 baseIsNative(_); // => false

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的值 |

**Returns:** boolean

是否是内置函数
