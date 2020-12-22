# Module: "packages/internal/src/baseIsNative"

## Variables

## reIsHostCtor

• `Const` **reIsHostCtor**: RegExp = /^\[object .+?Constructor\]$/

*定义于 [packages/internal/src/baseIsNative.ts:9](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/baseIsNative.ts#L9)*

___

## reIsNative

• `Const` **reIsNative**: RegExp = RegExp( '^' + funcToString .call(hasOwnProperty) .replace(reRegExpChar, '\\$&') .replace(/hasOwnProperty\|(function).*?(?=\\\()\| for .+?(?=\\\])/g, '$1.*?') + '$' )

*定义于 [packages/internal/src/baseIsNative.ts:11](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/baseIsNative.ts#L11)*

___

## reRegExpChar

• `Const` **reRegExpChar**: RegExp = /[\\^$.*+?()[\]{}\|]/g

*定义于 [packages/internal/src/baseIsNative.ts:7](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/baseIsNative.ts#L7)*

## Functions

## baseIsNative

**baseIsNative**(`value`: any): boolean

isNative 的基本实现没有错误的填充检查

**`example`**123 
 baseIsNative(Array.prototype.push); // => true
 baseIsNative(_); // => false

### 参数:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的值 |

### 返回值:

boolean

是否是内置函数

*定义于 [packages/internal/src/baseIsNative.ts:28](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/baseIsNative.ts#L28)*
