/**
 * 测试参数是否为 null | undefined
 * @since 0.0.1
 * @author roshin
 * @param { * } value 要检测的参数
 * @returns { boolean } 如果参数是 null 或者 undefined 返回 true，否则返回 false
 * @example
 * ``` js
 * isNil(null) // => true
 * isNil(void 0) // => true
 * isNil(NaN) // => false
 * ```
 */
const isNil = (value: any): value is null | undefined => {
  return value === null || value === undefined;
};

export default isNil;
