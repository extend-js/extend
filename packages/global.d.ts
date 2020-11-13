// 全局编译时常量

/**
 * 环境变量
 */
declare let __DEV__: boolean;

/**
 * 测试环境
 */
declare let __TEST__: boolean;

/**
 * 浏览器版本（global / esm builds）
 */
declare let __BROWSER__: boolean;

/**
 * global 版本
 */
declare let __GLOBAL__: boolean;

/**
 * esm 版本
 */
declare let __ESM_BUNDLER__: boolean;

/**
 * esm 浏览器端版本
 */
declare let __ESM_BROWSER__: boolean;

/**
 * commonjs 版本
 */
declare let __NODE_JS__: boolean;

/**
 * git提交哈希值
 */
declare let __COMMIT__: string;

/**
 * 版本号
 */
declare let __VERSION__: string;
