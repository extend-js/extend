# Module: "packages/validator/src/isNative"

## Functions

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

*定义于 [packages/validator/src/isNative.ts:16](https://github.com/extend-js/extend/blob/3b1925b/packages/validator/src/isNative.ts#L16)*
