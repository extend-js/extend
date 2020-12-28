import { objectToString, hasOwnProperty, symbolToStringTag } from './constant';

const nullTag: string = 'Null';
const undefinedTag: string = 'Undefined';

/**
 * 获取参数的数据的类型
 * @since 0.0.1
 * @param { * } arg 需要获取类型的参数
 * @returns { string } 数据类型名称 Null | Undefined | Number | Object | ...
 * @example
 * ``` js
 * baseGetTag(null) // => 'Null'
 * baseGetTag(void 0) // => 'Undefined'
 * baseGetTag(NaN) // => 'Number'
 *
 * class MyObject {}
 * baseGetTag(new MyObject) // => 'MyObject'
 *
 * class ValidatorClass {
 *   get [Symbol.toStringTag]() {
 *     return 'test';
 *   }
 * }
 * baseGetTag(new ValidatorClass) // => 'test'
 *
 * const obj = {}
 * Object.defineProperty(obj, Symbol.toStringTag, { value: 'customObj' });
 * baseGetTag(obj) // => 'customObj'
 *
 * const obj2 = {}
 * obj2[Symbol.toStringTag] = 'test'
 * baseGetTag(obj2) // => 'Object'
 * ```
 */
const baseGetTag = (arg: any): string => {
  // 处理浏览器兼容性, 在 es5 之前，并没有对 null 和 undefined 进行处理，返回的都是 [object Object]
  if (arg === null || arg === undefined) return arg === null ? nullTag : undefinedTag;
  let typeName: string = '';
  // 如果浏览器不支持 Symbol 或者 value 并不存在 Symbol.toStringTag 的属性，则可以直接调用 toString
  if (!(symbolToStringTag && symbolToStringTag in Object(arg))) {
    typeName = objectToString.call(arg).slice(8, -1);
  } else {
    const isOwn: boolean = hasOwnProperty.call(arg, symbolToStringTag);
    const tag: any = arg[symbolToStringTag];
    let unmasked: boolean = false;
    // 屏蔽掉原型链上的 Symbol.toStringTag 属性
    try {
      arg[symbolToStringTag] = undefined;
      unmasked = true;
    } catch (e) {}
    typeName = objectToString.call(arg).slice(8, -1);
    if (unmasked) {
      // 如果 Symbol.toStringTag 为自身的属性（不为原型链上的属性），则将原来保存下来的 tag 重新赋值，否则将 Symbol.toStringTag 属性移除
      if (isOwn) {
        arg[symbolToStringTag] = tag;
      } else {
        delete arg[symbolToStringTag];
      }
    }
  }
  return `${typeName.charAt(0).toUpperCase()}${typeName.substring(1)}`;
};

export default baseGetTag;
