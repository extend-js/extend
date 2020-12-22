# Module: "packages/internal/src/isMasked"

## Variables

## maskSrcKey

• `Const` **maskSrcKey**: string = (function () { const uid = /[^.]+$/.exec((coreJsData && coreJsData.keys && coreJsData.keys.IE\_PROTO) \|\| ''); return uid ? 'Symbol(src)\_1.' + uid : ''; })()

*定义于 [packages/internal/src/isMasked.ts:6](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/isMasked.ts#L6)*

用于检测是否是伪装成内置方法

## Functions

## isMasked

`Const`**isMasked**(`value`: any): boolean

检测参数的源码是否被屏蔽

### 参数:

Name | Type | Description |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

### 返回值:

boolean

如果参数被屏蔽, 返回true, 否则返回false

*定义于 [packages/internal/src/isMasked.ts:16](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/isMasked.ts#L16)*
