const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
  lang: 'zh-CN',
  title: '作草分茶',
  description: '作草分茶的博客分享',
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
  theme: defaultTheme({
    logo: '/images/logo.png',
    navbar: [
      {
        text: 'Java 基础',
        children: [
          {
            text: 'ArrayBlockingQueue',
            link: '/java/ArrayBlockingQueue-Source.md',
          },
          {
            text: 'BatchUtils 工具类',
            link: '/java/BatchUtils.md',
          },
          {
            text: 'synchronized',
            link: '/java/synchronized.md',
          },
        ],
      },
      {
        text: '云原生',
        children: [
          { text: 'Macos-minikube', link: '/cloud-native/Macos-minikube' },
          { text: 'Docker 基础', link: '/cloud-native/docker' },
        ],
      },
      {
        text: 'Linux',
        link: '/linux',
      },
      {
        text: 'Mysql',
        link: '/mysql',
      },
    ],
    sidebar: {
      '/java/': [
        {
          text: 'Java',
          children: [
            {
              text: 'ArrayBlockingQueue',
              link: '/java/ArrayBlockingQueue-Source.md',
            },
            {
              text: 'BatchUtils 工具类',
              link: '/java/BatchUtils.md',
            },
            {
              text: 'synchronized',
              link: '/java/synchronized.md',
            },
          ],
        },
      ],
      '/cloud-native/': [
        {
          text: '云原生',
          children: [
            { text: 'Macos-minikube', link: '/cloud-native/Macos-minikube' },
            { text: 'Docker 基础', link: '/cloud-native/docker' },
          ],
        },
      ],
    },
  }),
}
