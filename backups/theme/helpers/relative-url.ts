import MarkdownTheme from '../theme';

export function relativeURL(url: string): string {
  return MarkdownTheme.HANDLEBARS.helpers.relativeURL(url);
}
