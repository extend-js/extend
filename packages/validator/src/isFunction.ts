import tag from './getTag';
import isObject from './isObject';

/**
 * 检测参数是否为函数类型
 * @param { any } value 要检测的参数
 * @returns { Boolean } 如果参数是 Function，返回 true，否则返回 false
 * @example
 *  isFunction(class Any{}) // => true
 *  isFunction(() => {}) // => true
 *  isFunction(async () => {}) // => true
 *  isFunction(function * Any() {}) // => true
 *  isFunction(Math.round) // => true
 *  isFunction(/abc/) // => false
 *  isFunction(null) // => false
 */
const isFunction = <T = Function>(value: any): value is T => {
  if (!isObject(value)) return false;
  return (
    tag(value) === 'Proxy' ||
    tag(value) === 'Function' ||
    tag(value) === 'AsyncFunction' ||
    tag(value) === 'GeneratorFunction' ||
    tag(value) === 'AsyncGeneratorFunction'
  );
};

export default isFunction;
