import * as path from 'path';

import { Application, TSConfigReader /* , NavigationItem, ProjectReflection */ } from 'typedoc';
import { FrontMatterComponent } from 'typedoc-plugin-markdown/dist/components/front-matter.component';

const targetsDir: string = path.resolve(__dirname, '../packages'); // 存放包的文件夹
const resolveTarget = (...args: string[]): string => path.resolve(targetsDir, ...args);
const inputFiles: string[] = [resolveTarget()];
const outDir: string = 'doc111';

const app = new Application();

app.options.addReader(new TSConfigReader());

app.bootstrap({
  includes: resolveTarget(),
  mode: 'modules',
  readme: 'none', // 应在索引页面上显示的自述文件的路径, 通过 none 以禁用索引页面并在 globals 页面上启动文档
  // theme: 'markdown'
  plugin: ['typedoc-plugin-markdown'],
  theme: path.resolve(__dirname, './theme')
});

app.renderer.addComponent('frontmatter', new FrontMatterComponent(app.renderer));

const project = app.convert(app.expandInputFiles(inputFiles));

if (!project) process.exit(1);

app.generateDocs(project, outDir);
