import { Renderer } from 'typedoc';
import { FrontMatterComponent } from 'typedoc-plugin-markdown/dist/components/front-matter.component';
import { Component } from 'typedoc/dist/lib/output/components';

@Component({ name: 'docusaurus-frontmatter' })
export class DocsaurusFrontMatterComponent extends FrontMatterComponent {
  constructor(renderer: Renderer) {
    super(renderer);
  }
  
  getYamlString(yamlItems: { [key: string]: string | number | boolean }) {
    const yaml = `---
    123
${Object.entries(yamlItems)
  .map(
    ([key, value]) =>
      `${key}: ${
        typeof value === 'string' ? `"${this.escapeYAMLString(value)}"` : value
      }`,
  )
  .join('\n')}
---`;
    return yaml;
  }
}
