import { getTag } from '../src/index';

const obj = {};
Object.defineProperty(obj, Symbol.toStringTag, { value: 'test' });

const obj2 = {};
obj2[Symbol.toStringTag] = 'test';

class ValidatorClass {
  get [Symbol.toStringTag]() {
    return 'test';
  }
}

describe('getTag', () => {
  it('常规测试', () => {
    expect(getTag({})).toBe('Object');
    expect(getTag(null)).toBe('Null');
    expect(getTag(void 0)).toBe('Undefined');
    expect(getTag(NaN)).toBe('Number');
    expect(getTag(obj)).toBe('Test');
    expect(getTag(obj2)).toBe('Object');
    expect(getTag(new ValidatorClass())).toBe('Test');
  });
});
