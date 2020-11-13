import { isNil } from '../src/index';

describe('isNil', () => {
  it('常规测试', () => {
    expect(isNil(null)).toBeTruthy();
    expect(isNil(void 0)).toBeTruthy();
    expect(isNil(NaN)).toBeFalsy();
  });
});
