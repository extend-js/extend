---
id: "index"
title: "@roshin/extend-validator"
---

# @roshin/extend-validator

## Variables

### dataViewCtorString

• `Const` **dataViewCtorString**: undefined \| string = typeof DataView === undefined ? undefined : \`${DataView}\`

*Defined in [packages/validator/src/getTag.ts:12](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/getTag.ts#L12)*

___

### dataViewTag

• `Const` **dataViewTag**: \"DataView\" = "DataView"

*Defined in [packages/validator/src/getTag.ts:4](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/getTag.ts#L4)*

___

### getTag

• `Let` **getTag**: baseGetTag = baseGetTag

*Defined in [packages/validator/src/getTag.ts:18](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/getTag.ts#L18)*

___

### mapCtorString

• `Const` **mapCtorString**: undefined \| string = typeof Map === undefined ? undefined : \`${Map}\`

*Defined in [packages/validator/src/getTag.ts:13](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/getTag.ts#L13)*

___

### mapTag

• `Const` **mapTag**: \"Map\" = "Map"

*Defined in [packages/validator/src/getTag.ts:5](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/getTag.ts#L5)*

___

### objectTag

• `Const` **objectTag**: \"Object\" = "Object"

*Defined in [packages/validator/src/getTag.ts:6](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/getTag.ts#L6)*

___

### promiseCtorString

• `Const` **promiseCtorString**: undefined \| string = typeof Promise === undefined ? undefined : \`${Promise}\`

*Defined in [packages/validator/src/getTag.ts:14](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/getTag.ts#L14)*

___

### promiseTag

• `Const` **promiseTag**: \"Promise\" = "Promise"

*Defined in [packages/validator/src/getTag.ts:7](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/getTag.ts#L7)*

___

### setCtorString

• `Const` **setCtorString**: undefined \| string = typeof Set === undefined ? undefined : \`${Set}\`

*Defined in [packages/validator/src/getTag.ts:15](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/getTag.ts#L15)*

___

### setTag

• `Const` **setTag**: \"Set\" = "Set"

*Defined in [packages/validator/src/getTag.ts:8](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/getTag.ts#L8)*

___

### weakMapCtorString

• `Const` **weakMapCtorString**: undefined \| string = typeof WeakMap === undefined ? undefined : \`${WeakMap}\`

*Defined in [packages/validator/src/getTag.ts:16](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/getTag.ts#L16)*

___

### weakMapTag

• `Const` **weakMapTag**: \"WeakMap\" = "WeakMap"

*Defined in [packages/validator/src/getTag.ts:9](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/getTag.ts#L9)*

## Functions

### isFunction

▸ `Const`**isFunction**\<T>(`value`: any): value is T

*Defined in [packages/validator/src/isFunction.ts:17](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/isFunction.ts#L17)*

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

### isNative

▸ `Const`**isNative**(`value`: any): boolean

*Defined in [packages/validator/src/isNative.ts:16](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/isNative.ts#L16)*

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

*Defined in [packages/validator/src/isNil.ts:10](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/isNil.ts#L10)*

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

*Defined in [packages/validator/src/isNumber.ts:16](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/isNumber.ts#L16)*

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

*Defined in [packages/validator/src/isObject.ts:11](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/isObject.ts#L11)*

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

*Defined in [packages/validator/src/isObjectHost.ts:11](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/isObjectHost.ts#L11)*

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

*Defined in [packages/validator/src/isObjectLike.ts:12](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/isObjectLike.ts#L12)*

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

*Defined in [packages/validator/src/isObjectPlain.ts:17](https://github.com/extend-js/extend/blob/176fc7e/packages/validator/src/isObjectPlain.ts#L17)*

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
