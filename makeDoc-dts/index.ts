import * as path from 'path';

import { Application /* , NavigationItem */, ProjectReflection, TSConfigReader } from 'typedoc';
import { FrontMatterComponent } from 'typedoc-plugin-markdown/dist/components/front-matter.component';
import pkg from '../package.json';

// const rootDir: string = path.resolve(__dirname, '../'); // 项目目录
// const resolveRoot = (...args: string[]): string => path.resolve(rootDir, ...args);
const targetsDir: string = path.resolve(__dirname, '../packages'); // 存放包的文件夹
const resolveTarget = (...args: string[]): string => path.resolve(targetsDir, ...args);

const inputFiles: string[] = [resolveTarget()];
const outDir: string = 'doc111';

const app = new Application();

makeDoc();

function makeDoc() {
  app.options.addReader(new TSConfigReader()); // 如果你想载入 tsconfig.json 文件
  // app.options.addReader(new TypeDoc.TypeDocReader()); // 如果你想载入 typedoc.json 文件

  app.bootstrap({
    name: pkg.name, // 设置将在模板标题中使用的项目的名称
    includes: resolveTarget(), // 包含文件
    exclude: ['**/*.test.ts', '**/__test__', '**/dist', '**/index.ts'], // 排除的文件
    media: '', // 包含媒体
    mode: 'file', // 指定用于编译项目的输出模式 file | modules
    readme: 'none', // 应在索引页面上显示的自述文件的路径, 通过 none 以禁用索引页面并在 globals 页面上启动文档
    // theme: 'markdown'
    plugin: ['typedoc-plugin-markdown'],
    theme: path.resolve(__dirname, 'theme'), // 指定应使用的主题的路径
    help: false, // 显示帮助信息
    version: false, // 显示 typedoc 版本
    hideGenerator: true, // 隐藏页底的全局链接
    includeDeclarations: true, // 是否包含 .d.ts 文件，如果你的项目是javascript写的，可以使用声明文件的方式来支持TypeScript并生成文档
    excludeNotExported: false, // 防止记录未导出的符号
    excludeExternals: true, // 是否排除外部引入的模块
    excludePrivate: true, // 是否排除 private 修饰的相关字段方法
    excludeProtected: true // 是否排除 protected 修饰的相关字段方法
    // externalPattern: [] // 外部的文件
  });

  app.renderer.addComponent('frontmatter', new FrontMatterComponent(app.renderer));

  const project: ProjectReflection | undefined = app.convert(app.expandInputFiles(inputFiles));

  if (!project) process.exit(1);

  app.generateDocs(project, outDir);
  // app.generateJson(project, outDir + '222.json');
}
