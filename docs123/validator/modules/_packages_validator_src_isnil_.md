Module &quot;packages/validator/src/isNil&quot;

## Functions

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

### 返回:

(CallSignature isNil:value is null \| undefined): 

如果参数是 null 或者 undefined 返回 true，否则返回 false

*Defined in [packages/validator/src/isNil.ts:10](https://github.com/extend-js/extend/blob/d92be1e/packages/validator/src/isNil.ts#L10)*

___
