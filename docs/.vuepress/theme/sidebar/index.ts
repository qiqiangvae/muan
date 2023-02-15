import {sidebar} from "vuepress-theme-hope";

export const mySidebar = sidebar({
    "/dev/": "structure",
    "/cloudNative/": [{
        text: "docker",
        icon: "docker",
        prefix: "docker/",
        children: "structure",
    }, {
        text: "kubernetes",
        icon: "kubernetes",
        prefix: "k8s/",
        children: "structure",
    },],
    "/java/": [{
        text: "并发",
        icon: "yidongyunkongzhitaiicon41",
        prefix: "concurrency/",
        children: "structure",
    }, {
        text: "小工具",
        icon: "gongju",
        prefix: "kits/",
        children: "structure",
    }, {
        text: "使用工具",
        icon: "tools-hardware",
        prefix: "toolUsage/",
        children: "structure",
    }, {
        text: "网络编程",
        icon: "network",
        prefix: "network/",
        children: "structure",
    }, {
        text: "spring",
        icon: "spring",
        prefix: "spring/",
        children: "structure",
    }, {
        text: "Jvm",
        icon: "java",
        prefix: "jvm/",
        children: "structure",
    }],
    "/linux/": "structure",
    "/middleware/": [{
        text: "Mysql",
        icon: "mysql",
        prefix: "mysql/",
        children: "structure",
    }, {
        text: "Nginx",
        icon: "nginx",
        prefix: "nginx/",
        children: "structure",
    }, {
        text: "Redis",
        icon: "Redis",
        prefix: "redis/",
        children: "structure",
    }],
    "/life/": "structure"
});
