export function escape(str: string): string {
  return str.replace(/>/g, '\\>').replace(/_/g, '\\_').replace(/`/g, '\\`').replace(/\|/g, '\\|');
}
