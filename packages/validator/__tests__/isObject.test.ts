import { isObject } from '../src/index';
class MyObject {}

describe('isObject', () => {
  it('常规测试', () => {
    expect(isObject({})).toBeTruthy();
    expect(isObject([1, 2, 3])).toBeTruthy();
    expect(isObject(function fn() {})).toBeTruthy();
    expect(isObject(null)).toBeFalsy();
    expect(isObject(0)).toBeFalsy();
    expect(isObject(new MyObject())).toBeTruthy();
  });
});
