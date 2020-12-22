import MarkdownTheme from '../theme';
export function text(this: string): string {
  return MarkdownTheme.HANDLEBARS.helpers.comment.call(this);
}
