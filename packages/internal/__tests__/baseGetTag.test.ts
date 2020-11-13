import { baseGetTag } from '../src/index';
const obj = {};
Object.defineProperty(obj, Symbol.toStringTag, { value: 'test' });
const obj2 = {};
obj2[Symbol.toStringTag] = 'test';
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return 'test';
  }
}

describe('baseGetTag', () => {
  it('常规测试', () => {
    expect(baseGetTag({})).toBe('Object');
    expect(baseGetTag(null)).toBe('Null');
    expect(baseGetTag(void 0)).toBe('Undefined');
    expect(baseGetTag(NaN)).toBe('Number');
    expect(baseGetTag(obj)).toBe('Test');
    expect(baseGetTag(obj2)).toBe('Object');
    expect(baseGetTag(new ValidatorClass())).toBe('Test');
  });
});
