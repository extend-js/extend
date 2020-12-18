---
id: "_extend_validator_d_"
title: "Module: extend-validator.d"
---

**[@roshin/extend](../README.md)**

> [Globals](../README.md) / "extend-validator.d"

# Module: "extend-validator.d"

## Index

### Variables

* [getTag](_extend_validator_d_.md#gettag)
* [isFunction](_extend_validator_d_.md#isfunction)
* [isNative](_extend_validator_d_.md#isnative)
* [isNil](_extend_validator_d_.md#isnil)
* [isNumber](_extend_validator_d_.md#isnumber)
* [isObject](_extend_validator_d_.md#isobject)
* [isObjectHost](_extend_validator_d_.md#isobjecthost)
* [isObjectLike](_extend_validator_d_.md#isobjectlike)
* [isObjectPlain](_extend_validator_d_.md#isobjectplain)

## Variables

### getTag

• `Let` **getTag**: (arg: any) => string

*Defined in extend-validator.d.ts:2*

___

### isFunction

• `Const` **isFunction**: \<T>(value: any) => value is T

*Defined in extend-validator.d.ts:17*

检测参数是否为函数类型

**`param`** 要检测的参数

**`returns`** 如果参数是 Function，返回 true，否则返回 false

**`example`** 
 isFunction(class Any{}) // => true
 isFunction(() => {}) // => true
 isFunction(async () => {}) // => true
 isFunction(function * Any() {}) // => true
 isFunction(Math.round) // => true
 isFunction(/abc/) // => false
 isFunction(null) // => false

___

### isNative

• `Const` **isNative**: (value: any) => boolean

*Defined in extend-validator.d.ts:32*

检测参数是否是内置函数
注意：
	这个方法在 core-js 包的环境下探测内置函数不可靠，因为 core-js 绕过了这类检测方法。
	尽管有多个请求，但是 core-js 维护者很清楚地声明：任何试图修复探测方法都会被阻止。
	因此，我们别无选择只能抛出错误。
 不幸的是，这样还是会影响那些依赖于 core-js 的包，例如 babel-polyfil

**`param`** 要检测的参数

**`returns`** 如果参数是内置函数，返回 true,否则返回 false

**`example`** 
	isNative(Array.prototype.push) // => true
	isNative(_) // => false

___

### isNil

• `Const` **isNil**: (value: any) => value is null \| undefined

*Defined in extend-validator.d.ts:43*

测试参数是否为 null | undefined

**`param`** 要检测的参数

**`returns`** 如果参数是 null 或者 undefined 返回 true，否则返回 false

**`example`** 
 isNil(null) // => true
 isNil(void 0) // => true
 isNil(NaN) // => false

___

### isNumber

• `Const` **isNumber**: (value: any) => value is number

*Defined in extend-validator.d.ts:57*

检测参数是否为数字

**`param`** 要检测的参数

**`returns`** 如果参数是数字，返回 true，否则返回 false

**`example`** 
 isNumber(3); // => true
 isNumber(Number.MIN_VALUE); // => true
 isNumber(Infinity); // => true
 isNumber(NaN); // => true
 isNumber(new Number(2)); // => true
 isNumber('3'); // => false

___

### isObject

• `Const` **isObject**: \<T>(value: any) => value is T

*Defined in extend-validator.d.ts:69*

检测参数是否属于 `Object` (例如：arrays, functions, objects, regexes, `new Number(0)`, `new String('')`)

**`param`** 要检测的参数

**`returns`** 如果参数属于 `Object`，返回 true，否则返回 false

**`example`** 
	isObject({}) // => true
	isObject([1, 2, 3]) // => true
	isObject(function fn() {}) // => true
	isObject(null) // => false

___

### isObjectHost

• `Const` **isObjectHost**: (value: any) => boolean

*Defined in extend-validator.d.ts:81*

检测参数是否是 IE < 9 中的宿主对象(window/document...)

**`param`** 要检测的参数

**`returns`** 如果参数是宿主对象返回 true，否则返回 false

**`example`** 
 isHostObject(window) // => ie < 9: true, other: false
 isHostObject(document) // => ie < 9: true, other: false
 isHostObject({}) // => ie < 9: false, other: false
 isHostObject(Object) // => ie < 9: false, other: false

___

### isObjectLike

• `Const` **isObjectLike**: \<T>(value: any) => value is T

*Defined in extend-validator.d.ts:94*

检测参数是否为类对象(所有 不为 null 且 typeof 后的结果是 "object" 的对象)

**`param`** 要检测的参数

**`returns`** 如果参数是类对象，返回 true，否则返回 false

**`example`** 
 isObjectLike({}) // => true
 isObjectLike([1, 2, 3]) // => true
 isObjectLike(Function) // => false
 isObjectLike(undefined) // => false
 isObjectLike(null) // => false

___

### isObjectPlain

• `Const` **isObjectPlain**: (value: any) => value is object

*Defined in extend-validator.d.ts:107*

检测参数是否为普通对象

**`param`** 要检测的参数

**`returns`** 如果参数是普通对象，返回 true，否则返回 false

**`example`** 
 class Foo{ a = 1 }
 isPlainObject(new Foo); // => false
 isPlainObject([1, 2, 3]); // => false
 isPlainObject({ 'x': 0, 'y': 0 }); // => true
 isPlainObject(Object.create(null)); // => true
