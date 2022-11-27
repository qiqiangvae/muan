import {hopeTheme} from "vuepress-theme-hope";
import {myNavbar} from "./navbar";
import {mySidebar} from "./sidebar";
import {encrypt} from "./encrypt";

export default hopeTheme({
    hostname: "https://qiqiang.online",
    author: {
        name: "作草分茶",
        url: "https://qiqiang.online",
    },
    iconAssets: "//at.alicdn.com/t/c/font_3689474_63q8mo3tqsv.css",
    logo: "/logo.png",
    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
    locales: {
        "/": {
            navbar: myNavbar,
            sidebar: mySidebar,
            footer: "轻拭沾衣新寒雨，江湖何处是故人",
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
            include: {
                getPath: (file) => {
                    if (file.startsWith("@document")) {
                        return file.replace("@document", __dirname + "/../document");
                    }
                    return file;
                },
            },
        }
    },
});
