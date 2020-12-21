---
    123
id: "extend-internal"
title: "@roshin/extend-internal"
---

# @roshin/extend-internal

## Index

### Variables

* [MAX\_SAFE\_INTEGER](extend-internal.md#max_safe_integer)
* [MIN\_SAFE\_INTEGER](extend-internal.md#min_safe_integer)
* [coreJsData](extend-internal.md#corejsdata)
* [freeExports](extend-internal.md#freeexports)
* [freeGlobal](extend-internal.md#freeglobal)
* [freeGlobalThis](extend-internal.md#freeglobalthis)
* [freeModule](extend-internal.md#freemodule)
* [freeProcess](extend-internal.md#freeprocess)
* [freeSelf](extend-internal.md#freeself)
* [funcProto](extend-internal.md#funcproto)
* [funcToString](extend-internal.md#functostring)
* [getPrototypeOf](extend-internal.md#getprototypeof)
* [hasOwnProperty](extend-internal.md#hasownproperty)
* [maskSrcKey](extend-internal.md#masksrckey)
* [moduleExports](extend-internal.md#moduleexports)
* [nullTag](extend-internal.md#nulltag)
* [objectProto](extend-internal.md#objectproto)
* [objectToString](extend-internal.md#objecttostring)
* [reIsHostCtor](extend-internal.md#reishostctor)
* [reIsNative](extend-internal.md#reisnative)
* [reRegExpChar](extend-internal.md#reregexpchar)
* [root](extend-internal.md#root)
* [symbolToStringTag](extend-internal.md#symboltostringtag)
* [undefinedTag](extend-internal.md#undefinedtag)

### Functions

* [baseGetTag](extend-internal.md#basegettag)
* [baseIsNative](extend-internal.md#baseisnative)
* [isMaskable](extend-internal.md#ismaskable)
* [isMasked](extend-internal.md#ismasked)
* [toSource](extend-internal.md#tosource)

## Variables

### MAX\_SAFE\_INTEGER

• `Const` **MAX\_SAFE\_INTEGER**: number = Number.MAX\_SAFE\_INTEGER \|\| 9007199254740991

*Defined in [packages/internal/src/constant.ts:15](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/constant.ts#L15)*

Number 最大值

**`constant`** Number.MAX_SAFE_INTEGER

**`example`** 
 MAX_SAFE_INTEGER // => 9007199254740991

___

### MIN\_SAFE\_INTEGER

• `Const` **MIN\_SAFE\_INTEGER**: number = Number.MIN\_SAFE\_INTEGER \|\| -9007199254740991

*Defined in [packages/internal/src/constant.ts:23](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/constant.ts#L23)*

Number 最小值

**`constant`** Number.MIN_SAFE_INTEGER

**`example`** 
 MIN_SAFE_INTEGER // => -9007199254740991

___

### coreJsData

• `Const` **coreJsData**: any = root['\_\_core-js\_shared\_\_']

*Defined in [packages/internal/src/constant.ts:7](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/constant.ts#L7)*

用于检测扩展的 core-js 填充

**`constant`** coreJsData

___

### freeExports

• `Const` **freeExports**: any = typeof exports === 'object' && exports !== null && !exports['nodeType'] && exports

*Defined in [packages/internal/src/global.ts:38](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/global.ts#L38)*

exports 对象检测

**`constant`** { any } freeSelf

**`description`** Node.js 原生支持 CommonJS 模块加载机制，在全局环境上会暴露 module 对象和 exports 对象

___

### freeGlobal

• `Const` **freeGlobal**: Global & *typeof* globalThis \| false = typeof global === 'object' && global !== null && global.Object === Object && global

*Defined in [packages/internal/src/global.ts:5](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/global.ts#L5)*

在 node 环境中捕获 global 变量

**`constant`** { (NodeJS.Global & typeof globalThis) | false } freeGlobal

___

### freeGlobalThis

• `Const` **freeGlobalThis**: *typeof* globalThis \| false = typeof globalThis === 'object' && globalThis !== null && globalThis.Object === Object && globalThis

*Defined in [packages/internal/src/global.ts:15](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/global.ts#L15)*

获取 globalThis 变量

**`constant`** { typeof globalThis | false } freeGlobalThis

___

### freeModule

• `Const` **freeModule**: NodeModule \| false = freeExports && typeof module === 'object' && module !== null && !module['nodeType'] && module

*Defined in [packages/internal/src/global.ts:45](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/global.ts#L45)*

module 对象检测

**`constant`** { NodeModule | false } freeSelf

**`description`** 先判断是否存在 exports 对象, 因为这两个在 Node.js 中肯定是同时存在的

___

### freeProcess

• `Const` **freeProcess**: Process \| false = moduleExports && freeGlobal && freeGlobal.process

*Defined in [packages/internal/src/global.ts:59](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/global.ts#L59)*

从 Node.js 中检测可用变量 process

**`constant`** { NodeJS.Process | false } freeProcess

___

### freeSelf

• `Const` **freeSelf**: Window & *typeof* globalThis \| false = typeof self === 'object' && self !== null && self.Object === Object && self

*Defined in [packages/internal/src/global.ts:26](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/global.ts#L26)*

获取 self 变量

**`constant`** { (Window & typeof globalThis) | false } freeSelf

___

### funcProto

• `Const` **funcProto**: Function = Function.prototype

*Defined in [packages/internal/src/constant.ts:64](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/constant.ts#L64)*

Function 原型链

**`constant`** Function.prototype

___

### funcToString

• `Const` **funcToString**: () => string = funcProto.toString

*Defined in [packages/internal/src/constant.ts:70](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/constant.ts#L70)*

Function 原型链

**`constant`** Function.prototype

___

### getPrototypeOf

• `Const` **getPrototypeOf**: getPrototypeOf = Object.getPrototypeOf

*Defined in [packages/internal/src/constant.ts:58](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/constant.ts#L58)*

返回对象的原型

**`constant`** Object.getPrototypeOf

**`example`** 
 nativeGetPrototypeOf(obj) === Object.prototype // => true
 nativeGetPrototypeOf([]) === Array.prototype // => true

___

### hasOwnProperty

• `Const` **hasOwnProperty**: (v: string \| number \| symbol) => boolean = objectProto.hasOwnProperty

*Defined in [packages/internal/src/constant.ts:39](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/constant.ts#L39)*

基于 Object 原型链上的 hasOwnProperty 方法，检测属性值是否存在

**`constant`** Object.prototype.hasOwnProperty

**`example`** 
 const obj = { a: 1, b: 2 }
 objectHasOwnProperty.call(obj, 'a') // true
 objectHasOwnProperty.call(obj, 'toString') // false

___

### maskSrcKey

• `Const` **maskSrcKey**: string = (function () { const uid = /[^.]+$/.exec((coreJsData && coreJsData.keys && coreJsData.keys.IE\_PROTO) \|\| ''); return uid ? 'Symbol(src)\_1.' + uid : ''; })()

*Defined in [packages/internal/src/isMasked.ts:6](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/isMasked.ts#L6)*

用于检测是否是伪装成内置方法

___

### moduleExports

• `Const` **moduleExports**: boolean = freeModule && freeModule.exports === freeExports

*Defined in [packages/internal/src/global.ts:53](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/global.ts#L53)*

检测当前环境是否支持 CommonJS 模块加载机制

**`constant`** { boolean } moduleExports

**`description`** CommonJS 规定，exports 对象必须为 module.exports 的引用。

___

### nullTag

• `Const` **nullTag**: string = "Null"

*Defined in [packages/internal/src/baseGetTag.ts:3](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/baseGetTag.ts#L3)*

___

### objectProto

• `Const` **objectProto**: Object = Object.prototype

*Defined in [packages/internal/src/constant.ts:29](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/constant.ts#L29)*

Object 原型链

**`constant`** Object.prototype

___

### objectToString

• `Const` **objectToString**: () => string = objectProto.toString

*Defined in [packages/internal/src/constant.ts:49](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/constant.ts#L49)*

基于 Object 原型链上的 toString 方法，获取对象的类型

**`constant`** Object.prototype.toString

**`example`** 
 objectToString.call({}) // [object Object]
 objectToString.call([]) // [object Array]
 objectToString.call(function () {}) // [object Function]

___

### reIsHostCtor

• `Const` **reIsHostCtor**: RegExp = /^\[object .+?Constructor\]$/

*Defined in [packages/internal/src/baseIsNative.ts:9](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/baseIsNative.ts#L9)*

___

### reIsNative

• `Const` **reIsNative**: RegExp = RegExp( '^' + funcToString .call(hasOwnProperty) .replace(reRegExpChar, '\\$&') .replace(/hasOwnProperty\|(function).*?(?=\\\()\| for .+?(?=\\\])/g, '$1.*?') + '$' )

*Defined in [packages/internal/src/baseIsNative.ts:11](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/baseIsNative.ts#L11)*

___

### reRegExpChar

• `Const` **reRegExpChar**: RegExp = /[\\^$.*+?()[\]{}\|]/g

*Defined in [packages/internal/src/baseIsNative.ts:7](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/baseIsNative.ts#L7)*

___

### root

• `Const` **root**: any = freeGlobalThis \|\| freeGlobal \|\| freeSelf \|\| Function('return this')()

*Defined in [packages/internal/src/global.ts:65](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/global.ts#L65)*

获取顶层全局对象

**`constant`** { any } root

___

### symbolToStringTag

• `Const` **symbolToStringTag**: symbol \| undefined = root.Symbol ? root.Symbol.toStringTag : undefined

*Defined in [packages/internal/src/constant.ts:76](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/constant.ts#L76)*

定义对象的自定义类型标签，通过 Object.prototype.toString.call 获取

**`constant`** Symbol.toStringTag

___

### undefinedTag

• `Const` **undefinedTag**: string = "Undefined"

*Defined in [packages/internal/src/baseGetTag.ts:4](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/baseGetTag.ts#L4)*

## Functions

### baseGetTag

▸ `Const`**baseGetTag**(`arg`: any): string

*Defined in [packages/internal/src/baseGetTag.ts:33](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/baseGetTag.ts#L33)*

获取参数的数据的类型

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

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arg` | any | 需要获取类型的参数 |

**Returns:** string

数据类型名称 Null | Undefined | Number | Object | ...

___

### baseIsNative

▸ **baseIsNative**(`value`: any): boolean

*Defined in [packages/internal/src/baseIsNative.ts:28](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/baseIsNative.ts#L28)*

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

___

### isMaskable

▸ `Const`**isMaskable**(`value`: any): boolean

*Defined in [packages/internal/src/isMaskable.ts:9](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/isMaskable.ts#L9)*

检测参数的源码是否能够被屏蔽

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

**Returns:** boolean

如果参数能够被屏蔽, 返回true, 否则返回false

___

### isMasked

▸ `Const`**isMasked**(`value`: any): boolean

*Defined in [packages/internal/src/isMasked.ts:16](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/isMasked.ts#L16)*

检测参数的源码是否被屏蔽

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

**Returns:** boolean

如果参数被屏蔽, 返回true, 否则返回false

___

### toSource

▸ `Const`**toSource**(`value`: any): string

*Defined in [packages/internal/src/toSource.ts:11](https://github.com/extend-js/extend/blob/8c7f712/packages/internal/src/toSource.ts#L11)*

将函数转换为其源代码

**`example`** 
 toSource(() => { console.log(1) }) // => "() => { console.log(1) }"
 toSource(console.log) // => "function log() { [native code] }"

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要处理的函数 |

**Returns:** string

返回源代码
