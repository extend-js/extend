import { isFunction } from '../src/index';

describe('isFunction', () => {
  it('常规测试', () => {
    expect(isFunction(class Any {})).toBeTruthy();
    expect(isFunction(() => {})).toBeTruthy();
    expect(isFunction(async () => {})).toBeTruthy();
    expect(isFunction(function* Any() {})).toBeTruthy();
    expect(isFunction(Math.round)).toBeTruthy();
    expect(isFunction(/abc/)).toBeFalsy();
    expect(isFunction(null)).toBeFalsy();
  });
});
