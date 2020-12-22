import { SignatureReflection } from 'typedoc';
import { ArrayType, ReferenceType } from 'typedoc/dist/lib/models/types';

import MarkdownTheme from '../theme';

export function typeAndParent(this: ArrayType | ReferenceType): string {
  if (this instanceof ReferenceType && this.reflection) {
    const md: string[] = [];
    const parentReflection = this.reflection.parent;
    if (this.reflection instanceof SignatureReflection) {
      if (parentReflection && parentReflection.parent && parentReflection.parent.url) {
        md.push(
          `[${parentReflection.parent.name}](${MarkdownTheme.HANDLEBARS.helpers.relativeURL(parentReflection.parent.url)})`
        );
      } else if (parentReflection && parentReflection.parent) {
        md.push(parentReflection.parent.name);
      }
    } else {
      if (parentReflection && parentReflection.url) {
        md.push(`[${parentReflection.name}](${MarkdownTheme.HANDLEBARS.helpers.relativeURL(parentReflection.url)})`);
      } else if (parentReflection) {
        md.push(parentReflection.name);
      }
      if (this.reflection.url) {
        md.push(`[${this.reflection.name}](${MarkdownTheme.HANDLEBARS.helpers.relativeURL(this.reflection.url)})`);
      } else {
        md.push(this.reflection.name);
      }
    }
    return md.join('.');
  }
  return 'void';
}
