module.exports = {
  '/guide': [
    {
      title: '指南',
      collapsable: false,
      children: ['/guide/introduction', '/guide/install', '/guide/commitConvention', '/guide/repo', '/guide/pull']
    }
  ],
  '/api': [
    {
      title: '算法基础',
      collapsable: false,
      children: ['/api/_extend_validator_d_']
    }
  ],
  '/basic': [
    {
      title: '算法基础',
      collapsable: false,
      children: [
        '/basic/insertion',
        '/basic/insertion-exercise',
        '/basic/analyse',
        '/basic/analyse-exercise',
        '/basic/merge',
        '/basic/merge-exercise'
      ]
    },
    {
      title: '函数的增长',
      collapsable: false,
      children: ['/basic/symbol', '/basic/symbol-exercise', '/basic/common', '/basic/common-exercise']
    }
  ]
};
