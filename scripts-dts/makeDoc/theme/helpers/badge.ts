import { DeclarationReflection, ParameterReflection } from 'typedoc';
import { Comment } from 'typedoc/dist/lib/models';
import MarkdownTheme from '../theme';

export function badge(this: ParameterReflection | DeclarationReflection): string {
  const comment: Comment | undefined = this.comment;
  if (!comment || !comment.tags) return '';
  const since = comment.tags.find((v) => v.tagName === 'since');
  const text = since && since.text ? MarkdownTheme.HANDLEBARS.helpers.comment.call(since.text) : '';
  return ` <Badge text="${text}"/>`;
}
