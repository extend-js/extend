---
id: "README"
title: "@roshin/extend"
---

# @roshin/extend

## Index

### Variables

* [MAX\_SAFE\_INTEGER](README.md#max_safe_integer)
* [MIN\_SAFE\_INTEGER](README.md#min_safe_integer)
* [\_\_BROWSER\_\_](README.md#__browser__)
* [\_\_COMMIT\_\_](README.md#__commit__)
* [\_\_DEV\_\_](README.md#__dev__)
* [\_\_ESM\_BROWSER\_\_](README.md#__esm_browser__)
* [\_\_ESM\_BUNDLER\_\_](README.md#__esm_bundler__)
* [\_\_GLOBAL\_\_](README.md#__global__)
* [\_\_NODE\_JS\_\_](README.md#__node_js__)
* [\_\_TEST\_\_](README.md#__test__)
* [\_\_VERSION\_\_](README.md#__version__)
* [coreJsData](README.md#corejsdata)
* [dataViewCtorString](README.md#dataviewctorstring)
* [dataViewTag](README.md#dataviewtag)
* [freeExports](README.md#freeexports)
* [freeGlobal](README.md#freeglobal)
* [freeGlobalThis](README.md#freeglobalthis)
* [freeModule](README.md#freemodule)
* [freeProcess](README.md#freeprocess)
* [freeSelf](README.md#freeself)
* [funcProto](README.md#funcproto)
* [funcToString](README.md#functostring)
* [getPrototypeOf](README.md#getprototypeof)
* [getTag](README.md#gettag)
* [hasOwnProperty](README.md#hasownproperty)
* [mapCtorString](README.md#mapctorstring)
* [mapTag](README.md#maptag)
* [maskSrcKey](README.md#masksrckey)
* [moduleExports](README.md#moduleexports)
* [nullTag](README.md#nulltag)
* [objectProto](README.md#objectproto)
* [objectTag](README.md#objecttag)
* [objectToString](README.md#objecttostring)
* [promiseCtorString](README.md#promisectorstring)
* [promiseTag](README.md#promisetag)
* [reIsHostCtor](README.md#reishostctor)
* [reIsNative](README.md#reisnative)
* [reRegExpChar](README.md#reregexpchar)
* [root](README.md#root)
* [setCtorString](README.md#setctorstring)
* [setTag](README.md#settag)
* [symbolToStringTag](README.md#symboltostringtag)
* [undefinedTag](README.md#undefinedtag)
* [weakMapCtorString](README.md#weakmapctorstring)
* [weakMapTag](README.md#weakmaptag)

### Functions

* [baseGetTag](README.md#basegettag)
* [baseIsNative](README.md#baseisnative)
* [isFunction](README.md#isfunction)
* [isMaskable](README.md#ismaskable)
* [isMasked](README.md#ismasked)
* [isNative](README.md#isnative)
* [isNil](README.md#isnil)
* [isNumber](README.md#isnumber)
* [isObject](README.md#isobject)
* [isObjectHost](README.md#isobjecthost)
* [isObjectLike](README.md#isobjectlike)
* [isObjectPlain](README.md#isobjectplain)
* [toSource](README.md#tosource)

--------- index ---------

## Index

### Variables

* [MAX\_SAFE\_INTEGER](README.md#max_safe_integer)
* [MIN\_SAFE\_INTEGER](README.md#min_safe_integer)
* [\_\_BROWSER\_\_](README.md#__browser__)
* [\_\_COMMIT\_\_](README.md#__commit__)
* [\_\_DEV\_\_](README.md#__dev__)
* [\_\_ESM\_BROWSER\_\_](README.md#__esm_browser__)
* [\_\_ESM\_BUNDLER\_\_](README.md#__esm_bundler__)
* [\_\_GLOBAL\_\_](README.md#__global__)
* [\_\_NODE\_JS\_\_](README.md#__node_js__)
* [\_\_TEST\_\_](README.md#__test__)
* [\_\_VERSION\_\_](README.md#__version__)
* [coreJsData](README.md#corejsdata)
* [dataViewCtorString](README.md#dataviewctorstring)
* [dataViewTag](README.md#dataviewtag)
* [freeExports](README.md#freeexports)
* [freeGlobal](README.md#freeglobal)
* [freeGlobalThis](README.md#freeglobalthis)
* [freeModule](README.md#freemodule)
* [freeProcess](README.md#freeprocess)
* [freeSelf](README.md#freeself)
* [funcProto](README.md#funcproto)
* [funcToString](README.md#functostring)
* [getPrototypeOf](README.md#getprototypeof)
* [getTag](README.md#gettag)
* [hasOwnProperty](README.md#hasownproperty)
* [mapCtorString](README.md#mapctorstring)
* [mapTag](README.md#maptag)
* [maskSrcKey](README.md#masksrckey)
* [moduleExports](README.md#moduleexports)
* [nullTag](README.md#nulltag)
* [objectProto](README.md#objectproto)
* [objectTag](README.md#objecttag)
* [objectToString](README.md#objecttostring)
* [promiseCtorString](README.md#promisectorstring)
* [promiseTag](README.md#promisetag)
* [reIsHostCtor](README.md#reishostctor)
* [reIsNative](README.md#reisnative)
* [reRegExpChar](README.md#reregexpchar)
* [root](README.md#root)
* [setCtorString](README.md#setctorstring)
* [setTag](README.md#settag)
* [symbolToStringTag](README.md#symboltostringtag)
* [undefinedTag](README.md#undefinedtag)
* [weakMapCtorString](README.md#weakmapctorstring)
* [weakMapTag](README.md#weakmaptag)

### Functions

* [baseGetTag](README.md#basegettag)
* [baseIsNative](README.md#baseisnative)
* [isFunction](README.md#isfunction)
* [isMaskable](README.md#ismaskable)
* [isMasked](README.md#ismasked)
* [isNative](README.md#isnative)
* [isNil](README.md#isnil)
* [isNumber](README.md#isnumber)
* [isObject](README.md#isobject)
* [isObjectHost](README.md#isobjecthost)
* [isObjectLike](README.md#isobjectlike)
* [isObjectPlain](README.md#isobjectplain)
* [toSource](README.md#tosource)

--------- index ---------

## Variables

### MAX\_SAFE\_INTEGER

• `Const` **MAX\_SAFE\_INTEGER**: number = Number.MAX\_SAFE\_INTEGER \|\| 9007199254740991

*Defined in [packages/internal/src/constant.ts:15](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/constant.ts#L15)*

Number 最大值

**`constant`** Number.MAX_SAFE_INTEGER

**`example`** 
 MAX_SAFE_INTEGER // => 9007199254740991

___

### MIN\_SAFE\_INTEGER

• `Const` **MIN\_SAFE\_INTEGER**: number = Number.MIN\_SAFE\_INTEGER \|\| -9007199254740991

*Defined in [packages/internal/src/constant.ts:23](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/constant.ts#L23)*

Number 最小值

**`constant`** Number.MIN_SAFE_INTEGER

**`example`** 
 MIN_SAFE_INTEGER // => -9007199254740991

___

### \_\_BROWSER\_\_

• `Let` **\_\_BROWSER\_\_**: boolean

*Defined in [packages/global.d.ts:16](https://github.com/extend-js/extend/blob/16506ca/packages/global.d.ts#L16)*

浏览器版本（global / esm builds）

___

### \_\_COMMIT\_\_

• `Let` **\_\_COMMIT\_\_**: string

*Defined in [packages/global.d.ts:41](https://github.com/extend-js/extend/blob/16506ca/packages/global.d.ts#L41)*

git提交哈希值

___

### \_\_DEV\_\_

• `Let` **\_\_DEV\_\_**: boolean

*Defined in [packages/global.d.ts:6](https://github.com/extend-js/extend/blob/16506ca/packages/global.d.ts#L6)*

环境变量

___

### \_\_ESM\_BROWSER\_\_

• `Let` **\_\_ESM\_BROWSER\_\_**: boolean

*Defined in [packages/global.d.ts:31](https://github.com/extend-js/extend/blob/16506ca/packages/global.d.ts#L31)*

esm 浏览器端版本

___

### \_\_ESM\_BUNDLER\_\_

• `Let` **\_\_ESM\_BUNDLER\_\_**: boolean

*Defined in [packages/global.d.ts:26](https://github.com/extend-js/extend/blob/16506ca/packages/global.d.ts#L26)*

esm 版本

___

### \_\_GLOBAL\_\_

• `Let` **\_\_GLOBAL\_\_**: boolean

*Defined in [packages/global.d.ts:21](https://github.com/extend-js/extend/blob/16506ca/packages/global.d.ts#L21)*

global 版本

___

### \_\_NODE\_JS\_\_

• `Let` **\_\_NODE\_JS\_\_**: boolean

*Defined in [packages/global.d.ts:36](https://github.com/extend-js/extend/blob/16506ca/packages/global.d.ts#L36)*

commonjs 版本

___

### \_\_TEST\_\_

• `Let` **\_\_TEST\_\_**: boolean

*Defined in [packages/global.d.ts:11](https://github.com/extend-js/extend/blob/16506ca/packages/global.d.ts#L11)*

测试环境

___

### \_\_VERSION\_\_

• `Let` **\_\_VERSION\_\_**: string

*Defined in [packages/global.d.ts:46](https://github.com/extend-js/extend/blob/16506ca/packages/global.d.ts#L46)*

版本号

___

### coreJsData

• `Const` **coreJsData**: any = root['\_\_core-js\_shared\_\_']

*Defined in [packages/internal/src/constant.ts:7](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/constant.ts#L7)*

用于检测扩展的 core-js 填充

**`constant`** coreJsData

___

### dataViewCtorString

• `Const` **dataViewCtorString**: undefined \| string = typeof DataView === undefined ? undefined : \`${DataView}\`

*Defined in [packages/validator/src/getTag.ts:12](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/getTag.ts#L12)*

___

### dataViewTag

• `Const` **dataViewTag**: \"DataView\" = "DataView"

*Defined in [packages/validator/src/getTag.ts:4](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/getTag.ts#L4)*

___

### freeExports

• `Const` **freeExports**: any = typeof exports === 'object' && exports !== null && !exports['nodeType'] && exports

*Defined in [packages/internal/src/global.ts:38](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/global.ts#L38)*

exports 对象检测

**`constant`** { any } freeSelf

**`description`** Node.js 原生支持 CommonJS 模块加载机制，在全局环境上会暴露 module 对象和 exports 对象

___

### freeGlobal

• `Const` **freeGlobal**: Global & *typeof* globalThis \| false = typeof global === 'object' && global !== null && global.Object === Object && global

*Defined in [packages/internal/src/global.ts:5](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/global.ts#L5)*

在 node 环境中捕获 global 变量

**`constant`** { (NodeJS.Global & typeof globalThis) | false } freeGlobal

___

### freeGlobalThis

• `Const` **freeGlobalThis**: *typeof* globalThis \| false = typeof globalThis === 'object' && globalThis !== null && globalThis.Object === Object && globalThis

*Defined in [packages/internal/src/global.ts:15](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/global.ts#L15)*

获取 globalThis 变量

**`constant`** { typeof globalThis | false } freeGlobalThis

___

### freeModule

• `Const` **freeModule**: NodeModule \| false = freeExports && typeof module === 'object' && module !== null && !module['nodeType'] && module

*Defined in [packages/internal/src/global.ts:45](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/global.ts#L45)*

module 对象检测

**`constant`** { NodeModule | false } freeSelf

**`description`** 先判断是否存在 exports 对象, 因为这两个在 Node.js 中肯定是同时存在的

___

### freeProcess

• `Const` **freeProcess**: Process \| false = moduleExports && freeGlobal && freeGlobal.process

*Defined in [packages/internal/src/global.ts:59](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/global.ts#L59)*

从 Node.js 中检测可用变量 process

**`constant`** { NodeJS.Process | false } freeProcess

___

### freeSelf

• `Const` **freeSelf**: Window & *typeof* globalThis \| false = typeof self === 'object' && self !== null && self.Object === Object && self

*Defined in [packages/internal/src/global.ts:26](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/global.ts#L26)*

获取 self 变量

**`constant`** { (Window & typeof globalThis) | false } freeSelf

___

### funcProto

• `Const` **funcProto**: Function = Function.prototype

*Defined in [packages/internal/src/constant.ts:64](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/constant.ts#L64)*

Function 原型链

**`constant`** Function.prototype

___

### funcToString

• `Const` **funcToString**: () => string = funcProto.toString

*Defined in [packages/internal/src/constant.ts:70](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/constant.ts#L70)*

Function 原型链

**`constant`** Function.prototype

___

### getPrototypeOf

• `Const` **getPrototypeOf**: getPrototypeOf = Object.getPrototypeOf

*Defined in [packages/internal/src/constant.ts:58](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/constant.ts#L58)*

返回对象的原型

**`constant`** Object.getPrototypeOf

**`example`** 
 nativeGetPrototypeOf(obj) === Object.prototype // => true
 nativeGetPrototypeOf([]) === Array.prototype // => true

___

### getTag

• `Let` **getTag**: [baseGetTag](README.md#basegettag) = baseGetTag

*Defined in [packages/validator/src/getTag.ts:18](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/getTag.ts#L18)*

___

### hasOwnProperty

• `Const` **hasOwnProperty**: (v: string \| number \| symbol) => boolean = objectProto.hasOwnProperty

*Defined in [packages/internal/src/constant.ts:39](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/constant.ts#L39)*

基于 Object 原型链上的 hasOwnProperty 方法，检测属性值是否存在

**`constant`** Object.prototype.hasOwnProperty

**`example`** 
 const obj = { a: 1, b: 2 }
 objectHasOwnProperty.call(obj, 'a') // true
 objectHasOwnProperty.call(obj, 'toString') // false

___

### mapCtorString

• `Const` **mapCtorString**: undefined \| string = typeof Map === undefined ? undefined : \`${Map}\`

*Defined in [packages/validator/src/getTag.ts:13](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/getTag.ts#L13)*

___

### mapTag

• `Const` **mapTag**: \"Map\" = "Map"

*Defined in [packages/validator/src/getTag.ts:5](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/getTag.ts#L5)*

___

### maskSrcKey

• `Const` **maskSrcKey**: string = (function () { const uid = /[^.]+$/.exec((coreJsData && coreJsData.keys && coreJsData.keys.IE\_PROTO) \|\| ''); return uid ? 'Symbol(src)\_1.' + uid : '';})()

*Defined in [packages/internal/src/isMasked.ts:6](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/isMasked.ts#L6)*

用于检测是否是伪装成内置方法

___

### moduleExports

• `Const` **moduleExports**: boolean = freeModule && freeModule.exports === freeExports

*Defined in [packages/internal/src/global.ts:53](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/global.ts#L53)*

检测当前环境是否支持 CommonJS 模块加载机制

**`constant`** { boolean } moduleExports

**`description`** CommonJS 规定，exports 对象必须为 module.exports 的引用。

___

### nullTag

• `Const` **nullTag**: string = "Null"

*Defined in [packages/internal/src/baseGetTag.ts:3](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/baseGetTag.ts#L3)*

___

### objectProto

• `Const` **objectProto**: Object = Object.prototype

*Defined in [packages/internal/src/constant.ts:29](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/constant.ts#L29)*

Object 原型链

**`constant`** Object.prototype

___

### objectTag

• `Const` **objectTag**: \"Object\" = "Object"

*Defined in [packages/validator/src/getTag.ts:6](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/getTag.ts#L6)*

___

### objectToString

• `Const` **objectToString**: () => string = objectProto.toString

*Defined in [packages/internal/src/constant.ts:49](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/constant.ts#L49)*

基于 Object 原型链上的 toString 方法，获取对象的类型

**`constant`** Object.prototype.toString

**`example`** 
 objectToString.call({}) // [object Object]
 objectToString.call([]) // [object Array]
 objectToString.call(function () {}) // [object Function]

___

### promiseCtorString

• `Const` **promiseCtorString**: undefined \| string = typeof Promise === undefined ? undefined : \`${Promise}\`

*Defined in [packages/validator/src/getTag.ts:14](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/getTag.ts#L14)*

___

### promiseTag

• `Const` **promiseTag**: \"Promise\" = "Promise"

*Defined in [packages/validator/src/getTag.ts:7](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/getTag.ts#L7)*

___

### reIsHostCtor

• `Const` **reIsHostCtor**: RegExp = /^\[object .+?Constructor\]$/

*Defined in [packages/internal/src/baseIsNative.ts:9](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/baseIsNative.ts#L9)*

___

### reIsNative

• `Const` **reIsNative**: RegExp = RegExp( '^' + funcToString .call(hasOwnProperty) .replace(reRegExpChar, '\\$&') .replace(/hasOwnProperty\|(function).*?(?=\\\()\| for .+?(?=\\\])/g, '$1.*?') + '$')

*Defined in [packages/internal/src/baseIsNative.ts:11](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/baseIsNative.ts#L11)*

___

### reRegExpChar

• `Const` **reRegExpChar**: RegExp = /[\\^$.*+?()[\]{}\|]/g

*Defined in [packages/internal/src/baseIsNative.ts:7](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/baseIsNative.ts#L7)*

___

### root

• `Const` **root**: any = freeGlobalThis \|\| freeGlobal \|\| freeSelf \|\| Function('return this')()

*Defined in [packages/internal/src/global.ts:65](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/global.ts#L65)*

获取顶层全局对象

**`constant`** { any } root

___

### setCtorString

• `Const` **setCtorString**: undefined \| string = typeof Set === undefined ? undefined : \`${Set}\`

*Defined in [packages/validator/src/getTag.ts:15](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/getTag.ts#L15)*

___

### setTag

• `Const` **setTag**: \"Set\" = "Set"

*Defined in [packages/validator/src/getTag.ts:8](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/getTag.ts#L8)*

___

### symbolToStringTag

• `Const` **symbolToStringTag**: symbol \| undefined = root.Symbol ? root.Symbol.toStringTag : undefined

*Defined in [packages/internal/src/constant.ts:76](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/constant.ts#L76)*

定义对象的自定义类型标签，通过 Object.prototype.toString.call 获取

**`constant`** Symbol.toStringTag

___

### undefinedTag

• `Const` **undefinedTag**: string = "Undefined"

*Defined in [packages/internal/src/baseGetTag.ts:4](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/baseGetTag.ts#L4)*

___

### weakMapCtorString

• `Const` **weakMapCtorString**: undefined \| string = typeof WeakMap === undefined ? undefined : \`${WeakMap}\`

*Defined in [packages/validator/src/getTag.ts:16](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/getTag.ts#L16)*

___

### weakMapTag

• `Const` **weakMapTag**: \"WeakMap\" = "WeakMap"

*Defined in [packages/validator/src/getTag.ts:9](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/getTag.ts#L9)*

## Functions

### baseGetTag

▸ `Const`**baseGetTag**(`arg`: any): string

*Defined in [packages/internal/src/baseGetTag.ts:33](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/baseGetTag.ts#L33)*

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

*Defined in [packages/internal/src/baseIsNative.ts:28](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/baseIsNative.ts#L28)*

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

### isFunction

▸ `Const`**isFunction**\<T>(`value`: any): value is T

*Defined in [packages/validator/src/isFunction.ts:17](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/isFunction.ts#L17)*

检测参数是否为函数类型

**`example`** 
 isFunction(class Any{}) // => true
 isFunction(() => {}) // => true
 isFunction(async () => {}) // => true
 isFunction(function * Any() {}) // => true
 isFunction(Math.round) // => true
 isFunction(/abc/) // => false
 isFunction(null) // => false

#### Type parameters:

Name | Default |
------ | ------ |
`T` | Function |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

**Returns:** value is T

如果参数是 Function，返回 true，否则返回 false

___

### isMaskable

▸ `Const`**isMaskable**(`value`: any): boolean

*Defined in [packages/internal/src/isMaskable.ts:9](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/isMaskable.ts#L9)*

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

*Defined in [packages/internal/src/isMasked.ts:16](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/isMasked.ts#L16)*

检测参数的源码是否被屏蔽

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

**Returns:** boolean

如果参数被屏蔽, 返回true, 否则返回false

___

### isNative

▸ `Const`**isNative**(`value`: any): boolean

*Defined in [packages/validator/src/isNative.ts:16](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/isNative.ts#L16)*

检测参数是否是内置函数
注意：
	这个方法在 core-js 包的环境下探测内置函数不可靠，因为 core-js 绕过了这类检测方法。
	尽管有多个请求，但是 core-js 维护者很清楚地声明：任何试图修复探测方法都会被阻止。
	因此，我们别无选择只能抛出错误。
 不幸的是，这样还是会影响那些依赖于 core-js 的包，例如 babel-polyfil

**`example`** 
	isNative(Array.prototype.push) // => true
	isNative(_) // => false

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

**Returns:** boolean

如果参数是内置函数，返回 true,否则返回 false

___

### isNil

▸ `Const`**isNil**(`value`: any): value is null \| undefined

*Defined in [packages/validator/src/isNil.ts:10](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/isNil.ts#L10)*

测试参数是否为 null | undefined

**`example`** 
 isNil(null) // => true
 isNil(void 0) // => true
 isNil(NaN) // => false

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

**Returns:** value is null \| undefined

如果参数是 null 或者 undefined 返回 true，否则返回 false

___

### isNumber

▸ `Const`**isNumber**(`value`: any): value is number

*Defined in [packages/validator/src/isNumber.ts:16](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/isNumber.ts#L16)*

检测参数是否为数字

**`example`** 
 isNumber(3); // => true
 isNumber(Number.MIN_VALUE); // => true
 isNumber(Infinity); // => true
 isNumber(NaN); // => true
 isNumber(new Number(2)); // => true
 isNumber('3'); // => false

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

**Returns:** value is number

如果参数是数字，返回 true，否则返回 false

___

### isObject

▸ `Const`**isObject**\<T>(`value`: any): value is T

*Defined in [packages/validator/src/isObject.ts:11](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/isObject.ts#L11)*

检测参数是否属于 `Object` (例如：arrays, functions, objects, regexes, `new Number(0)`, `new String('')`)

**`example`** 
	isObject({}) // => true
	isObject([1, 2, 3]) // => true
	isObject(function fn() {}) // => true
	isObject(null) // => false

#### Type parameters:

Name | Default |
------ | ------ |
`T` | object |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

**Returns:** value is T

如果参数属于 `Object`，返回 true，否则返回 false

___

### isObjectHost

▸ `Const`**isObjectHost**(`value`: any): boolean

*Defined in [packages/validator/src/isObjectHost.ts:11](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/isObjectHost.ts#L11)*

检测参数是否是 IE < 9 中的宿主对象(window/document...)

**`example`** 
 isHostObject(window) // => ie < 9: true, other: false
 isHostObject(document) // => ie < 9: true, other: false
 isHostObject({}) // => ie < 9: false, other: false
 isHostObject(Object) // => ie < 9: false, other: false

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

**Returns:** boolean

如果参数是宿主对象返回 true，否则返回 false

___

### isObjectLike

▸ `Const`**isObjectLike**\<T>(`value`: any): value is T

*Defined in [packages/validator/src/isObjectLike.ts:12](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/isObjectLike.ts#L12)*

检测参数是否为类对象(所有 不为 null 且 typeof 后的结果是 "object" 的对象)

**`example`** 
 isObjectLike({}) // => true
 isObjectLike([1, 2, 3]) // => true
 isObjectLike(Function) // => false
 isObjectLike(undefined) // => false
 isObjectLike(null) // => false

#### Type parameters:

Name | Default |
------ | ------ |
`T` | object |

#### Parameters:

Name | Type |
------ | ------ |
`value` | any |

**Returns:** value is T

如果参数是类对象，返回 true，否则返回 false

___

### isObjectPlain

▸ `Const`**isObjectPlain**(`value`: any): value is object

*Defined in [packages/validator/src/isObjectPlain.ts:17](https://github.com/extend-js/extend/blob/16506ca/packages/validator/src/isObjectPlain.ts#L17)*

检测参数是否为普通对象

**`example`** 
 class Foo{ a = 1 }
 isPlainObject(new Foo); // => false
 isPlainObject([1, 2, 3]); // => false
 isPlainObject({ 'x': 0, 'y': 0 }); // => true
 isPlainObject(Object.create(null)); // => true

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

**Returns:** value is object

如果参数是普通对象，返回 true，否则返回 false

___

### toSource

▸ `Const`**toSource**(`value`: any): string

*Defined in [packages/internal/src/toSource.ts:11](https://github.com/extend-js/extend/blob/16506ca/packages/internal/src/toSource.ts#L11)*

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

2222
