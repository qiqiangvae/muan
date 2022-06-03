const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
  lang: 'zh-CN',
  title: '作草分茶',
  description: '作草分茶的博客分享',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
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
        text: 'Java',
        children: [
          {
            text: 'Java 并发',
            link: '/java/concurrent',
          },
          {
            text: 'Java 工具类',
            link: '/java/toolkit',
          },
        ],
      },
      {
        text: 'Java 框架',
        children: [
          { text: 'Spring', link: '/java-framework/spring' },
          { text: 'Mybatis', link: '/java-framework/mybatis' },
        ],
      },
      {
        text: '云原生',
        children: [
          { text: 'Docker 基础', link: '/cloud-native/docker' },
          { text: 'Kubernetes', link: '/cloud-native/k8s' },
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
              text: 'Java 并发',
              link: '/java/concurrent',
              children: [
                {
                  text: 'ArrayBlockingQueue',
                  link: '/java/concurrent/ArrayBlockingQueue-Source.md',
                },

                {
                  text: 'synchronized',
                  link: '/java/concurrent/synchronized.md',
                },
              ],
            },
            {
              text: 'Java 工具类',
              link: '/java/toolkit',
              children: [
                { text: 'BatchUtils', link: '/java/toolkit/BatchUtils.md' },
              ],
            },
          ],
        },
      ],
      '/java-framework': [
        {
          text: 'Java 框架',
          children: [
            { text: 'Spring', link: '/java-framework/spring' },
            { text: 'Mybatis', link: '/java-framework/mybatis' },
          ],
        },
      ],
      '/cloud-native/': [
        {
          text: '云原生',
          children: [
            {
              text: 'docker',
              link: '/cloud-native/docker',
              children: [{ text: 'Docker', link: '/cloud-native/docker' }],
            },
            {
              text: 'K8S',
              link: '/cloud-native/k8s',
              children: [
                {
                  text: 'Macos-minikube',
                  link: '/cloud-native/k8s/Macos-minikube',
                },
              ],
            },
          ],
        },
      ],
    },
  }),
}
