import { isMaskable, baseIsNative } from 'extends-internal';

/**
 * 检测参数是否是内置函数
 * ::: warning 注意
 * 这个方法在 core-js 包的环境下探测内置函数不可靠，因为 core-js 绕过了这类检测方法。
 * 尽管有多个请求，但是 core-js 维护者很清楚地声明：任何试图修复探测方法都会被阻止。
 * 因此，我们别无选择只能抛出错误。
 * 不幸的是，这样还是会影响那些依赖于 core-js 的包，例如 babel-polyfil
 * :::
 * @since 0.0.1
 * @param { * } value 要检测的参数
 * @returns { boolean } 如果参数是内置函数，返回 true,否则返回 false
 * @throws This method is not supported with core-js. Try https://github.com/es-shims.
 * @example
 * ``` js
 * isNative(Array.prototype.push) // => true
 * isNative(_) // => false
 * ```
 */
const isNative = (value: any): boolean => {
  if (isMaskable(value)) {
    throw new Error('This method is not supported with core-js. Try https://github.com/es-shims.');
  }
  return baseIsNative(value);
};

export default isNative;
