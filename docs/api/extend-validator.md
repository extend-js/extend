---
id: "extend-validator"
title: "@roshin/extend-validator"
---

## getTag

`Const`**getTag**(`value`: any): string

获取参数的数据的类型

**`example`**

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

### 参数:

Name | Type |
------ | ------ |
`value` | any |

### 返回值:

string

数据类型名称 Null | Undefined | Number | Object | ...

>Defined in [packages/validator/src/getTag.ts:30](https://github.com/extend-js/extend/blob/d92be1e/packages/validator/src/getTag.ts#L30)

___

## isFunction

`Const`**isFunction**<T\>(`value`: any): value is T

检测参数是否为函数类型

**`example`**123
 isFunction(class Any{}) // => true
 isFunction(() => {}) // => true
 isFunction(async () => {}) // => true
 isFunction(function * Any() {}) // => true
 isFunction(Math.round) // => true
 isFunction(/abc/) // => false
 isFunction(null) // => false

### 类型参数:

Name | Default |
------ | ------ |
`T` | Function |

### 参数:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

### 返回值:

value is T

如果参数是 Function，返回 true，否则返回 false

*Defined in [packages/validator/src/isFunction.ts:17](https://github.com/extend-js/extend/blob/d92be1e/packages/validator/src/isFunction.ts#L17)*

___

## isNative

`Const`**isNative**(`value`: any): boolean

检测参数是否是内置函数
注意：
 这个方法在 core-js 包的环境下探测内置函数不可靠，因为 core-js 绕过了这类检测方法。
 尽管有多个请求，但是 core-js 维护者很清楚地声明：任何试图修复探测方法都会被阻止。
 因此，我们别无选择只能抛出错误。
 不幸的是，这样还是会影响那些依赖于 core-js 的包，例如 babel-polyfil

**`example`**123
 isNative(Array.prototype.push) // => true
 isNative(_) // => false

### 参数:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

### 返回值:

boolean

如果参数是内置函数，返回 true,否则返回 false

*Defined in [packages/validator/src/isNative.ts:16](https://github.com/extend-js/extend/blob/d92be1e/packages/validator/src/isNative.ts#L16)*

___

## isNil

`Const`**isNil**(`value`: any): value is null \| undefined

测试参数是否为 null | undefined

**`example`**123
 isNil(null) // => true
 isNil(void 0) // => true
 isNil(NaN) // => false

### 参数:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

### 返回值:

value is null \| undefined

如果参数是 null 或者 undefined 返回 true，否则返回 false

*Defined in [packages/validator/src/isNil.ts:10](https://github.com/extend-js/extend/blob/d92be1e/packages/validator/src/isNil.ts#L10)*

___

## isNumber

`Const`**isNumber**(`value`: any): value is number

检测参数是否为数字

**`example`**123
 isNumber(3); // => true
 isNumber(Number.MIN_VALUE); // => true
 isNumber(Infinity); // => true
 isNumber(NaN); // => true
 isNumber(new Number(2)); // => true
 isNumber('3'); // => false

### 参数:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

### 返回值:

value is number

如果参数是数字，返回 true，否则返回 false

*Defined in [packages/validator/src/isNumber.ts:16](https://github.com/extend-js/extend/blob/d92be1e/packages/validator/src/isNumber.ts#L16)*

___

## isObject

`Const`**isObject**<T\>(`value`: any): value is T

检测参数是否属于 `Object` (例如：arrays, functions, objects, regexes, `new Number(0)`, `new String('')`)

**`example`**123
 isObject({}) // => true
 isObject([1, 2, 3]) // => true
 isObject(function fn() {}) // => true
 isObject(null) // => false

### 类型参数:

Name | Default |
------ | ------ |
`T` | object |

### 参数:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

### 返回值:

value is T

如果参数属于 `Object`，返回 true，否则返回 false

*Defined in [packages/validator/src/isObject.ts:11](https://github.com/extend-js/extend/blob/d92be1e/packages/validator/src/isObject.ts#L11)*

___

## isObjectHost

`Const`**isObjectHost**(`value`: any): boolean

检测参数是否是 IE < 9 中的宿主对象(window/document...)

**`example`**123
 isHostObject(window) // => ie < 9: true, other: false
 isHostObject(document) // => ie < 9: true, other: false
 isHostObject({}) // => ie < 9: false, other: false
 isHostObject(Object) // => ie < 9: false, other: false

### 参数:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

### 返回值:

boolean

如果参数是宿主对象返回 true，否则返回 false

*Defined in [packages/validator/src/isObjectHost.ts:11](https://github.com/extend-js/extend/blob/d92be1e/packages/validator/src/isObjectHost.ts#L11)*

___

## isObjectLike

`Const`**isObjectLike**<T\>(`value`: any): value is T

检测参数是否为类对象(所有 不为 null 且 typeof 后的结果是 "object" 的对象)

**`example`**123
 isObjectLike({}) // => true
 isObjectLike([1, 2, 3]) // => true
 isObjectLike(Function) // => false
 isObjectLike(undefined) // => false
 isObjectLike(null) // => false

### 类型参数:

Name | Default |
------ | ------ |
`T` | object |

### 参数:

Name | Type |
------ | ------ |
`value` | any |

### 返回值:

value is T

如果参数是类对象，返回 true，否则返回 false

*Defined in [packages/validator/src/isObjectLike.ts:12](https://github.com/extend-js/extend/blob/d92be1e/packages/validator/src/isObjectLike.ts#L12)*

___

## isObjectPlain

`Const`**isObjectPlain**(`value`: any): value is object

检测参数是否为普通对象

**`example`**123
 class Foo{ a = 1 }
 isPlainObject(new Foo); // => false
 isPlainObject([1, 2, 3]); // => false
 isPlainObject({ 'x': 0, 'y': 0 }); // => true
 isPlainObject(Object.create(null)); // => true

### 参数:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

### 返回值:

value is object

如果参数是普通对象，返回 true，否则返回 false

*Defined in [packages/validator/src/isObjectPlain.ts:17](https://github.com/extend-js/extend/blob/d92be1e/packages/validator/src/isObjectPlain.ts#L17)*

___
