import { ReflectionType, Type } from 'typedoc/dist/lib/models';
import { DeclarationReflection } from 'typedoc';
import { propertyTable } from './property-table';
import MarkdownTheme from '../theme';
import { type } from './type';

export function returns(this: DeclarationReflection): string {
  const oType: Type | undefined = this.type;
  const md: string[] = [];
  const returns: string = this.comment && this.comment.returns ? this.comment.returns : '';
  const typeStr: string = type.call(oType as Type, true);
  md.push(`${typeStr ? `\`(${typeStr})\`: ` : ''}${MarkdownTheme.HANDLEBARS.helpers.comment.call(returns)}`);
  if (oType && oType instanceof ReflectionType && oType.declaration && oType.declaration.children) {
    md.push(propertyTable.call(oType.declaration.children as DeclarationReflection[]));
  }
  return md.join('\n\n');
}
