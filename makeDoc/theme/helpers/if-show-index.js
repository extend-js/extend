'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var typedoc = require('typedoc');

function ifShowIndex(options) {
    return !this.kind || this.kind === typedoc.ReflectionKind.Module ? options.fn(this) : options.inverse(this);
}

exports.ifShowIndex = ifShowIndex;
