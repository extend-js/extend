import { isObjectPlain } from '../src/index';
class Foo {}

describe('isObjectPlain', () => {
  it('常规测试', () => {
    expect(isObjectPlain([1, 2, 3])).toBeFalsy();
    expect(isObjectPlain({ x: 0, y: 0 })).toBeTruthy();
    expect(isObjectPlain(Object.create(null))).toBeTruthy();
    expect(isObjectPlain(new Foo())).toBeFalsy();
  });
});
