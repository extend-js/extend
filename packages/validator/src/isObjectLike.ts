/**
 * 检测参数是否为类对象(所有 不为 null 且 typeof 后的结果是 "object" 的对象)
 * @since 0.0.1
 * @param { * } arg 要检测的参数
 * @returns { boolean } 如果参数是类对象，返回 true，否则返回 false
 * @example
 * ``` js
 * isObjectLike({}) // => true
 * isObjectLike([1, 2, 3]) // => true
 * isObjectLike(Function) // => false
 * isObjectLike(undefined) // => false
 * isObjectLike(null) // => false
 * ```
 */
const isObjectLike = <T = object>(value: any): value is T => {
  return !!value && typeof value === 'object';
};

export default isObjectLike;
