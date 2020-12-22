# Module: "packages/validator/src/getTag"

## Functions

## getTag

`Const`**getTag**(`value`: any): string

获取参数的数据的类型

**`example`**123 
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

### 参数:

Name | Type |
------ | ------ |
`value` | any |

### 返回值:

string

数据类型名称 Null | Undefined | Number | Object | ...

*定义于 [packages/validator/src/getTag.ts:30](https://github.com/extend-js/extend/blob/3b1925b/packages/validator/src/getTag.ts#L30)*