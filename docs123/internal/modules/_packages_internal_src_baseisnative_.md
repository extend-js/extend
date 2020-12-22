Module &quot;packages/internal/src/baseIsNative&quot;

## Variables

## reIsHostCtor

• `Const` **reIsHostCtor**: RegExp = /^\[object .+?Constructor\]$/

*Defined in [packages/internal/src/baseIsNative.ts:9](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/baseIsNative.ts#L9)*

___

## reIsNative

• `Const` **reIsNative**: RegExp = RegExp( '^' + funcToString .call(hasOwnProperty) .replace(reRegExpChar, '\\$&') .replace(/hasOwnProperty\|(function).*?(?=\\\()\| for .+?(?=\\\])/g, '$1.*?') + '$')

*Defined in [packages/internal/src/baseIsNative.ts:11](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/baseIsNative.ts#L11)*

___

## reRegExpChar

• `Const` **reRegExpChar**: RegExp = /[\\^$.*+?()[\]{}\|]/g

*Defined in [packages/internal/src/baseIsNative.ts:7](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/baseIsNative.ts#L7)*

___

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

### 返回:

(CallSignature baseIsNative:boolean): 

是否是内置函数

*Defined in [packages/internal/src/baseIsNative.ts:28](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/baseIsNative.ts#L28)*

___
