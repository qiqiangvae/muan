const { defaultTheme } = require('@vuepress/theme-default')
const { containerPlugin } = require('@vuepress/plugin-container')
// const { searchPlugin } = require('@vuepress/plugin-search')
import pluginFullTextSearch from "vuepress2-plugin-full-text-search";

import { defineUserConfig } from '@vuepress/cli'
import { navbar } from './configs/navbar'
import { sidebar } from './configs/sidebar'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '作草分茶',
  description: '作草分茶的博客分享',
  port: 2238,
  head: [['link', { rel: 'icon', href: '/images/a8ifu-xqa6y-001.ico' }]],
  plugins: [
    //  全文搜索
    [pluginFullTextSearch],
    containerPlugin({
      type: 'tip',
      locales: {
        '/': {
          defaultInfo: '提示',
        },
      },
    }),
  ],
  theme: defaultTheme({
    logo: '/images/logo.png',
    logoDark: '/images/a8ifu-xqa6y-001.ico',
    locales: {
      '/': {
        navbar,
        sidebar,
      },
    },
  }),
})
