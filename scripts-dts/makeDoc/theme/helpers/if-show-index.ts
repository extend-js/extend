import { DeclarationReflection, ReflectionKind } from 'typedoc';

export function ifShowIndex(this: DeclarationReflection, options: any): string {
  return !this.kind || this.kind === ReflectionKind.Module ? options.fn(this) : options.inverse(this);
}
