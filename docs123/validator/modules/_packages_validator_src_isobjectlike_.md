Module &quot;packages/validator/src/isObjectLike&quot;

## Functions

## isObjectLike

`Const`**isObjectLike**<T>(`value`: any): value is T

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

### 返回:

(CallSignature isObjectLike<T\>:value is T): 

如果参数是类对象，返回 true，否则返回 false

*Defined in [packages/validator/src/isObjectLike.ts:12](https://github.com/extend-js/extend/blob/d92be1e/packages/validator/src/isObjectLike.ts#L12)*

___
