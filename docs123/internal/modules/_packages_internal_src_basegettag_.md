# Module: "packages/internal/src/baseGetTag"

## Variables

## nullTag

• `Const` **nullTag**: string = "Null"

*定义于 [packages/internal/src/baseGetTag.ts:3](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/baseGetTag.ts#L3)*

___

## undefinedTag

• `Const` **undefinedTag**: string = "Undefined"

*定义于 [packages/internal/src/baseGetTag.ts:4](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/baseGetTag.ts#L4)*

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

### 返回值:

string

数据类型名称 Null | Undefined | Number | Object | ...

*定义于 [packages/internal/src/baseGetTag.ts:33](https://github.com/extend-js/extend/blob/3b1925b/packages/internal/src/baseGetTag.ts#L33)*
