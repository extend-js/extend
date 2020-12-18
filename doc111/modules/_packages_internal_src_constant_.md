---
id: "_packages_internal_src_constant_"
title: "Module: packages/internal/src/constant"
---

# Module: "packages/internal/src/constant"

## Index

### Variables

* [MAX\_SAFE\_INTEGER](_packages_internal_src_constant_.md#max_safe_integer)
* [MIN\_SAFE\_INTEGER](_packages_internal_src_constant_.md#min_safe_integer)
* [coreJsData](_packages_internal_src_constant_.md#corejsdata)
* [funcProto](_packages_internal_src_constant_.md#funcproto)
* [funcToString](_packages_internal_src_constant_.md#functostring)
* [getPrototypeOf](_packages_internal_src_constant_.md#getprototypeof)
* [hasOwnProperty](_packages_internal_src_constant_.md#hasownproperty)
* [objectProto](_packages_internal_src_constant_.md#objectproto)
* [objectToString](_packages_internal_src_constant_.md#objecttostring)
* [symbolToStringTag](_packages_internal_src_constant_.md#symboltostringtag)

## Variables

### MAX\_SAFE\_INTEGER

• `Const` **MAX\_SAFE\_INTEGER**: number = Number.MAX\_SAFE\_INTEGER \|\| 9007199254740991

*Defined in [packages/internal/src/constant.ts:15](https://github.com/extend-js/extend/blob/77925b5/packages/internal/src/constant.ts#L15)*

Number 最大值

**`constant`** Number.MAX_SAFE_INTEGER

**`example`** 
 MAX_SAFE_INTEGER // => 9007199254740991

___

### MIN\_SAFE\_INTEGER

• `Const` **MIN\_SAFE\_INTEGER**: number = Number.MIN\_SAFE\_INTEGER \|\| -9007199254740991

*Defined in [packages/internal/src/constant.ts:23](https://github.com/extend-js/extend/blob/77925b5/packages/internal/src/constant.ts#L23)*

Number 最小值

**`constant`** Number.MIN_SAFE_INTEGER

**`example`** 
 MIN_SAFE_INTEGER // => -9007199254740991

___

### coreJsData

• `Const` **coreJsData**: any = root['\_\_core-js\_shared\_\_']

*Defined in [packages/internal/src/constant.ts:7](https://github.com/extend-js/extend/blob/77925b5/packages/internal/src/constant.ts#L7)*

用于检测扩展的 core-js 填充

**`constant`** coreJsData

___

### funcProto

• `Const` **funcProto**: Function = Function.prototype

*Defined in [packages/internal/src/constant.ts:64](https://github.com/extend-js/extend/blob/77925b5/packages/internal/src/constant.ts#L64)*

Function 原型链

**`constant`** Function.prototype

___

### funcToString

• `Const` **funcToString**: () => string = funcProto.toString

*Defined in [packages/internal/src/constant.ts:70](https://github.com/extend-js/extend/blob/77925b5/packages/internal/src/constant.ts#L70)*

Function 原型链

**`constant`** Function.prototype

___

### getPrototypeOf

• `Const` **getPrototypeOf**: getPrototypeOf = Object.getPrototypeOf

*Defined in [packages/internal/src/constant.ts:58](https://github.com/extend-js/extend/blob/77925b5/packages/internal/src/constant.ts#L58)*

返回对象的原型

**`constant`** Object.getPrototypeOf

**`example`** 
 nativeGetPrototypeOf(obj) === Object.prototype // => true
 nativeGetPrototypeOf([]) === Array.prototype // => true

___

### hasOwnProperty

• `Const` **hasOwnProperty**: (v: string \| number \| symbol) => boolean = objectProto.hasOwnProperty

*Defined in [packages/internal/src/constant.ts:39](https://github.com/extend-js/extend/blob/77925b5/packages/internal/src/constant.ts#L39)*

基于 Object 原型链上的 hasOwnProperty 方法，检测属性值是否存在

**`constant`** Object.prototype.hasOwnProperty

**`example`** 
 const obj = { a: 1, b: 2 }
 objectHasOwnProperty.call(obj, 'a') // true
 objectHasOwnProperty.call(obj, 'toString') // false

___

### objectProto

• `Const` **objectProto**: Object = Object.prototype

*Defined in [packages/internal/src/constant.ts:29](https://github.com/extend-js/extend/blob/77925b5/packages/internal/src/constant.ts#L29)*

Object 原型链

**`constant`** Object.prototype

___

### objectToString

• `Const` **objectToString**: () => string = objectProto.toString

*Defined in [packages/internal/src/constant.ts:49](https://github.com/extend-js/extend/blob/77925b5/packages/internal/src/constant.ts#L49)*

基于 Object 原型链上的 toString 方法，获取对象的类型

**`constant`** Object.prototype.toString

**`example`** 
 objectToString.call({}) // [object Object]
 objectToString.call([]) // [object Array]
 objectToString.call(function () {}) // [object Function]

___

### symbolToStringTag

• `Const` **symbolToStringTag**: symbol \| undefined = root.Symbol ? root.Symbol.toStringTag : undefined

*Defined in [packages/internal/src/constant.ts:76](https://github.com/extend-js/extend/blob/77925b5/packages/internal/src/constant.ts#L76)*

定义对象的自定义类型标签，通过 Object.prototype.toString.call 获取

**`constant`** Symbol.toStringTag
