import { baseIsNative } from '../src/index';

describe('baseIsNative', () => {
  it('常规测试', () => {
    expect(baseIsNative(Array.prototype.push)).toBeTruthy();
    expect(baseIsNative(function fn() {})).toBeFalsy();
  });
});
