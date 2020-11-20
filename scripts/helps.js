const chalk = require('chalk'); // node终端样式库
const art = require('ascii-art'); // 字符串生成工具

const { resolveRoot } = require('./utils');

const pkg = require(resolveRoot('./package.json')); // 主 package.json 文件

module.exports = () => {
  return new Promise((resolve) => {
    // 生成字符画
    art.font(pkg.name, 'Doom', (data) => {
      console.log(chalk.cyan('-'.repeat(104)));
      console.log(chalk.cyan(data));
      console.log(chalk.cyan('-'.repeat(104)));
      console.log();
      console.log('Usage: npm run <command>');
      console.log();
      console.log('A good JavaScript library scaffold.');
      console.log();
      console.log('Commands:');
      console.log('  npm run init, initialize this scaffold.');
      console.log('  npm run build, output bundle files of three different types(UMD, ES6, CommonJs).');
      console.log('  npm run dev, select a type of output to watch and rebuild on change.');
      console.log('  npm run lint, lint your code with ESLint/TSLint.');
      console.log('  npm run lint:fix, lint your code and fix errors and warnings that can be auto-fixed.');
      console.log('  npm run doc, generate API documents based on good documentation comments in source code.');
      console.log('  npm run test, test your code with Jest.');
      console.log('  npm run test:coverage, test your code and collect coverage information with Jest.');
      console.log('  npm run help, output usage information.');
      console.log();
      console.log(`See more details at ${chalk.cyan('https://github.com/logan70/jslib-base')}`);
      resolve();
    });
  });
};
