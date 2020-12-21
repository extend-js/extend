import { Renderer } from 'typedoc';
import { FrontMatterComponent } from 'typedoc-plugin-markdown/dist/components/front-matter.component';
import { Component } from 'typedoc/dist/lib/output/components';
import { PageEvent } from 'typedoc/dist/lib/output/events';

@Component({ name: 'docusaurus-frontmatter' })
export class DocsaurusFrontMatterComponent extends FrontMatterComponent {
  _filesArr: string[] = [];
  constructor(renderer: Renderer) {
    super(renderer);
  }

  onPageEnd(page: PageEvent): void {
    const templateName = page.templateName || '';
    if (this._filesArr.includes(templateName)) return;
    this._filesArr.push(templateName);
    if (page.contents) {
      page.contents = page.contents
        .replace(/^/, this.getYamlString(this.getYamlItems(page)) + '\n\n')
        .replace(/[\r\n]{3,}/g, '\n\n');
    }
  }

  getYamlString(yamlItems: { [key: string]: string | number | boolean }): string {
    const yaml = `---
${Object.entries(yamlItems)
  .map(([key, value]) => `${key}: ${typeof value === 'string' ? `"${this.escapeYAMLString(value)}"` : value}`)
  .join('\n')}
---`;
    return yaml;
  }
}
