# Module: "packages/validator/src/isObjectHost"

## Functions

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

*定义于 [packages/validator/src/isObjectHost.ts:11](https://github.com/extend-js/extend/blob/3b1925b/packages/validator/src/isObjectHost.ts#L11)*
