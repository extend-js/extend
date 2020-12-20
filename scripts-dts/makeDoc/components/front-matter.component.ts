import { Renderer } from 'typedoc';
import { FrontMatterComponent } from 'typedoc-plugin-markdown/dist/components/front-matter.component';
import { Component } from 'typedoc/dist/lib/output/components';

@Component({ name: 'docusaurus-frontmatter' })
export class DocsaurusFrontMatterComponent extends FrontMatterComponent {

  constructor(renderer: Renderer) {
    super(renderer);
  }
  
}
