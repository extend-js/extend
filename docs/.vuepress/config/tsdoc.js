const { resolveRoot, resolveTarget } = require('../utils');
const pkg = require(resolveRoot('./package.json'));
console.log(resolveTarget())
module.exports = {
  inputFiles: [resolveTarget()], // 相对于 docusaurus.config.js 的输入文件列表
  out: 'api', // 相对于 docs 文件夹的 out 目录(默认为 `api`)
  // 自动生成的 sidebars.json 的选项(传递 `null` 跳过)
  sidebar: {
    fullNames: false, // 显示全名和模块路径（如果适用）-（默认为'false'）
    parentCategory: 'none', // 侧边栏的父类别标签(默认为`none`-无父类别）
  },
  /* -------- 传递任何其他 TypeDoc 选项 -------- */
  exclude: [], // 排除的文件
  includes: resolveTarget(), // 包含文件
  mode: 'modules', // 指定用于编译项目的输出模式 file | modules
  // plugin: ['typedoc-plugin-markdown'], // 插件
  name: pkg.name, // 设置将在模板标题中使用的项目的名称
  // readme: 'none', // 应在索引页面上显示的自述文件的路径, 通过 none 以禁用索引页面并在 globals 页面上启动文档
  // media: '', // 包含媒体
  // help: true, // 显示帮助信息
  // theme: 'markdown', // 主题
  // version: true, // 显示 typedoc 版本
  // hideGenerator: true, // 隐藏页底的全局链接
  // includeDeclarations: true, // 是否包含 .d.ts 文件，如果你的项目是javascript写的，可以使用声明文件的方式来支持TypeScript并生成文档
  // excludeNotExported: true, // 防止记录未导出的符号
  // excludeExternals: true, // 是否排除外部引入的模块
  // excludePrivate: true, // 是否排除 private 修饰的相关字段方法
  // excludeProtected: true, // 是否排除 protected 修饰的相关字段方法
  // externalPattern: [] // 外部的文件
}