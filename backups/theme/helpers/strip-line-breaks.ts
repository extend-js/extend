export function stripLineBreaks(str: string): string {
  return str ? str.replace(/\n/g, ' ').replace(/\r/g, ' ').replace(/\t/g, ' ') : '';
}
