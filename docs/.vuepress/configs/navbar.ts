import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
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
    text: '中间件',
    link: '/middleware',
    children: [
      { text: 'Mysql', link: '/middleware/mysql' },
      { text: 'Redis', link: '/middleware/redis' },
      { text: 'Nginx', link: '/middleware/nginx' },
    ],
  },
]