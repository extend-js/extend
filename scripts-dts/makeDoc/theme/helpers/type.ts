import { ParameterReflection, DeclarationReflection, SignatureReflection } from 'typedoc';
import {
  Type,
  ArrayType,
  ConditionalType,
  IndexedAccessType,
  InferredType,
  IntersectionType,
  IntrinsicType,
  PredicateType,
  QueryType,
  ReferenceType,
  ReflectionType,
  StringLiteralType,
  TupleType,
  TypeOperatorType,
  TypeParameterType,
  UnionType,
  UnknownType
} from 'typedoc/dist/lib/models/types';

import MarkdownTheme from '../theme';
import { escape } from './escape';

export function type(
  this:
    | Type
    | ParameterReflection
    | DeclarationReflection
    | ArrayType
    | IntersectionType
    | IntrinsicType
    | ReferenceType
    | StringLiteralType
    | TupleType
    | UnionType
    | TypeOperatorType
    | TypeParameterType
    | QueryType
    | PredicateType
    | ReferenceType
    | ConditionalType
    | IndexedAccessType
    | UnknownType
    | InferredType,
  collapse = false
): string {
  if (this instanceof ReferenceType) {
    return getReferenceType(this);
  }

  if (this instanceof ArrayType && this.elementType) {
    return getArrayType(this);
  }

  if (this instanceof UnionType && this.types) {
    return getUnionType(this);
  }

  if (this instanceof IntersectionType && this.types) {
    return getIntersectionType(this);
  }

  if (this instanceof TupleType && this.elements) {
    return getTupleType(this);
  }

  if (this instanceof IntrinsicType && this.name) {
    return getIntrinsicType(this);
  }

  if (this instanceof StringLiteralType && this.value) {
    return getStringLiteralType(this);
  }

  if (this instanceof ReflectionType && this.declaration) {
    return getReflectionType(this.declaration, collapse);
  }

  if (this instanceof DeclarationReflection) {
    return getReflectionType(this, collapse);
  }

  if (this instanceof TypeOperatorType) {
    return getTypeOperatorType(this);
  }

  if (this instanceof QueryType) {
    return getQueryType(this);
  }

  if (this instanceof TypeParameterType) {
    return getTypeParameterType(this);
  }

  if (this instanceof ConditionalType) {
    return getConditionalType(this);
  }

  if (this instanceof IndexedAccessType) {
    return getIndexAccessType(this);
  }

  if (this instanceof UnknownType) {
    return getUnknownType(this);
  }

  if (this instanceof InferredType) {
    return getInferredType(this);
  }

  return this ? escape(this.toString()) : '';
}

function getReflectionType(model: DeclarationReflection, collapse: boolean) {
  if (model.signatures) {
    return collapse ? 'function' : getFunctionType(model.signatures);
  }
  return collapse ? 'object' : getLiteralType(model);
}

function getLiteralType(model: DeclarationReflection) {
  if (model.indexSignature || model.children) {
    let indexSignature = '';
    const declarationIndexSignature = model.indexSignature;
    if (declarationIndexSignature) {
      const key = declarationIndexSignature.parameters
        ? declarationIndexSignature.parameters.map((param) => `[${param.name}:${param.type}]`)
        : '';
      const obj = type.call(declarationIndexSignature.type as Type);
      indexSignature = `${key}: ${obj}; `;
    }
    const types =
      model.children &&
      model.children.map((obj) => {
        return `${obj.name}${obj.flags.isOptional ? '?' : ''}: ${type.call(
          obj.signatures || obj.children ? obj : (obj.type as Type)
        )} ${obj.defaultValue ? `= ${escape(obj.defaultValue)}` : ''}`;
      });
    return `{ ${indexSignature ? indexSignature : ''}${types ? types.join('; ') : ''} }${
      model.defaultValue ? `= ${escape(model.defaultValue)}` : ''
    }`;
  }
  return '{}';
}

export function getFunctionType(modelSignatures: SignatureReflection[]): string {
  const functions = modelSignatures.map((fn) => {
    const typeParams = fn.typeParameters ? `<${fn.typeParameters.map((typeParameter) => typeParameter.name).join(', ')}>` : [];
    const params = fn.parameters
      ? fn.parameters.map((param) => {
          return `${param.flags.isRest ? '...' : ''}${escape(param.name)}${param.flags.isOptional ? '?' : ''}: ${type.call(
            param.type ? param.type : param
          )}`;
        })
      : [];
    const returns = type.call(fn.type as Type);

    return `${typeParams}(${params.join(', ')}) => ${returns}`;
  });
  return functions.join('');
}

function getReferenceType(model: ReferenceType) {
  if (model.reflection || (model.name && model.typeArguments)) {
    const reflection =
      model.reflection && model.reflection.url
        ? [`[${escape(model.reflection.name)}](${MarkdownTheme.HANDLEBARS.helpers.relativeURL(model.reflection.url)})`]
        : [escape(model.name)];
    if (model.typeArguments && model.typeArguments.length > 0) {
      reflection.push(`<${model.typeArguments.map((typeArgument) => `${type.call(typeArgument)}`).join(', ')}>`);
    }
    return reflection.join('');
  }
  return escape(model.name);
}

function getArrayType(model: ArrayType) {
  const arrayType = type.call(model.elementType);
  return model.elementType.type === 'union' ? `(${arrayType})[]` : `${arrayType}[]`;
}

function getUnionType(model: UnionType) {
  return model.types.map((unionType) => type.call(unionType)).join(' | ');
}

function getIntersectionType(model: IntersectionType) {
  return model.types.map((intersectionType) => type.call(intersectionType)).join(' & ');
}

function getTupleType(model: TupleType) {
  return `[${model.elements.map((element) => type.call(element)).join(', ')}]`;
}

function getIntrinsicType(model: IntrinsicType) {
  return escape(model.name);
}

function getStringLiteralType(model: StringLiteralType) {
  return `\\"${escape(model.value)}\\"`;
}

function getTypeOperatorType(model: TypeOperatorType) {
  return `${model.operator} ${type.call(model.target)}`;
}

function getQueryType(model: QueryType) {
  return `*typeof* ${type.call(model.queryType)}`;
}

function getTypeParameterType(model: TypeParameterType) {
  return escape(model.name);
}

function getInferredType(model: InferredType) {
  return `*infer* ${escape(model.name)}`;
}

function getUnknownType(model: UnknownType) {
  return escape(model.name);
}

function getConditionalType(model: ConditionalType) {
  const md: string[] = [];
  if (model.checkType) {
    md.push(type.call(model.checkType));
  }
  md.push('*extends*');
  if (model.extendsType) {
    md.push(type.call(model.extendsType));
  }
  md.push('?');
  if (model.trueType) {
    md.push(type.call(model.trueType));
  }
  md.push(':');
  if (model.falseType) {
    md.push(type.call(model.falseType));
  }
  return md.join(' ');
}

function getIndexAccessType(model: IndexedAccessType) {
  const md: string[] = [];
  if (model.objectType) {
    md.push(type.call(model.objectType));
  }
  if (model.indexType) {
    md.push(`[${type.call(model.indexType)}]`);
  }
  return md.join('');
}
