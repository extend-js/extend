const path = require('path');
const rootDir = path.resolve(__dirname, '../../'); // 存放包的文件夹
const resolve = (...args) => path.resolve(rootDir, ...args); // 存放包的文件夹
const packageJson = require(resolve('./package.json'));
const sidebar = require("./config/sidebar.js");
const nav = require("./config/nav.js");

module.exports = {
  title: packageJson.name, // 网站的标题
  description: packageJson.description, // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  base: '/', // 部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。
  dest: 'dist', // 指定 build 的输出目录
  port: 10320,
  head: [['link', { rel: 'icon', href: `/logo.png` }]],
  // 为当前的主题提供一些配置
  themeConfig: {
    nav,
    sidebar
  },
  chainWebpack: (config) => {
    // 配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('public', path.resolve(__dirname, "public"))
  }
};
