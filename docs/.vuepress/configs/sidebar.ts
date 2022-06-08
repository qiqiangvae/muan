import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/dev-infrastructure': [
    '/dev-infrastructure/book-and-soft',
    '/dev-infrastructure/bit-operation',
    '/dev-infrastructure/git-command',
    '/dev-infrastructure/loadbalance',
  ],
  '/java/': [
    {
      text: 'Java',
      children: [
        {
          text: 'Java 并发',
          link: '/java/concurrent',
          children: [
            '/java/concurrent/ArrayBlockingQueue-Source',
            '/java/concurrent/synchronized'
          ],
        },
        {
          text: 'Java 工具类',
          link: '/java/toolkit',
          children: [
            '/java/toolkit/OptionalCollection',
            '/java/toolkit/BatchUtils',
            '/java/toolkit/DateConvertor',
            '/java/toolkit/SmartDateUtils',
          ],
        },
      ],
    },
  ],
  '/java-framework': [
    {
      text: 'Java 框架',
      children: [
        '/java-framework/spring',
        {
          text: 'Mybatis',
          link: '/java-framework/mybatis',
          children: [
            '/java-framework/mybatis/Mybatis-Logger'
          ],
        },
        {
          text: 'Netty',
          link: '/java-framework/netty',
          children: [
            '/java-framework/netty/Java-network-and-epoll',
            '/java-framework/netty/netty-nio-100-cpu',
            '/java-framework/netty/netty-custom-protocol',
          ],
        },
      ],
    },
  ],
  '/linux': [
    {
      text: 'Linux',
      children: [
        '/linux/linux-simple-comand',
        '/linux/linux-jar-start',
      ],
    },
  ],
  '/middleware': [
    {
      text: 'Mysql',
      children: [
        '/middleware/mysql/mysql-install',
        '/middleware/mysql/mysq-rr-lock-rule',
      ],
    },
    {
      text: 'Redis',
      children: [
        '/middleware/redis/redis-all-in-one',
      ],
    },
    {
      text: 'Nginx',
      children: [
        '/middleware/nginx/nginx-base',
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
            '/cloud-native/docker/docker-base',
          ],
        },
        {
          text: 'Kubernetes',
          link: '/cloud-native/k8s',
          children: [
            '/cloud-native/k8s/Macos-minikube',
            '/cloud-native/k8s/Job-and-CronJob',
          ],
        },
      ],
    },
  ],
}