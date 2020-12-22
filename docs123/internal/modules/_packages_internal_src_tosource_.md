Module &quot;packages/internal/src/toSource&quot;

## Functions

## toSource

`Const`**toSource**(`value`: any): string

将函数转换为其源代码

**`example`**123 
 toSource(() => { console.log(1) }) // => "() => { console.log(1) }"
 toSource(console.log) // => "function log() { [native code] }"

### 参数:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要处理的函数 |

### 返回:

(CallSignature toSource:string): 

返回源代码

*Defined in [packages/internal/src/toSource.ts:11](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/toSource.ts#L11)*

___
