import {sidebar} from "vuepress-theme-hope";

export const mySidebar = sidebar({
    "/dev/": "structure",
    "/cloudNative/": [{
        text: "docker",
        collapsable: true,
        prefix: "docker/",
        children: "structure",
    }, {
        text: "k8s",
        collapsable: true,
        prefix: "k8s/",
        children: "structure",
    },],
    "/java/": [{
        text: "并发",
        collapsable: true,
        prefix: "concurrency/",
        children: "structure",
    }, {
        text: "小工具",
        collapsable: true,
        prefix: "kits/",
        children: "structure",
    }, {
        text: "使用工具",
        collapsable: true,
        prefix: "toolUsage/",
        children: "structure",
    }, {
        text: "Jvm",
        collapsable: true,
        prefix: "jvm/",
        children: "structure",
    }],
    "/linux/": "structure",
    "/middleware/": [{
        text: "Mysql",
        collapsable: true,
        prefix: "mysql/",
        children: "structure",
    }, {
        text: "Nginx",
        collapsable: true,
        prefix: "nginx/",
        children: "structure",
    }, {
        text: "Redis",
        collapsable: true,
        prefix: "redis/",
        children: "structure",
    }],
    "/life/": "structure"
});
