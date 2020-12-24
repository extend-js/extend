import tag from './getTag';
import isObjectLike from './isObjectLike';
import isObjectHost from './isObjectHost';
import { getPrototypeOf } from 'extends-internal';

/**
 * 检测参数是否为普通对象
 * @since 0.0.1
 * @author roshin
 * @param { * } value 要检测的参数
 * @returns { boolean } 如果参数是普通对象，返回 true，否则返回 false
 * @example
 * ``` js
 * class Foo{ a = 1 }
 * isPlainObject(new Foo); // => false
 * isPlainObject([1, 2, 3]); // => false
 * isPlainObject({ 'x': 0, 'y': 0 }); // => true
 * isPlainObject(Object.create(null)); // => true
 * ```
 */
const isObjectPlain = (value: any): value is object => {
  // 如果不是一个对象
  if (!isObjectLike(value) || tag(value) !== 'Object' || isObjectHost(value)) return false;
  // 如果原型为 null ，则是纯对象
  if (getPrototypeOf(value) === null) return true;
  // 如果原型链只有一层，也为纯对象
  let proto = value;
  while (getPrototypeOf(proto) !== null) {
    proto = getPrototypeOf(proto);
  }
  return getPrototypeOf(value) === proto;
};

export default isObjectPlain;
