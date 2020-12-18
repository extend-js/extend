'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MarkdownTheme = require('typedoc-plugin-markdown/dist/theme');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var MarkdownTheme__default = /*#__PURE__*/_interopDefaultLegacy(MarkdownTheme);

class VuePressTheme extends MarkdownTheme__default['default'] {
    constructor(renderer, basePath) {
        super(renderer, basePath);
    }
}

exports.default = VuePressTheme;
