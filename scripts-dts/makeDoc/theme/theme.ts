import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { DeclarationReflection, ProjectReflection, Reflection, Renderer, UrlMapping } from 'typedoc';
import { formatPkgName } from '../../utils';

export default class VuePressTheme extends MarkdownTheme {
  _fileName = '';
  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
  }

  getUrls(project: ProjectReflection): UrlMapping[] {
    const urls: UrlMapping[] = [];
    const entryPoint = this.getEntryPoint(project);
    this._fileName = formatPkgName(entryPoint.name);

    if (this.readme === 'none') {
      entryPoint.url = this.entryFile;
      urls.push(new UrlMapping(this.entryFile, { ...entryPoint }, 'reflection.hbs'));
    } else {
      entryPoint.url = this.globalsFile;
      urls.push(new UrlMapping(this.globalsFile, entryPoint, 'reflection.hbs'));
      urls.push(new UrlMapping(this.sidebarFile, entryPoint, 'sidebar.hbs'));
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

  get entryFile(): string {
    return 'home.md';
  }

  get globalsFile(): string {
    return 'index.md';
  }

  get sidebarFile(): string {
    return 'sidebar.md';
  }

  get hasSidebar(): boolean {
    return true;
  }
}
