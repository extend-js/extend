const path = require('path');
const rootDir = path.resolve(__dirname, '../../'); // 根路径地址
const targetsDir = path.resolve(rootDir, './packages'); // 存放包的文件夹

/**
 * 解析根路径下绝对路径
 * @param { string[] } args 路径
 * @returns { string } 绝对路径
 */
const resolveRoot = (...args) => path.resolve(rootDir, ...args);

/**
 * 获取到指定包文件夹绝对路径
 * @param { string[] } args 包文件夹名称及路径
 * @returns { string } 绝对路径
 */
const resolveTarget = (...args) => path.resolve(targetsDir, ...args);


module.exports = {
  resolveRoot,
  resolveTarget
};
