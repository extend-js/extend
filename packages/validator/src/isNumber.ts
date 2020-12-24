import getTag from './getTag';
import isObjectLike from './isObjectLike';

/**
 * 检测参数是否为数字
 * @since 0.0.1
 * @author roshin
 * @param { * } value 要检测的参数
 * @returns { Boolean } 如果参数是数字，返回 true，否则返回 false
 * @example
 * ``` js
 * isNumber(3); // => true
 * isNumber(Number.MIN_VALUE); // => true
 * isNumber(Infinity); // => true
 * isNumber(NaN); // => true
 * isNumber(new Number(2)); // => true
 * isNumber('3'); // => false
 * ```
 */
const isNumber = (value: any): value is number => {
  return typeof value === 'number' || (isObjectLike(value) && getTag(value) === 'Number');
};

export default isNumber;
