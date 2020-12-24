import { root } from './global';

/**
 * 用于检测扩展的 core-js 填充
 * @since 0.0.1
 * @author roshin
 * @constant { * } coreJsData
 */
export const coreJsData: any = root['__core-js_shared__'];

/**
 * Number 最大值
 * @since 0.0.1
 * @author roshin
 * @constant { number } Number.MAX_SAFE_INTEGER
 * @example
 * ``` js
 * MAX_SAFE_INTEGER // => 9007199254740991
 * ```
 */
export const MAX_SAFE_INTEGER: number = Number.MAX_SAFE_INTEGER || 9007199254740991;

/**
 * Number 最小值
 * @since 0.0.1
 * @author roshin
 * @constant { number } Number.MIN_SAFE_INTEGER
 * @example
 * ``` js
 * MIN_SAFE_INTEGER // => -9007199254740991
 * ```
 */
export const MIN_SAFE_INTEGER: number = Number.MIN_SAFE_INTEGER || -9007199254740991;

/**
 * Object 原型链
 * @since 0.0.1
 * @author roshin
 * @constant { Object } Object.prototype
 */
export const objectProto: Object = Object.prototype;

/**
 * 基于 Object 原型链上的 hasOwnProperty 方法，检测属性值是否存在
 * @since 0.0.1
 * @author roshin
 * @constant { (v: string | number | symbol) => boolean } Object.prototype.hasOwnProperty
 * @example
 * ``` js
 * const obj = { a: 1, b: 2 }
 * objectHasOwnProperty.call(obj, 'a') // true
 * objectHasOwnProperty.call(obj, 'toString') // false
 * ```
 */
export const hasOwnProperty: (v: string | number | symbol) => boolean = objectProto.hasOwnProperty;

/**
 * 基于 Object 原型链上的 toString 方法，获取对象的类型
 * @since 0.0.1
 * @author roshin
 * @constant { string } Object.prototype.toString
 * @example
 * ``` js
 * objectToString.call({}) // [object Object]
 * objectToString.call([]) // [object Array]
 * objectToString.call(function () {}) // [object Function]
 * ```
 */
export const objectToString: () => string = objectProto.toString;

/**
 * 返回对象的原型
 * @since 0.0.1
 * @author roshin
 * @constant { (o: any) => any } Object.getPrototypeOf
 * @example
 * ``` js
 * nativeGetPrototypeOf(obj) === Object.prototype // => true
 * nativeGetPrototypeOf([]) === Array.prototype // => true
 * ```
 */
export const getPrototypeOf: (o: any) => any = Object.getPrototypeOf;

/**
 * Function 原型链
 * @since 0.0.1
 * @author roshin
 * @constant { Function } Function.prototype
 */
export const funcProto: Function = Function.prototype;

/**
 * Function 原型链
 * @since 0.0.1
 * @author roshin
 * @constant { string } Function.prototype
 */
export const funcToString: () => string = funcProto.toString;

/**
 * 定义对象的自定义类型标签，通过 Object.prototype.toString.call 获取
 * @since 0.0.1
 * @author roshin
 * @constant { symbol | undefined } Symbol.toStringTag
 */
export const symbolToStringTag: symbol | undefined = root.Symbol ? root.Symbol.toStringTag : undefined;
