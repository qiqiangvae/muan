import { viteBundler } from "@vuepress/bundler-vite";
import { plumeTheme } from "vuepress-theme-plume";
import { defineUserConfig } from "vuepress";
import notesConfig from "./notes";
import navbarConfig from "./navbar";

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
  theme: plumeTheme({
    blog: false,
    plugins: {
      shiki: {
        theme: { light: "vitesse-light", dark: "vitesse-dark" },
        languages: [
          "bash",
          "shell",
          "python",
          "java",
          "nginx",
          "dockerfile",
          "yaml",
          "xml",
          "sql",
          "properties",
        ],
      },
    },
    notes: notesConfig,
    navbar: navbarConfig,
  }),
  shouldPrefetch: false,
  bundler: viteBundler(),
});
