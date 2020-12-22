# Module: "packages/internal/src/toSource"

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

### 返回值:

string

返回源代码

*定义于 [packages/internal/src/toSource.ts:11](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/toSource.ts#L11)*
