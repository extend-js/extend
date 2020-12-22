Module &quot;packages/validator/src/getTag&quot;

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

### 返回:

(CallSignature getTag:string): 

数据类型名称 Null | Undefined | Number | Object | ...

*Defined in [packages/validator/src/getTag.ts:30](https://github.com/extend-js/extend/blob/d92be1e/packages/validator/src/getTag.ts#L30)*

___
