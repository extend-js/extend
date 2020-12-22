# Module: "packages/validator/src/isObject"

## Functions

## isObject

`Const`**isObject**<T>(`value`: any): value is T

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

*定义于 [packages/validator/src/isObject.ts:11](https://github.com/extend-js/extend/blob/3b1925b/packages/validator/src/isObject.ts#L11)*
