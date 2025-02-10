import { defineNavbarConfig } from "vuepress-theme-plume";

const navbarConfig = defineNavbarConfig([
  { text: "首页", icon: "solar:home-linear", link: "/" },
  {
    text: "开发技术",
    icon: "material-symbols:logo-dev-outline",
    link: "/dev/soft-and-web/",
  },
  {
    text: "Java",
    icon: "hugeicons:java",
    link: "/java/toolUsage/79030a/",
  },
  {
    text: "云原生",
    icon: "devicon-plain:docker",
    link: "/cloudNative/d3cfc7/",
  },
  {
    text: "大模型",
    icon: "hugeicons:chat-gpt",
    link: "/llm/start/",
  },
  {
    text: "Linux",
    icon: "uil:linux",
    link: "/linux/db53d7/",
  },
  {
    text: "中间件",
    icon: "mdi:cloud-outline",
    link: "/middleware/",
  },
  {
    text: "学习笔记",
    icon: "wpf:note",
    link: "/note/systemArchitecture/hardware/",
  },
]);

export default navbarConfig;
