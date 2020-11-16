const { description } = require('../../package')

module.exports = {
  base: '/azure-serverless-tradingview/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Azure Serverless Tradingview Bot Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'A trading bot that Azure serverless functions to parse alerts from your Tradingview charts and place orders with Binance using thier REST api.',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   * https://github.com/francoischalifour/medium-zoom#options
   * https://medium-zoom.francoischalifour.com/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
