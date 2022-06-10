const plugins = require('./configs/plugins.js');
const themeConfig = require('./configs/themeConfig.js');

module.exports = {
    title: '作草分茶',// 设置网站标题
    description: '作草分茶的自嗨',
    base: '/',   // 设置站点根路径
    dest: './dist',  // 设置输出目录
    markdown: {
        lineNumbers: true
    },
    port: 2238,
    head: [
        ['link', {
            rel: 'icon',
            type: "image/png",
            href: 'https://qiqiang.oss-cn-hangzhou.aliyuncs.com/muan/a8ifu-xqa6y-001.ico',
        }],
    ],
    plugins,
    theme: 'vdoing',
    themeConfig,
}