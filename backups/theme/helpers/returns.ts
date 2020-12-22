import { ReflectionType } from 'typedoc/dist/lib/models';

import { propertyTable } from './property-table';
import { type } from './type';

export function returns(this: ReflectionType): string {
  const md = [`**Returns:** ${type.call(this, true)}`];
  if (this instanceof ReflectionType && this.declaration && this.declaration.children) {
    md.push(propertyTable.call(this.declaration.children));
  }
  return md.join('\n\n');
}
