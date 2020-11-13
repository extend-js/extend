module.exports = {
  preset: 'ts-jest', // Jest配置基础的预设
  rootDir: __dirname, // 根目录
  // 一组变量，在所有测试环境下都可以访问
  globals: {
    __DEV__: true,
    __TEST__: true,
    __VERSION__: require('./package.json').version,
    __BROWSER__: false,
    __GLOBAL__: false,
    __ESM_BUNDLER__: true,
    __ESM_BROWSER__: false,
    __NODE_JS__: true
  },
  // 每个测试文件执行之前运行的模块的路径列表
  setupFilesAfterEnv: ['./tests/jest-start.ts'],
  // Jest应该在其中输出其覆盖文件的目录
  coverageDirectory: 'coverage',
  // 模块使用的文件扩展名数组
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  // 设置识别哪些文件是测试文件
  testMatch: ['**/packages/**/__tests__/**/*.[jt]s?(x)', '**/packages/**/?(*.)+(spec|test).[jt]s?(x)'],
  // testRegex: ['(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$'],
  // 将会忽略的测试文件
  testPathIgnorePatterns: ['/node_modules/'],
  // 监听模式下忽略的测试文件
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
  // 路径别名
  moduleNameMapper: {
    '^@/(.*?)$': '<rootDir>/packages/$1/src',
    'extends-internal': '<rootDir>/packages/internal/src',
    'extends-validator': '<rootDir>/packages/validator/src'
  },
  // 编写覆盖率报告时使用的报告人姓名列表
  coverageReporters: ['html', 'lcov', 'text'],
  // 指示一组应为其收集覆盖率信息的文件。如果文件与指定的glob模式匹配，则即使该文件不存在测试，也将为其收集覆盖率信息，并且在测试套件中从不需要它。
  collectCoverageFrom: ['**/packages/**/src/**/*.ts', '!**/node_modules/**']
};
