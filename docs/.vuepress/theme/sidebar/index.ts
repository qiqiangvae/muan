import {sidebar} from "vuepress-theme-hope";

export const mySidebar = sidebar({
    "/dev/": "structure",
    "/cloudNative/": [{
        text: "docker",
        prefix: "docker/",
        children: "structure",
    }, {
        text: "kubernetes",
        prefix: "k8s/",
        children: "structure",
    },],
    "/java/": [{
        text: "并发",
        prefix: "concurrency/",
        children: "structure",
    }, {
        text: "小工具",
        prefix: "kits/",
        children: "structure",
    }, {
        text: "使用工具",
        prefix: "toolUsage/",
        children: "structure",
    }, {
        text: "Jvm",
        prefix: "jvm/",
        children: "structure",
    }],
    "/linux/": "structure",
    "/middleware/": [{
        text: "Mysql",
        prefix: "mysql/",
        children: "structure",
    }, {
        text: "Nginx",
        prefix: "nginx/",
        children: "structure",
    }, {
        text: "Redis",
        prefix: "redis/",
        children: "structure",
    }],
    "/life/": "structure"
});
