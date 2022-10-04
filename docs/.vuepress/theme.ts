import {hopeTheme} from "vuepress-theme-hope";
import {enNavbar} from "./navbar";
import {enSidebar} from "./sidebar";
import {encrypt} from "./encrypt";

export default hopeTheme({
    hostname: "https://qiqiang.online",

    author: {
        name: "作草分茶",
        url: "https://qiqiang.online",
    },
    iconAssets: "iconfont",
    logo: "/logo.png",
    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
    locales: {
        "/": {
            navbar: enNavbar,
            sidebar: enSidebar,
            footer: "Default footer",
            displayFooter: true,
            metaLocales: {
                editLink: "Edit this page on GitHub",
            },
        },
    },
    encrypt: encrypt,
    plugins: {
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            container: true,
            demo: true,
            echarts: true,
            flowchart: true,
            gfm: true,
            imageSize: true,
            include: true,
            katex: true,
            lazyLoad: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            stylize: [
                {
                    matcher: "Recommanded",
                    replacer: ({tag}) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: {type: "tip"},
                                content: "Recommanded",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vpre: true,
            vuePlayground: true,
        }
    },
});
