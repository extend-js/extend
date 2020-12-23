import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { DeclarationReflection, ProjectReflection, Reflection, Renderer, UrlMapping } from 'typedoc';
// import { formatPkgName } from '../../utils';

export default class VuePressTheme extends MarkdownTheme {
  // _fileName = '';
  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
  }

  getUrls(project: ProjectReflection): UrlMapping[] {
    const urls: UrlMapping[] = [];
    const entryPoint = this.getEntryPoint(project);
    // this._fileName = formatPkgName(entryPoint.name);

    if (this.readme === 'none') {
      entryPoint.url = this.entryFile;
      urls.push(new UrlMapping(this.entryFile, { ...entryPoint }, 'reflection.hbs'));
      // urls.push(new UrlMapping(this.bodyFile, { ...entryPoint }, 'body.hbs'));
    } else {
      entryPoint.url = this.globalsFile;
      urls.push(new UrlMapping(this.globalsFile, entryPoint, 'reflection.hbs'));
      // urls.push(new UrlMapping(this.bodyFile, entryPoint, 'body.hbs'));
      urls.push(new UrlMapping(this.entryFile, project, 'index.hbs'));
    }
    if (entryPoint.children) {
      entryPoint.children.forEach((child: Reflection) => {
        if (child instanceof DeclarationReflection) {
          this.buildUrls(child, urls);
        }
      });
    }
    return urls;
  }

  buildUrls(reflection: DeclarationReflection, urls: UrlMapping[]): UrlMapping[] {
    const mapping = this.mappings.find((mapping) => reflection.kindOf(mapping.kind));
    if (mapping) {
      // if (!reflection.url || !MarkdownTheme.URL_PREFIX.test(reflection.url)) {
      //   const url = this.toUrl(mapping, reflection);
      //   urls.push(new UrlMapping(url, reflection, mapping.template));
      //   reflection.url = url;
      //   reflection.hasOwnDocument = true;
      // }
      // for (const child of reflection.children || []) {
      //   if (mapping.isLeaf) {
      //     this.applyAnchorUrl(child, reflection);
      //   } else {
      //     this.buildUrls(child, urls);
      //   }
      // }
    } else if (reflection.parent) {
      this.applyAnchorUrl(reflection, reflection.parent);
    }
    return urls;
  }

  get entryFile(): string {
    return 'README.md';
  }

  get globalsFile(): string {
    return 'globals.md';
  }

  // get bodyFile(): string {
  //   return `${this._fileName}.md` || 'body.md';
  // }

  get hasSidebar(): boolean {
    return false;
  }
}
