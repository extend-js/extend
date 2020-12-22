# Module: "packages/validator/src/isObjectPlain"

## Functions

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

*定义于 [packages/validator/src/isObjectPlain.ts:17](https://github.com/extend-js/extend/blob/3b1925b/packages/validator/src/isObjectPlain.ts#L17)*
