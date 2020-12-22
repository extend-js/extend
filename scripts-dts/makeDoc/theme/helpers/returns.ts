import { ReflectionType } from 'typedoc/dist/lib/models';
import { DeclarationReflection } from 'typedoc';
import { propertyTable } from './property-table';
import { type } from './type';

export function returns(this: ReflectionType): string {
  const md = ['### 返回:'];
  const typeStr = type.call(this, true);
  console.log(this);
  md.push(`${typeStr ? `(${typeStr}): ` : ''}`);
  if (this instanceof ReflectionType && this.declaration && this.declaration.children) {
    md.push(`${typeStr ? `(${typeStr}): ` : ''}${propertyTable.call(this.declaration.children as DeclarationReflection[])}`);
  }
  return md.join('\n\n');
}
