import { Comment } from 'typedoc/dist/lib/models';
import MarkdownTheme from '../theme';
import { resolveRoot, loadFile } from '../../../utils';
const config = loadFile(resolveRoot('./docs.config'));
const label = config.tags || {};
const ignore = config.ignore || [];

export function commentTags(this: Comment, options: any): string {
  if (!this.tags) return '';
  const md: string[] = [];
  const example: string[] = [];
  this.tags.forEach((item, i) => {
    if (ignore.includes(item.tagName)) return;
    const tagName = `${i > 0 ? '\n\n' : ''}<h4> ${label[item.tagName] || item.tagName}</h4>\n\n`;
    const text = item.text ? MarkdownTheme.HANDLEBARS.helpers.comment.call(item.text) : '';
    if (item.tagName === 'example') {
      example.push(tagName);
      example.push(text);
      return;
    }
    md.push(tagName);
    md.push(text);
  });
  switch (options) {
    case 'example':
      return example.join('');
    case 'other':
      return md.join('');
    default:
      return md.concat(example).join('');
  }
}
