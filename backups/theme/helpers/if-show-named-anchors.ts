import MarkdownTheme from '../theme';
import { DeclarationReflection } from 'typedoc';

export function ifShowNamedAnchors(this: DeclarationReflection, options: any): any {
  return MarkdownTheme.HANDLEBARS.helpers.ifShowNamedAnchors.call(this, options);
}
