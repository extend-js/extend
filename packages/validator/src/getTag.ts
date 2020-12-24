import { baseGetTag } from 'extends-internal';

/**
 * 获取参数的数据的类型
 * @since 0.0.1
 * @author roshin
 * @param { * } value 需要获取类型的参数
 * @returns { string } 数据类型名称 Null | Undefined | Number | Object | ...
 * @example
 * ``` js
 * getTag(null) // => 'Null'
 * getTag(void 0) // => 'Undefined'
 * getTag(NaN) // => 'Number'
 *
 * class MyObject {}
 * getTag(new MyObject) // => 'MyObject'
 *
 * class ValidatorClass {
 *   get [Symbol.toStringTag]() {
 *     return 'test';
 *   }
 * }
 * getTag(new ValidatorClass) // => 'test'
 *
 * const obj = {}
 * Object.defineProperty(obj, Symbol.toStringTag, { value: 'customObj' });
 * getTag(obj) // => 'customObj'
 *
 * const obj2 = {}
 * obj2[Symbol.toStringTag] = 'test'
 * getTag(obj2) // => 'Object'
 * ```
 */
const getTag = (value: any): string => {
  // DataView、Map、Promise、Set、WeakMap 的标签名
  const dataViewTag = 'DataView';
  const mapTag = 'Map';
  const objectTag = 'Object';
  const promiseTag = 'Promise';
  const setTag = 'Set';
  const weakMapTag = 'WeakMap';

  // 用于检测 DataView、Map、Promise、Set、WeakMap
  const dataViewCtorString = typeof DataView === undefined ? undefined : `${DataView}`;
  const mapCtorString = typeof Map === undefined ? undefined : `${Map}`;
  const promiseCtorString = typeof Promise === undefined ? undefined : `${Promise}`;
  const setCtorString = typeof Set === undefined ? undefined : `${Set}`;
  const weakMapCtorString = typeof WeakMap === undefined ? undefined : `${WeakMap}`;

  const result = baseGetTag(value);

  // 兼容 IE 11 中的 DataView，maps，sets 和 WeakMap，以及 Node.js < 6 中的 promises
  if (
    (dataViewCtorString && getTag(new DataView(new ArrayBuffer(1))) !== dataViewTag) ||
    (mapCtorString && getTag(new Map()) !== mapTag) ||
    (promiseCtorString && getTag(Promise.resolve()) !== promiseTag) ||
    (setCtorString && getTag(new Set()) !== setTag) ||
    (weakMapCtorString && getTag(new WeakMap()) !== weakMapTag)
  ) {
    const Ctor = result === objectTag ? value.constructor : undefined;
    const ctorString = Ctor ? `${Ctor}` : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
  }
  return result;
};

export default getTag;
