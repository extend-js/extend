const TypeDoc = require('typedoc'); // 生成 docs 文档
const { resolveRoot, resolveTarget } = require('./utils');
const pkg = require(resolveRoot('package.json')); // 生成 docs 文档

const app = new TypeDoc.Application();

app.options.addReader(new TypeDoc.TSConfigReader());

// 使用给定的 options 对象初始化 TypeDoc
app.bootstrap({
  exclude: ['**/__tests__', '**/dist', resolveTarget('internal'), resolveTarget('global.d.ts')], // 排除的文件
  includes: resolveTarget(), // 包含文件
  media: '', // 包含媒体
  plugin: ['typedoc-plugin-markdown'],
  name: pkg.name, // 设置将在模板标题中使用的项目的名称
  theme: 'default', // 指定应使用的主题的路径
  readme: 'none', // 应在索引页面上显示的自述文件的路径, 通过 none 以禁用索引页面并在 globals 页面上启动文档
  mode: 'modules', // 指定用于编译项目的输出模式 file | modules
  help: true, // 显示帮助信息
  version: true, // 显示 typedoc 版本
  hideGenerator: true, // 隐藏页底的全局链接
  excludeNotExported: true, // 防止记录未导出的符号
  excludeExternals: true, // 是否排除外部引入的模块
  excludePrivate: true, // 是否排除 private 修饰的相关字段方法
  excludeProtected: true, // 是否排除 protected 修饰的相关字段方法
  externalPattern: [] // 外部的文件
});

const project = app.convert(app.expandInputFiles([resolveTarget()]));
console.log(project);

if (project) {
  const outputDir = 'docs111';
  app.generateDocs(project, outputDir); // 生成文档
}
