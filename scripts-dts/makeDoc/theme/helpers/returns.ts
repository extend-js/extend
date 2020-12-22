import { ReflectionType } from 'typedoc/dist/lib/models';
import { DeclarationReflection } from 'typedoc';
import { propertyTable } from './property-table';
import { type } from './type';

export function returns(this: ReflectionType): string {
  const md = ['### 返回值:'];

  md.push(`${type.call(this, true)}\n\n`);

  if (this instanceof ReflectionType && this.declaration && this.declaration.children) {
    md.push(propertyTable.call(this.declaration.children as DeclarationReflection[]));
  }
  return md.join('\n\n');
}
