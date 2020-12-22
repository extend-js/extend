Module &quot;packages/internal/src/constant&quot;

## Variables

## MAX\_SAFE\_INTEGER

• `Const` **MAX\_SAFE\_INTEGER**: number = Number.MAX\_SAFE\_INTEGER \|\| 9007199254740991

Number 最大值

**`constant`**123 Number.MAX_SAFE_INTEGER

**`example`**123 
 MAX_SAFE_INTEGER // => 9007199254740991

*Defined in [packages/internal/src/constant.ts:15](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/constant.ts#L15)*

___

## MIN\_SAFE\_INTEGER

• `Const` **MIN\_SAFE\_INTEGER**: number = Number.MIN\_SAFE\_INTEGER \|\| -9007199254740991

Number 最小值

**`constant`**123 Number.MIN_SAFE_INTEGER

**`example`**123 
 MIN_SAFE_INTEGER // => -9007199254740991

*Defined in [packages/internal/src/constant.ts:23](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/constant.ts#L23)*

___

## coreJsData

• `Const` **coreJsData**: any = root['\_\_core-js\_shared\_\_']

用于检测扩展的 core-js 填充

**`constant`**123 coreJsData

*Defined in [packages/internal/src/constant.ts:7](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/constant.ts#L7)*

___

## funcProto

• `Const` **funcProto**: Function = Function.prototype

Function 原型链

**`constant`**123 Function.prototype

*Defined in [packages/internal/src/constant.ts:64](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/constant.ts#L64)*

___

## funcToString

• `Const` **funcToString**: () => string = funcProto.toString

Function 原型链

**`constant`**123 Function.prototype

*Defined in [packages/internal/src/constant.ts:70](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/constant.ts#L70)*

___

## getPrototypeOf

• `Const` **getPrototypeOf**: getPrototypeOf = Object.getPrototypeOf

返回对象的原型

**`constant`**123 Object.getPrototypeOf

**`example`**123 
 nativeGetPrototypeOf(obj) === Object.prototype // => true
 nativeGetPrototypeOf([]) === Array.prototype // => true

*Defined in [packages/internal/src/constant.ts:58](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/constant.ts#L58)*

___

## hasOwnProperty

• `Const` **hasOwnProperty**: (v: string | number | symbol) => boolean = objectProto.hasOwnProperty

基于 Object 原型链上的 hasOwnProperty 方法，检测属性值是否存在

**`constant`**123 Object.prototype.hasOwnProperty

**`example`**123 
 const obj = { a: 1, b: 2 }
 objectHasOwnProperty.call(obj, 'a') // true
 objectHasOwnProperty.call(obj, 'toString') // false

*Defined in [packages/internal/src/constant.ts:39](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/constant.ts#L39)*

___

## objectProto

• `Const` **objectProto**: Object = Object.prototype

Object 原型链

**`constant`**123 Object.prototype

*Defined in [packages/internal/src/constant.ts:29](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/constant.ts#L29)*

___

## objectToString

• `Const` **objectToString**: () => string = objectProto.toString

基于 Object 原型链上的 toString 方法，获取对象的类型

**`constant`**123 Object.prototype.toString

**`example`**123 
 objectToString.call({}) // [object Object]
 objectToString.call([]) // [object Array]
 objectToString.call(function () {}) // [object Function]

*Defined in [packages/internal/src/constant.ts:49](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/constant.ts#L49)*

___

## symbolToStringTag

• `Const` **symbolToStringTag**: symbol | undefined = root.Symbol ? root.Symbol.toStringTag : undefined

定义对象的自定义类型标签，通过 Object.prototype.toString.call 获取

**`constant`**123 Symbol.toStringTag

*Defined in [packages/internal/src/constant.ts:76](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/constant.ts#L76)*

___
