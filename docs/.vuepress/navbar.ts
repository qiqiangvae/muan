import { defineNavbarConfig } from "vuepress-theme-plume";

const navbarConfig = defineNavbarConfig([
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
]);

export default navbarConfig;