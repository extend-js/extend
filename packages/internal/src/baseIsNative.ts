import isMasked from './isMasked';
import toSource from './toSource';
import { isObjectHost, isObject, isFunction } from 'extends-validator';
import { funcToString, hasOwnProperty } from './constant';

// 用于匹配 `RegExp`
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
// 用于检测构造函数 (Safari)
const reIsHostCtor = /^\[object .+?Constructor\]$/;
// 用于检测是否内置函数
const reIsNative = RegExp(
  `^${funcToString
    .call(hasOwnProperty)
    .replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?')}$`
);

/**
 * isNative 的基本实现没有错误的填充检查
 * @since 0.0.1
 * @param { any } value 要检测的值
 * @returns { boolean } 是否是内置函数
 * @example
 * ``` js
 * baseIsNative(Array.prototype.push); // => true
 * baseIsNative(_); // => false
 * ```
 */
function baseIsNative(value: any): boolean {
  if (!isObject(value) || isMasked(value)) return false;
  const pattern = isFunction(value) || isObjectHost(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

export default baseIsNative;
