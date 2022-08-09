const nav = require("./nav.js");

// Theme Config
module.exports = {
    sidebar: 'structuring', //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
    docsDir: 'docs',
    docsBranch: 'master',
    pageStyle: 'line',
    sidebarDepth: 4,
    lastUpdated: "上次更新",
    // 添加导航栏
    nav,
    // 页脚信息
    footer: {
        createYear: 2022,
        copyrightInfo: '轻拭沾衣新寒雨，江湖何处是故人',
    },

    author: {
        name: "qiqiang",
    },

    category: false, // 是否打开分类功能，默认true
    tag: false, // 是否打开标签功能，默认true
    archive: false, // 是否打开归档功能，默认true
    updateBar: { // 最近更新栏
        showToArticle: false, // 显示到文章页底部，默认true
        moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
};