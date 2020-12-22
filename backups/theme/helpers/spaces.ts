export function spaces(length: number): string {
  return `!spaces${[...Array(length)].map(() => ' ').join('')}`;
}
