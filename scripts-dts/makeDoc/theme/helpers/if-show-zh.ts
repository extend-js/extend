import { DeclarationReflection } from 'typedoc';
import labels from '../../lable.json';

export function ifShowZh(this: DeclarationReflection, str: any): string {
  console.log(labels);
  return labels[str] || str;
}
