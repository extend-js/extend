import { isObjectHost } from '../src/index';

describe('isHostObject', () => {
  it('常规测试', () => {
    expect(isObjectHost(window)).toBeFalsy();
    expect(isObjectHost(document)).toBeFalsy();
    expect(isObjectHost({})).toBeFalsy();
    expect(isObjectHost(Object)).toBeFalsy();
  });
});
