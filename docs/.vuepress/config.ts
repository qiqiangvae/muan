import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import {searchPlugin} from "@vuepress/plugin-search";


export default defineUserConfig({
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
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                }
            },
        }),
    ]
});
