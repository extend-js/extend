# Module: "packages/validator/src/isFunction"

## Functions

## isFunction

`Const`**isFunction**<T>(`value`: any): value is T

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

*定义于 [packages/validator/src/isFunction.ts:17](https://github.com/extend-js/extend/blob/3b1925b/packages/validator/src/isFunction.ts#L17)*
