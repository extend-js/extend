import 'jest-extended'; // 导入一部分匹配器

/**
 * expect({a:1}).toEqual({a:1})									//判断两个对象是否相等
 * expect(1).not.toBe(2)												//判断不等
 * expect(n).toBeNull(); 												//判断是否为null
 * expect(n).toBeUndefined(); 									//判断是否为undefined
 * expect(n).toBeDefined(); 										//判断结果与toBeUndefined相反
 * expect(n).toBeTruthy(); 											//判断结果为true
 * expect(n).toBeFalsy(); 											//判断结果为false
 * expect(value).toBeGreaterThan(3); 						//大于3
 * expect(value).toBeGreaterThanOrEqual(3.5); 	//大于等于3.5
 * expect(value).toBeLessThan(5); 							//小于5
 * expect(value).toBeLessThanOrEqual(4.5); 			//小于等于4.5
 * expect(value).toBeCloseTo(0.3); 							// 浮点数判断相等
 * expect('Christoph').toMatch(/stop/); 				//正则表达式判断
 * expect(['one','two']).toContain('one'); 			//是否包含对应的值，括号里写上数组、字符串
 * expect(['one','two']).toHaveProperty(keyPath, value); 			//是否有对应的属性
 * function compileAndroidCode() {
 *   throw new ConfigError('you are using the wrong JDK');
 * }
 * test('compiling android goes as expected', () => {
 *   expect(compileAndroidCode).toThrow();
 *   expect(compileAndroidCode).toThrow(ConfigError); //判断抛出异常
 * }）
 */

/**
 * 在每个 test 用例执行前执行
 * 在单个测试文件内，它对每个 test 都有效，如果它放在 describe 内部，那么它只对 describe 内部的 test 用例有效
 */
beforeEach(() => {});

/**
 * 在每个 test 用例执行后执行
 * 同 beforeEach
 */
afterEach(() => {});

/**
 * 在所有 test 用例执行前执行
 * 同 beforeEach
 */
beforeAll(() => {});

/**
 * 在所有 test 用例执行后执行
 * 同 beforeEach
 */
afterAll(() => {});
