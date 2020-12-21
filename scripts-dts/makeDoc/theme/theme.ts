import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { formatPkgName } from '../../utils';
import fse from 'fs-extra'; // fs 扩展工具包
import {
  DeclarationReflection,
  ProjectReflection,
  Reflection,
  Renderer,
  UrlMapping,
} from 'typedoc';
export default class VuePressTheme extends MarkdownTheme {
  _fileName = ''
  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
  }

  
  getUrls(project: ProjectReflection): UrlMapping[] {
    const urls: UrlMapping[] = [];
    const entryPoint = this.getEntryPoint(project);
    this._fileName = formatPkgName(entryPoint.name)
    fse.writeJSONSync(this._fileName, entryPoint)
    console.log(entryPoint)

    if (this.readme === 'none') {
      entryPoint.url = this.entryFile;
      urls.push(
        new UrlMapping(this.entryFile, { ...entryPoint }, 'reflection.hbs'),
      );
    } else {
      entryPoint.url = this.globalsFile;
      urls.push(new UrlMapping(this.globalsFile, entryPoint, 'reflection.hbs'));
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

  get entryFile() {
    return `${this._fileName}.md` || 'README.md';
  }
}
