/**
 * 生成文档
 * @example
 *  node ./script/makeDocs.js [targets]
 *  targets => packages 下的软件包，多个使用逗号分隔，默认全部
 *  -s || --select => 选择软件包，将会列出 packages 下所有软件包列表
 *  -a || --all => 匹配所有符合规则的目标，否则只匹配第一次被匹配的的目标
 */

// import * as path from 'path';
import fse from 'fs-extra'; // fs 扩展工具包
import minimist from 'minimist'; // 轻量级的命令行参数解析引擎
// import chalk from 'chalk'; // node 终端样式库
import { prompt } from 'enquirer'; // 创建交互式 cli 提示
import { Application /* , NavigationItem */, ProjectReflection, TSConfigReader } from 'typedoc';
import { FrontMatterComponent } from 'typedoc-plugin-markdown/dist/components/front-matter.component';

import { targets as allTargets, fuzzyMatchTarget, generatePkgName, resolveTarget, pkgDirName, resolveRoot } from './utils';

const args: minimist.ParsedArgs = minimist(process.argv.slice(2)); // 命令行参数解析规则

const targets: string[] = args._; // 目标项目
const select: boolean = args.select || args.s; // 选择软件包
const allMatching: boolean = args.all || args.a; // 匹配所有符合规则的目标，否则只匹配第一次被匹配的的目标

const app = new Application();
// import docJson from '../docsJson/validator.json';

run();
// makeDoc('validator', docJson);

/**
 * 运行主程序
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function run(): Promise<void> {
  const targetList = await prompts();
  targetList.forEach((target) => {
    const json = makeDocJson(target);
    makeDoc(target, json);
    // console.log(JSON.stringify(json, null, '\t'));
  });
}

/**
 * 生成文档 json 对象
 * @param { string } _target 软件包名
 * @returns { any } 文档 json 对象
 */
function makeDocJson(_target: string): any {
  app.options.addReader(new TSConfigReader()); // 如果你想载入 tsconfig.json 文件
  // app.options.addReader(new TypeDoc.TypeDocReader()); // 如果你想载入 typedoc.json 文件

  app.bootstrap({
    name: generatePkgName(_target), // 设置将在模板标题中使用的项目的名称
    includes: resolveTarget(_target), // 包含文件
    exclude: ['**/*.test.ts', '**/__test__', '**/dist', '**/index.ts'], // 排除的文件
    media: '', // 包含媒体
    mode: 'modules', // 指定用于编译项目的输出模式 file | modules
    readme: 'none', // 应在索引页面上显示的自述文件的路径, 通过 none 以禁用索引页面并在 globals 页面上启动文档
    // theme: 'markdown'
    // theme: path.resolve(__dirname, 'theme'), // 指定应使用的主题的路径
    // plugin: ['typedoc-plugin-markdown'],
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

  const project: ProjectReflection | undefined = app.convert(app.expandInputFiles([resolveTarget(_target)]));

  if (!project) process.exit(1);

  // const out = path.resolve(`docsJson/${_target}.json`);
  // const eventData = { outputDirectory: path.dirname(out), outputFile: path.basename(out) };
  // console.log(eventData);
  app.generateJson(project, `docsJson/${_target}.json`);
  return app.serializer.projectToObject(project);
}

/**
 * 通过 json 文件产生 markdown
 * @param { string } _target 软件包名
 * @param { any } _json 文档 json 对象
 */
function makeDoc(_target: string, _json: any) {
  fse.ensureDirSync(resolveRoot('doc222')); // 确保目录存在
  // const groups = _json.groups.filter();
  console.log(_target, _json);
  // 创建一个可以写入的流，写入到文件中
  // const writerStream = fse.createWriteStream(resolveRoot(`doc222/${_target}.md`));
  // // 使用 utf8 编码写入数据
  // writerStream.write(data, 'utf-8');
  // // 标记文件末尾
  // writerStream.end();
  // // 处理流事件 --> data, end, and error
  // writerStream.on('finish', function () {
  //   console.log('写入完成。');
  // });
  // writerStream.on('error', function (err) {
  //   console.log(err.stack, '错误');
  // });
}

/**
 * 用户交互部分
 * @returns { string } 交互所产生的值
 */
async function prompts(): Promise<string[]> {
  const targetList = allTargets.map(generatePkgName); // 可用包列表
  let _targets: string[] = targetList; // 默认所有可用包
  if (select) {
    // 选择软件包
    const { list }: { list: string[] } = await prompt({
      type: 'multiselect', // 提示的类型
      name: 'list', // 返回值对象上的键
      message: '请选择需要生成文档的软件包', // 在终端中呈现提示时显示的消息
      choices: targetList // 选项数组
    });
    _targets = list;
  } else if (targets.length >= 1) {
    // 如果有输入的包
    _targets = fuzzyMatchTarget(targets, allMatching).map((v) => generatePkgName(v));
  }
  return _targets.map((v) => pkgDirName(v));
}