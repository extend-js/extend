---
id: "globals"
title: "API"
---

## getTag <Badge text="0.0.1"/>

``` ts
const getTag: (value: any) => string
```

获取参数的数据的类型

<h4>参数:</h4>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 需要获取类型的参数 |

<h4> 作者</h4>

roshin

<h4>返回:</h4>

`(string)`: 数据类型名称 Null | Undefined | Number | Object | ...

<h4> 示例</h4>

``` js
getTag(null) // => 'Null'
getTag(void 0) // => 'Undefined'
getTag(NaN) // => 'Number'

class MyObject {}
getTag(new MyObject) // => 'MyObject'

class ValidatorClass {
  get [Symbol.toStringTag]() {
    return 'test';
  }
}
getTag(new ValidatorClass) // => 'test'

const obj = {}
Object.defineProperty(obj, Symbol.toStringTag, { value: 'customObj' });
getTag(obj) // => 'customObj'

const obj2 = {}
obj2[Symbol.toStringTag] = 'test'
getTag(obj2) // => 'Object'
```

> 定义于 [packages/validator/src/getTag.ts:34](https://github.com/extend-js/extend/blob/be43eb3/packages/validator/src/getTag.ts#L34)

___

## isFunction <Badge text="0.0.1"/>

``` ts
const isFunction: <T\>(value: any) => value is T
```

检测参数是否为函数类型

<h4>类型参数:</h4>

名称 | 默认 |
------ | ------ |
`T` | Function |

<h4>参数:</h4>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

<h4> 作者</h4>

roshin

<h4>返回:</h4>

`(value is T)`: 如果参数是 Function，返回 true，否则返回 false

<h4> 示例</h4>

``` js
isFunction(class Any{}) // => true
isFunction(() => {}) // => true
isFunction(async () => {}) // => true
isFunction(function * Any() {}) // => true
isFunction(Math.round) // => true
isFunction(/abc/) // => false
isFunction(null) // => false
```

> 定义于 [packages/validator/src/isFunction.ts:21](https://github.com/extend-js/extend/blob/be43eb3/packages/validator/src/isFunction.ts#L21)

___

## isNative <Badge text="0.0.1"/>

``` ts
const isNative: (value: any) => boolean
```

检测参数是否是内置函数
::: warning 注意
这个方法在 core-js 包的环境下探测内置函数不可靠，因为 core-js 绕过了这类检测方法。
尽管有多个请求，但是 core-js 维护者很清楚地声明：任何试图修复探测方法都会被阻止。
因此，我们别无选择只能抛出错误。
不幸的是，这样还是会影响那些依赖于 core-js 的包，例如 babel-polyfil
:::

<h4>参数:</h4>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

<h4> 作者</h4>

roshin

<h4> throws</h4>

{ string } This method is not supported with core-js. Try https://github.com/es-shims.

<h4>返回:</h4>

`(boolean)`: 如果参数是内置函数，返回 true,否则返回 false

<h4> 示例</h4>

``` js
isNative(Array.prototype.push) // => true
isNative(_) // => false
```

> 定义于 [packages/validator/src/isNative.ts:22](https://github.com/extend-js/extend/blob/be43eb3/packages/validator/src/isNative.ts#L22)

___

## isNil <Badge text="0.0.1"/>

``` ts
const isNil: (value: any) => value is null \| undefined
```

测试参数是否为 null | undefined

<h4>参数:</h4>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

<h4> 作者</h4>

roshin

<h4>返回:</h4>

`(value is null \| undefined)`: 如果参数是 null 或者 undefined 返回 true，否则返回 false

<h4> 示例</h4>

``` js
isNil(null) // => true
isNil(void 0) // => true
isNil(NaN) // => false
```

> 定义于 [packages/validator/src/isNil.ts:14](https://github.com/extend-js/extend/blob/be43eb3/packages/validator/src/isNil.ts#L14)

___

## isNumber <Badge text="0.0.1"/>

``` ts
const isNumber: (value: any) => value is number
```

检测参数是否为数字

<h4>参数:</h4>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

<h4> 作者</h4>

roshin

<h4>返回:</h4>

`(value is number)`: 如果参数是数字，返回 true，否则返回 false

<h4> 示例</h4>

``` js
isNumber(3); // => true
isNumber(Number.MIN_VALUE); // => true
isNumber(Infinity); // => true
isNumber(NaN); // => true
isNumber(new Number(2)); // => true
isNumber('3'); // => false
```

> 定义于 [packages/validator/src/isNumber.ts:20](https://github.com/extend-js/extend/blob/be43eb3/packages/validator/src/isNumber.ts#L20)

___

## isObject <Badge text="0.0.1"/>

``` ts
const isObject: <T\>(value: any) => value is T
```

检测参数是否属于 `Object` (例如：arrays, functions, objects, regexes, `new Number(0)`, `new String('')`)

<h4>类型参数:</h4>

名称 | 默认 |
------ | ------ |
`T` | object |

<h4>参数:</h4>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

<h4> 作者</h4>

roshin

<h4>返回:</h4>

`(value is T)`: 如果参数属于 `Object`，返回 true，否则返回 false

<h4> 示例</h4>

``` js
isObject({}) // => true
isObject([1, 2, 3]) // => true
isObject(function fn() {}) // => true
isObject(null) // => false
```

> 定义于 [packages/validator/src/isObject.ts:15](https://github.com/extend-js/extend/blob/be43eb3/packages/validator/src/isObject.ts#L15)

___

## isObjectHost <Badge text="0.0.1"/>

``` ts
const isObjectHost: (value: any) => boolean
```

检测参数是否是 IE < 9 中的宿主对象(window/document...)

<h4>参数:</h4>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

<h4> 作者</h4>

roshin

<h4>返回:</h4>

`(boolean)`: 如果参数是宿主对象返回 true，否则返回 false

<h4> 示例</h4>

``` js
isHostObject(window) // => ie < 9: true, other: false
isHostObject(document) // => ie < 9: true, other: false
isHostObject({}) // => ie < 9: false, other: false
isHostObject(Object) // => ie < 9: false, other: false
```

> 定义于 [packages/validator/src/isObjectHost.ts:15](https://github.com/extend-js/extend/blob/be43eb3/packages/validator/src/isObjectHost.ts#L15)

___

## isObjectLike <Badge text="0.0.1"/>

``` ts
const isObjectLike: <T\>(value: any) => value is T
```

检测参数是否为类对象(所有 不为 null 且 typeof 后的结果是 "object" 的对象)

<h4>类型参数:</h4>

名称 | 默认 |
------ | ------ |
`T` | object |

<h4>参数:</h4>

名称 | 类型 |
------ | ------ |
`value` | any |

<h4> 作者</h4>

roshin

<h4>返回:</h4>

`(value is T)`: 如果参数是类对象，返回 true，否则返回 false

<h4> 示例</h4>

``` js
isObjectLike({}) // => true
isObjectLike([1, 2, 3]) // => true
isObjectLike(Function) // => false
isObjectLike(undefined) // => false
isObjectLike(null) // => false
```

> 定义于 [packages/validator/src/isObjectLike.ts:16](https://github.com/extend-js/extend/blob/be43eb3/packages/validator/src/isObjectLike.ts#L16)

___

## isObjectPlain <Badge text="0.0.1"/>

``` ts
const isObjectPlain: (value: any) => value is object
```

检测参数是否为普通对象

<h4>参数:</h4>

名称 | 类型 | 描述 |
------ | ------ | ------ |
`value` | any | 要检测的参数 |

<h4> 作者</h4>

roshin

<h4>返回:</h4>

`(value is object)`: 如果参数是普通对象，返回 true，否则返回 false

<h4> 示例</h4>

``` js
class Foo{ a = 1 }
isPlainObject(new Foo); // => false
isPlainObject([1, 2, 3]); // => false
isPlainObject({ 'x': 0, 'y': 0 }); // => true
isPlainObject(Object.create(null)); // => true
```

> 定义于 [packages/validator/src/isObjectPlain.ts:21](https://github.com/extend-js/extend/blob/be43eb3/packages/validator/src/isObjectPlain.ts#L21)

___
