import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme/theme.js";

export default defineUserConfig({
  dest: "./dist",
  temp: "./.temp",
  cache: "./.cache",
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "作草分茶",
      description: "作草分茶的生活和技术的记录",
    },
  },
  theme,
  shouldPrefetch: false,
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
