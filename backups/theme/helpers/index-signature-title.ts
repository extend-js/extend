import { SignatureReflection } from 'typedoc';
import { Type } from 'typedoc/dist/lib/models/types';
import { type } from './type';

export function indexSignatureTitle(this: SignatureReflection): string {
  const md = ['▪'];
  const parameters = this.parameters
    ? this.parameters.map((parameter) => {
        return `${parameter.name}: ${type.call(parameter.type as Type)}`;
      })
    : [];
  md.push(`\\[${parameters.join('')}\\]: ${type.call(this.type as Type)}`);
  return md.join(' ');
}
