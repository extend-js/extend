const TypeDoc = require('typedoc'); // 生成 docs 文档

const app = new TypeDoc.Application();

app.options.addReader(new TypeDoc.TSConfigReader());

app.bootstrap({
  mode: 'modules',
  logger: 'none',
  target: 'ES5',
  module: 'CommonJS',
  includeDeclarations: true,
  experimentalDecorators: true
});

console.log(app);

const project = app.convert(app.expandInputFiles(['dist']));

console.log(project);

if (!project) process.exit(1);

const outputDir = 'docs';

app.generateDocs(project, outputDir);
