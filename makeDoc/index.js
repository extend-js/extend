'use strict';

var path = require('path');
var typedoc = require('typedoc');
var frontMatter_component = require('typedoc-plugin-markdown/dist/components/front-matter.component');
var pkg = require('../package.json');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var pkg__default = /*#__PURE__*/_interopDefaultLegacy(pkg);

const targetsDir = path.resolve(__dirname, '../packages');
const resolveTarget = (...args) => path.resolve(targetsDir, ...args);
const inputFiles = [resolveTarget()];
const outDir = 'doc111';
const app = new typedoc.Application();
makeDoc();
function makeDoc() {
    app.options.addReader(new typedoc.TSConfigReader());
    app.bootstrap({
        name: pkg__default['default'].name,
        includes: resolveTarget(),
        exclude: ['**/*.test.ts', '**/__test__', '**/dist', '**/index.ts'],
        media: '',
        mode: 'modules',
        readme: 'none',
        plugin: ['typedoc-plugin-markdown'],
        theme: path.resolve(__dirname, 'theme'),
        help: true,
        version: true,
        hideGenerator: true,
        includeDeclarations: true,
        excludeNotExported: true,
        excludeExternals: true,
        excludePrivate: true,
        excludeProtected: true,
        externalPattern: []
    });
    app.renderer.addComponent('frontmatter', new frontMatter_component.FrontMatterComponent(app.renderer));
    const project = app.convert(app.expandInputFiles(inputFiles));
    if (!project)
        process.exit(1);
    app.generateJson(project, outDir + '222');
}
