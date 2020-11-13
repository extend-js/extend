/**
 * 在 node 环境中捕获 global 变量
 * @constant { (NodeJS.Global & typeof globalThis) | false } freeGlobal
 */
export const freeGlobal: (NodeJS.Global & typeof globalThis) | false =
  /**
   * 这里有个缺陷 global 是可以被冒充的 => var global = { Object: Object }
   */
  typeof global === 'object' && global !== null && global.Object === Object && global;

/**
 * 获取 globalThis 变量
 * @constant { typeof globalThis | false } freeGlobalThis
 */
export const freeGlobalThis: typeof globalThis | false =
  /**
   * 	globalThis 提供了一个标准的方式来获取不同环境下的全局 this 对象, 也就是全局对象自身。
   * 	可以确保代码在不同的环境下，都可以正常工作。
   */
  typeof globalThis === 'object' && globalThis !== null && globalThis.Object === Object && globalThis;

/**
 * 获取 self 变量
 * @constant { (Window & typeof globalThis) | false } freeSelf
 */
export const freeSelf: (Window & typeof globalThis) | false =
  /**
   * 	self 在浏览器中大部分情况下指向的是当前 window 引用;
   * 	而在 worker 中，只有 self 这个顶层全局对象，是没有 window 对象的;
   */
  typeof self === 'object' && self !== null && self.Object === Object && self;

/**
 * exports 对象检测
 * @constant { any } freeSelf
 * @description Node.js 原生支持 CommonJS 模块加载机制，在全局环境上会暴露 module 对象和 exports 对象
 */
export const freeExports: any = typeof exports === 'object' && exports !== null && !exports['nodeType'] && exports;

/**
 * module 对象检测
 * @constant { NodeModule | false } freeSelf
 * @description 先判断是否存在 exports 对象, 因为这两个在 Node.js 中肯定是同时存在的
 */
export const freeModule: NodeModule | false =
  freeExports && typeof module === 'object' && module !== null && !module['nodeType'] && module;

/**
 * 检测当前环境是否支持 CommonJS 模块加载机制
 * @constant { boolean } moduleExports
 * @description CommonJS 规定，exports 对象必须为 module.exports 的引用。
 */
export const moduleExports: boolean = freeModule && freeModule.exports === freeExports;

/**
 * 从 Node.js 中检测可用变量 process
 * @constant { NodeJS.Process | false } freeProcess
 */
export const freeProcess: NodeJS.Process | false = moduleExports && freeGlobal && freeGlobal.process;

/**
 * 获取顶层全局对象
 * @constant { any } root
 */
export const root: any =
  /**
   * 	首先是 globalThis，因为这有最大的普适性；
   * 	接着是 global，因为在 node 的环境中，性能的考量会比浏览器环境更重要；
   * 	在有 window 的环境中，self 肯定是 window 对象的引用；
   *  在松散模式下，可以在函数中返回 this 获取全局对象，但是在严格模式下，this 会返回 undefined;
   *  因此也可以使用 Function('return this')() 来获取顶层全局对象。
   */
  // eslint-disable-next-line @typescript-eslint/no-implied-eval
  freeGlobalThis || freeGlobal || freeSelf || Function('return this')();
