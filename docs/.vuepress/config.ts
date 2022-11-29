import {defineUserConfig} from "vuepress";
import {searchProPlugin} from "vuepress-plugin-search-pro";
import theme from "./theme/theme.js";


export default defineUserConfig({
    dest: './dist',
    temp: './.temp',
    cache: './.cache',
    base: "/",
    locales: {
        "/": {
            lang: "en-US",
            title: "作草分茶",
            description: "作草分茶的生活和技术的记录",
        }
    },
    theme,
    shouldPrefetch: false,
    plugins: [
        searchProPlugin({
            indexContent: true,
            locales: {
                '/': {
                    placeholder: '搜索一下',
                }
            },
        })
    ],
    markdown: {
        code: {
            // 禁用行号
            lineNumbers: false
        }
    }
});
