import {navbar} from "vuepress-theme-hope";

export const myNavbar = navbar([
    {text: "首页", link: "/", icon: "shouye"},
    {text: "开发技术", icon: "ruanjiankaifabao", link: "/dev/271d86", activeMatch: "^/dev"},
    {text: "Java", icon: "java", link: "/java/toolUsage/79030a/", activeMatch: "^/java"},
    {text: "云原生", icon: "kubernetes", link: "/cloudNative/", activeMatch: "^/cloudNative"},
    {text: "Linux", icon: "linux", link: "/linux/db53d7", activeMatch: "^/linux"},
    {text: "中间件", icon: "zhongjianjian", link: "/middleware/", activeMatch: "^/middleware"},
    {text: "学习笔记", icon: "note", link: "/note/systemArchitecture/hardware/", activeMatch: "^/note"},
]);
