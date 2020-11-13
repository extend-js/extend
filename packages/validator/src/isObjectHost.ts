/**
 * 检测参数是否是 IE < 9 中的宿主对象(window/document...)
 * @param { any } value 要检测的参数
 * @returns { boolean } 如果参数是宿主对象返回 true，否则返回 false
 * @example
 *  isHostObject(window) // => ie < 9: true, other: false
 *  isHostObject(document) // => ie < 9: true, other: false
 *  isHostObject({}) // => ie < 9: false, other: false
 *  isHostObject(Object) // => ie < 9: false, other: false
 */
const isObjectHost = (value: any): boolean => {
  let result: boolean = false;
  if (value && typeof value.toString !== 'function') {
    try {
      result = !!`${value}`;
    } catch (e) {}
  }
  return result;
};

export default isObjectHost;
