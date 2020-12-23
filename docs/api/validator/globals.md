---
id: "globals"
title: "API"
---

## getTag

> `Const`**getTag**(`value`: any): string

获取参数的数据的类型

<h3>参数:</h3>

名称 | 类型 |
------ | ------ |
`value` | any |

<h3>返回:</h3>

`(string)`: 数据类型名称 Null | Undefined | Number | Object | ...

<h3>示例</h3>

 getTag(null) // => 'Null'
 getTag(void 0) // => 'Undefined'
 getTag(NaN) // => 'Number'

 class MyObject {}
 getTag(new MyObject) // => 'MyObject'

 class ValidatorClass {
   get [Symbol.toStringTag]() {
     return 'test';
   }
 }
 getTag(new ValidatorClass) // => 'test'

 const obj = {}
 Object.defineProperty(obj, Symbol.toStringTag, { value: 'customObj' });
 getTag(obj) // => 'customObj'

 const obj2 = {}
 obj2[Symbol.toStringTag] = 'test'
 getTag(obj2) // => 'Object'

> 定义于 [packages/validator/src/getTag.ts:30](https://github.com/extend-js/extend/blob/4306f22/packages/validator/src/getTag.ts#L30)

___

## isFunction

> `Const`**isFunction**<T\>(`value`: any): value is T

检测参数是否为函数类型

<h3>类型参数:</h3>

名称 | 默认 |
------ | ------ |
`T` | Function |

<h3>参数:</h3>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

<h3>返回:</h3>

`(value is T)`: 如果参数是 Function，返回 true，否则返回 false

<h3>示例</h3>

 isFunction(class Any{}) // => true
 isFunction(() => {}) // => true
 isFunction(async () => {}) // => true
 isFunction(function * Any() {}) // => true
 isFunction(Math.round) // => true
 isFunction(/abc/) // => false
 isFunction(null) // => false

> 定义于 [packages/validator/src/isFunction.ts:17](https://github.com/extend-js/extend/blob/4306f22/packages/validator/src/isFunction.ts#L17)

___

## isNative

> `Const`**isNative**(`value`: any): boolean

检测参数是否是内置函数
注意：
	这个方法在 core-js 包的环境下探测内置函数不可靠，因为 core-js 绕过了这类检测方法。
	尽管有多个请求，但是 core-js 维护者很清楚地声明：任何试图修复探测方法都会被阻止。
	因此，我们别无选择只能抛出错误。
 不幸的是，这样还是会影响那些依赖于 core-js 的包，例如 babel-polyfil

<h3>参数:</h3>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

<h3>返回:</h3>

`(boolean)`: 如果参数是内置函数，返回 true,否则返回 false

<h3>示例</h3>

	isNative(Array.prototype.push) // => true
	isNative(_) // => false

> 定义于 [packages/validator/src/isNative.ts:16](https://github.com/extend-js/extend/blob/4306f22/packages/validator/src/isNative.ts#L16)

___

## isNil

> `Const`**isNil**(`value`: any): value is null \| undefined

测试参数是否为 null | undefined

<h3>参数:</h3>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

<h3>返回:</h3>

`(value is null \| undefined)`: 如果参数是 null 或者 undefined 返回 true，否则返回 false

<h3>示例</h3>

 isNil(null) // => true
 isNil(void 0) // => true
 isNil(NaN) // => false

> 定义于 [packages/validator/src/isNil.ts:10](https://github.com/extend-js/extend/blob/4306f22/packages/validator/src/isNil.ts#L10)

___

## isNumber

> `Const`**isNumber**(`value`: any): value is number

检测参数是否为数字

<h3>参数:</h3>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

<h3>返回:</h3>

`(value is number)`: 如果参数是数字，返回 true，否则返回 false

<h3>示例</h3>

 isNumber(3); // => true
 isNumber(Number.MIN_VALUE); // => true
 isNumber(Infinity); // => true
 isNumber(NaN); // => true
 isNumber(new Number(2)); // => true
 isNumber('3'); // => false

> 定义于 [packages/validator/src/isNumber.ts:16](https://github.com/extend-js/extend/blob/4306f22/packages/validator/src/isNumber.ts#L16)

___

## isObject

> `Const`**isObject**<T\>(`value`: any): value is T

检测参数是否属于 `Object` (例如：arrays, functions, objects, regexes, `new Number(0)`, `new String('')`)

<h3>类型参数:</h3>

名称 | 默认 |
------ | ------ |
`T` | object |

<h3>参数:</h3>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

<h3>返回:</h3>

`(value is T)`: 如果参数属于 `Object`，返回 true，否则返回 false

<h3>示例</h3>

	isObject({}) // => true
	isObject([1, 2, 3]) // => true
	isObject(function fn() {}) // => true
	isObject(null) // => false

> 定义于 [packages/validator/src/isObject.ts:11](https://github.com/extend-js/extend/blob/4306f22/packages/validator/src/isObject.ts#L11)

___

## isObjectHost

> `Const`**isObjectHost**(`value`: any): boolean

检测参数是否是 IE < 9 中的宿主对象(window/document...)

<h3>参数:</h3>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

<h3>返回:</h3>

`(boolean)`: 如果参数是宿主对象返回 true，否则返回 false

<h3>示例</h3>

 isHostObject(window) // => ie < 9: true, other: false
 isHostObject(document) // => ie < 9: true, other: false
 isHostObject({}) // => ie < 9: false, other: false
 isHostObject(Object) // => ie < 9: false, other: false

> 定义于 [packages/validator/src/isObjectHost.ts:11](https://github.com/extend-js/extend/blob/4306f22/packages/validator/src/isObjectHost.ts#L11)

___

## isObjectLike

> `Const`**isObjectLike**<T\>(`value`: any): value is T

检测参数是否为类对象(所有 不为 null 且 typeof 后的结果是 "object" 的对象)

<h3>类型参数:</h3>

名称 | 默认 |
------ | ------ |
`T` | object |

<h3>参数:</h3>

名称 | 类型 |
------ | ------ |
`value` | any |

<h3>返回:</h3>

`(value is T)`: 如果参数是类对象，返回 true，否则返回 false

<h3>示例</h3>

 isObjectLike({}) // => true
 isObjectLike([1, 2, 3]) // => true
 isObjectLike(Function) // => false
 isObjectLike(undefined) // => false
 isObjectLike(null) // => false

> 定义于 [packages/validator/src/isObjectLike.ts:12](https://github.com/extend-js/extend/blob/4306f22/packages/validator/src/isObjectLike.ts#L12)

___

## isObjectPlain

> `Const`**isObjectPlain**(`value`: any): value is object

检测参数是否为普通对象

<h3>参数:</h3>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

<h3>返回:</h3>

`(value is object)`: 如果参数是普通对象，返回 true，否则返回 false

<h3>示例</h3>

```js
class Foo{ a = 1 }
isPlainObject(new Foo); // => false
isPlainObject([1, 2, 3]); // => false
isPlainObject({ 'x': 0, 'y': 0 }); // => true
isPlainObject(Object.create(null)); // => true
```

> 定义于 [packages/validator/src/isObjectPlain.ts:19](https://github.com/extend-js/extend/blob/4306f22/packages/validator/src/isObjectPlain.ts#L19)

___
