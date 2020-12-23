import { ParameterReflection, TypeParameterReflection } from 'typedoc';

import { comment } from './comment';
import { escape } from 'typedoc-plugin-markdown/dist/resources/helpers/escape';
import { stripLineBreaks } from 'typedoc-plugin-markdown/dist/resources/helpers/strip-line-breaks';
import { type } from './type';

export function parameterTable(
  this: ParameterReflection[] | TypeParameterReflection[],
  kind: 'typeParameters' | 'parameters'
): string {
  const showDefaults = hasDefaultValues(kind, this);
  const showTypes = kind === 'parameters' ? true : hasTypes(this);
  const parameters = this as ParameterReflection[];
  const comments = parameters.map(
    (param) => (param.comment && !!param.comment.text) || (param.comment && !!param.comment.shortText)
  );
  const hasComments = !comments.every((value) => !value);

  const headers = ['名称'];

  if (showTypes) {
    headers.push('类型');
  }

  if (showDefaults) {
    headers.push(kind === 'parameters' ? '默认值' : '默认');
  }

  if (hasComments) {
    headers.push('描述');
  }

  const rows = parameters.map((parameter) => {
    const row: string[] = [];

    row.push(`\`${parameter.flags.isRest ? '...' : ''}${parameter.name}${parameter.flags.isOptional ? '?' : ''}\``);

    if (showTypes) {
      row.push(parameter.type ? type.call(parameter.type) : '-');
    }

    if (showDefaults) {
      row.push(escape(getDefaultValue(parameter)));
    }
    if (hasComments) {
      if (parameter.comment) {
        row.push(stripLineBreaks(comment.call(parameter.comment)));
      } else {
        row.push('-');
      }
    }
    return `${row.join(' | ')} |\n`;
  });

  const output = `\n${headers.join(' | ')} |\n${headers.map(() => '------').join(' | ')} |\n${rows.join('')}`;

  return output;
}

function getDefaultValue(parameter: ParameterReflection | TypeParameterReflection) {
  if (parameter instanceof TypeParameterReflection) {
    return parameter.default ? type.call(parameter.default) : '-';
  }
  return parameter.defaultValue ? parameter.defaultValue : '-';
}

function hasDefaultValues(kind: 'typeParameters' | 'parameters', parameters: ParameterReflection[] | TypeParameterReflection[]) {
  const defaultValues =
    kind === 'parameters'
      ? (parameters as ParameterReflection[]).map((param) => !!param.defaultValue)
      : (parameters as TypeParameterReflection[]).map((param) => !!param.default);
  return !defaultValues.every((value) => !value);
}

function hasTypes(parameters: TypeParameterReflection[] | ParameterReflection[]) {
  const types = (parameters as TypeParameterReflection[]).map((param) => !!param.type);
  return !types.every((value) => !value);
}
