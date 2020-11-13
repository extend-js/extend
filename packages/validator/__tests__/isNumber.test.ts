import { isNumber } from '../src/index';

describe('isNumber', () => {
  it('常规测试', () => {
    expect(isNumber(3)).toBeTruthy();
    expect(isNumber(Number.MIN_VALUE)).toBeTruthy();
    expect(isNumber(Infinity)).toBeTruthy();
    expect(isNumber(NaN)).toBeTruthy();
    expect(isNumber(new Number(2))).toBeTruthy();
    expect(isNumber('3')).toBeFalsy();
  });
});
