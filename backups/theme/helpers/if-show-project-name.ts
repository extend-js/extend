import MarkdownTheme from '../theme';
import { DeclarationReflection } from 'typedoc';

export function ifShowProjectName(this: DeclarationReflection, options: any): string {
  return MarkdownTheme.HANDLEBARS.helpers.ifShowProjectName.call(this, options);
}
