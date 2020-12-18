const MarkdownTheme = require('typedoc-plugin-markdown/dist/theme');

class VuePressTheme extends MarkdownTheme {
  constructor(renderer, basePath) {
    super(renderer, basePath);
  }
}

exports.default = VuePressTheme;
