const { ReflectionKind } = require('typedoc');

function ifShowIndex(this, options) {
  return !this.kind || this.kind === ReflectionKind.Module ? options.fn(this) : options.inverse(this);
}

exports.ifShowIndex = ifShowIndex;
