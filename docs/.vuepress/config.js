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
        text: '开发基础',
        link: '/dev-infrastructure',
      },
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
          { text: 'Netty', link: '/java-framework/netty' },
        ],
      },
      {
        text: '云原生',
        children: [
          { text: 'Docker', link: '/cloud-native/docker' },
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
    sidebarDepth: 3,
    sidebar: {
      '/dev-infrastructure': [
        {
          text: '开发书籍软件分享',
          link: '/dev-infrastructure/book-and-soft',
        },
        {
          text: '位运算基础',
          link: '/dev-infrastructure/bit-operation',
        },
        {
          text: 'Git 常用操作',
          link: '/dev-infrastructure/git-command',
        },
        {
          text: 'Nginx 入门教程',
          link: '/dev-infrastructure/nginx-base',
        },
        {
          text: '手写常用的负载均衡算法',
          link: '/dev-infrastructure/loadbalance',
        },
      ],
      '/java/': [
        {
          text: 'Java',
          children: [
            {
              text: 'Java 并发',
              link: '/java/concurrent',
              children: [
                {
                  text: 'ArrayBlockingQueue 源码解析',
                  link: '/java/concurrent/ArrayBlockingQueue-Source.md',
                },

                {
                  text: '造火箭从 synchronized 开始',
                  link: '/java/concurrent/synchronized.md',
                },
              ],
            },
            {
              text: 'Java 工具类',
              link: '/java/toolkit',
              children: [
                {
                  text: 'BatchUtils 批处理',
                  link: '/java/toolkit/BatchUtils.md',
                },
                {
                  text: 'DateConvertor 时间转换',
                  link: '/java/toolkit/DateConvertor.md',
                },
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
            {
              text: 'Mybatis',
              link: '/java-framework/mybatis',
              children: [
                {
                  text: 'Mybatis 日志打印',
                  link: '/java-framework/mybatis/Mybatis-Logger',
                },
              ],
            },
            {
              text: 'Netty',
              link: '/java-framework/netty',
              children: [
                {
                  text: 'Java 网络编程的演进史和 epoll',
                  link: '/java-framework/netty/Java-network-and-epoll',
                },
                {
                  text: 'Netty 如何解决 NIO 100% CPU',
                  link: '/java-framework/netty/netty-nio-100-cpu',
                },
                {
                  text: 'Netty 自定义协议实战',
                  link: '/java-framework/netty/netty-custom-protocol',
                },
              ],
            },
          ],
        },
      ],
      '/linux': [
        {
          text: 'Linux',
          children: [
            {
              text: 'Linux 简单有趣的命令',
              link: '/linux/linux-simple-comand',
            },
            {
              text: 'Linux 通用 jar 启动脚本',
              link: '/linux/linux-jar-start',
            },
          ],
        },
      ],
      '/mysql': [
        {
          text: 'Mysql',
          children: [
            {
              text: 'Mysql-安装总结教程',
              link: '/mysql/mysql-install',
            },
          ],
        },
      ],
      '/cloud-native/': [
        {
          text: '云原生',
          children: [
            {
              text: 'Docker',
              link: '/cloud-native/docker',
              children: [
                {
                  text: 'Docker 基础',
                  link: '/cloud-native/docker/docker-base',
                },
              ],
            },
            {
              text: 'Kubernetes',
              link: '/cloud-native/k8s',
              children: [
                {
                  text: 'Macos-minikube',
                  link: '/cloud-native/k8s/Macos-minikube',
                },
                {
                  text: 'Job与CronJob',
                  link: '/cloud-native/k8s/Job-and-CronJob',
                },
              ],
            },
          ],
        },
      ],
    },
  }),
}
