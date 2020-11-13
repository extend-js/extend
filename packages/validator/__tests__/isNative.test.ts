import { isNative } from '../src/index';

describe('isNative', () => {
  it('常规测试', () => {
    expect(isNative(Array.prototype.push)).toBeTruthy();
    expect(isNative(() => {})).toBeFalsy();
    global['__core-js_shared__'] = {};
    expect(isNative(Array.prototype.push)).toBeTruthy();
  });
});
