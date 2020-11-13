import { isObjectLike } from '../src/index';
class MyObject {}

describe('isObjectLike', () => {
  it('常规测试', () => {
    expect(isObjectLike({})).toBeTruthy();
    expect(isObjectLike([1, 2, 3])).toBeTruthy();
    expect(isObjectLike(function fn() {})).toBeFalsy();
    expect(isObjectLike(null)).toBeFalsy();
    expect(isObjectLike(void 0)).toBeFalsy();
    expect(isObjectLike(new MyObject())).toBeTruthy();
    expect(isObjectLike(MyObject)).toBeFalsy();
  });
});
