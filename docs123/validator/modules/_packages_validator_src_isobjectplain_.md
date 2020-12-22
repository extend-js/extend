Module &quot;packages/validator/src/isObjectPlain&quot;

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

### 返回:

(CallSignature isObjectPlain:value is object): 

如果参数是普通对象，返回 true，否则返回 false

*Defined in [packages/validator/src/isObjectPlain.ts:17](https://github.com/extend-js/extend/blob/d92be1e/packages/validator/src/isObjectPlain.ts#L17)*

___
