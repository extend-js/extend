Module &quot;packages/internal/src/baseGetTag&quot;

## Variables

## nullTag

• `Const` **nullTag**: string = "Null"

*Defined in [packages/internal/src/baseGetTag.ts:3](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/baseGetTag.ts#L3)*

___

## undefinedTag

• `Const` **undefinedTag**: string = "Undefined"

*Defined in [packages/internal/src/baseGetTag.ts:4](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/baseGetTag.ts#L4)*

___

## Functions

## baseGetTag

`Const`**baseGetTag**(`arg`: any): string

获取参数的数据的类型

**`example`**123 
 baseGetTag(null) // => 'Null'
 baseGetTag(void 0) // => 'Undefined'
 baseGetTag(NaN) // => 'Number'

 class MyObject {}
 baseGetTag(new MyObject) // => 'MyObject'

 class ValidatorClass {
   get [Symbol.toStringTag]() {
     return 'test';
   }
 }
 baseGetTag(new ValidatorClass) // => 'test'

 const obj = {}
 Object.defineProperty(obj, Symbol.toStringTag, { value: 'customObj' });
 baseGetTag(obj) // => 'customObj'

 const obj2 = {}
 obj2[Symbol.toStringTag] = 'test'
 baseGetTag(obj2) // => 'Object'

### 参数:

Name | Type | Description |
------ | ------ | ------ |
`arg` | any | 需要获取类型的参数 |

### 返回:

(CallSignature baseGetTag:string): 

数据类型名称 Null | Undefined | Number | Object | ...

*Defined in [packages/internal/src/baseGetTag.ts:33](https://github.com/extend-js/extend/blob/d92be1e/packages/internal/src/baseGetTag.ts#L33)*

___
