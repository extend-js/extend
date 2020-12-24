/**
 * 检测参数是否属于 `Object` (例如：arrays, functions, objects, regexes, `new Number(0)`, `new String('')`)
 * @since 0.0.1
 * @author roshin
 * @param { * } value 要检测的参数
 * @returns { boolean } 如果参数属于 `Object`，返回 true，否则返回 false
 * @example
 * ``` js
 * isObject({}) // => true
 * isObject([1, 2, 3]) // => true
 * isObject(function fn() {}) // => true
 * isObject(null) // => false
 * ```
 */
const isObject = <T = object>(value: any): value is T => {
  const type = typeof value;
  return !!value && (type === 'object' || type === 'function');
};

export default isObject;
