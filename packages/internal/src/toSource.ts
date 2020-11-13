import { funcToString } from './constant';

/**
 * 将函数转换为其源代码
 * @param { any } value 要处理的函数
 * @returns { string } 返回源代码
 * @example
 *  toSource(() => { console.log(1) }) // => "() => { console.log(1) }"
 *  toSource(console.log) // => "function log() { [native code] }"
 */
const toSource = (value: any): string => {
  if (value) {
    try {
      return funcToString.call(value);
    } catch (e) {}
    try {
      return `${value}`;
    } catch (e) {}
  }
  return '';
};

export default toSource;
