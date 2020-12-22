import MarkdownTheme from '../theme';
import { DeclarationReflection } from 'typedoc';

export function ifShowSources(this: DeclarationReflection, options: any): string {
  return MarkdownTheme.HANDLEBARS.helpers.ifShowSources.call(this, options);
}
