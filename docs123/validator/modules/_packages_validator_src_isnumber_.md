# Module: "packages/validator/src/isNumber"

## Functions

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

*定义于 [packages/validator/src/isNumber.ts:16](https://github.com/extend-js/extend/blob/3b1925b/packages/validator/src/isNumber.ts#L16)*
