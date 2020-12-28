const path = require('path');
const { resolveRoot } = require('./utils');
const packageJson = require(resolveRoot('./package.json'));
const sidebar = require('./config/sidebar.js');
const nav = require('./config/nav.js');
// const tsdoc = require('./config/tsdoc.js');

module.exports = {
  title: packageJson.name, // 网站的标题
  description: packageJson.description, // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  base: '/', // 部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。
  dest: 'dist', // 指定 build 的输出目录
  host: '0.0.0.0', // 主机名
  port: 10320, // 指定端口号
  // head 内容
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  markdown: {
    lineNumbers: false,
    anchor: {
      permalink: true,
      permalinkBefore: false,
      permalinkSymbol: '#'
    }
  },
  theme: 'antdocs',
  // 为当前的主题提供一些配置
  themeConfig: {
    backToTop: true,
    search: true,
    searchMaxSuggestions: 10,
    smoothScroll: true, // 启用页面滚动效果
    repo: 'https://github.com/extend-js/extend', // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    lastUpdated: '上次更新',
    dateOptions: {
      hour12: false
    },
    docsDir: 'docs', // 假如文档不是放在仓库的根目录下：
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    nav,
    sidebar
  },
  // 插件
  plugins: [
    'vuepress-plugin-nprogress',
    [
      'sitemap',
      {
        // hostname: 'https://pake.web.id'
      }
    ],
    [
      'vuepress-plugin-code-copy',
      {
        // selector: '.language-js',
        align: 'bottom',
        color: '#27b1ff',
        backgroundTransition: true,
        backgroundColor: '#0075b8',
        successText: '复制成功',
        staticIcon: false
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新'
        }
      }
    ]
  ],
  // 打包配置
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname)).set('packages', resolveRoot('./packages'));
    config.module
      .rule('eslint')
      .pre()
      .exclude.add([/node_modules/, /docs/])
      .add(path.resolve(__dirname, '../../src'))
      .end()
      .test(/\.js$/)
      .use('eslint-loader')
      .loader('eslint-loader')
      .options({
        extensions: ['.js'],
        cache: true,
        emitWarning: true,
        emitError: true,
        formatter: require('eslint/lib/cli-engine/formatters/codeframe')
      });
  }
};
