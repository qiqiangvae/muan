import { viteBundler } from "@vuepress/bundler-vite";
import { plumeTheme } from "vuepress-theme-plume";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  dest: "./dist",
  temp: "./.temp",
  cache: "./.cache",
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "作草分茶",
      description: "作草分茶的生活和技术的记录",
    },
  },
  theme: plumeTheme({
    blog: false,
    notes: {
      dir: "/notes/",
      link: "/",
      notes: [
        {
          dir: "dev",
          link: "/dev/",
          sidebar: "auto",
        },
        {
          dir: "java",
          link: "/java/",
          sidebar: "auto"
        },
        {
          dir: "linux",
          link: "/linux/",
          sidebar: "auto"
        },
        {
          dir: "advancedTechnology",
          link: "/advancedTechnology/",
          sidebar: "auto"
        },
        {
          dir: "middleware",
          link: "/middleware/",
          sidebar: "auto"
        },
        {
          dir: "note",
          link: "/note/",
          sidebar: "auto"
        },
      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "开发技术",
        icon: "ruanjiankaifabao",
        link: "/dev/soft-and-web/",
      },
      {
        text: "Java",
        icon: "java",
        link: "/java/toolUsage/79030a/",
      },
      {
        text: "前沿技术",
        icon: "docker",
        link: "/advancedTechnology/cloudNative/d3cfc7/",
      },
      {
        text: "Linux",
        icon: "linux",
        link: "/linux/db53d7/",
      },
      {
        text: "中间件",
        icon: "zhongjianjian",
        link: "/middleware/",
      },
      {
        text: "学习笔记",
        icon: "note",
        link: "/note/systemArchitecture/hardware/",
      },
    ],
  }),
  shouldPrefetch: false,
  bundler: viteBundler(),
});
