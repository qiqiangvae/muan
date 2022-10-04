import {navbar} from "vuepress-theme-hope";

export const enNavbar = navbar([
    {text: "首页", link: "/", icon: "home"},
    {text: "开发技术", icon: "discover", link: "/dev/271d86"},
    {text: "Java", icon: "hot", link: "/java/", activeMatch: "/java"},
    {text: "云原生", icon: "hot", link: "/cloudNative/", activeMatch: "/cloudNative"},
    {text: "Linux", icon: "hot", link: "/linux/db53d7"},
    {text: "中间件", icon: "hot", link: "/middleware/", activeMatch: "/middleware"},
    {text: "作草分茶的生活", icon: "hot", link: "/life/9c5865"},
]);
