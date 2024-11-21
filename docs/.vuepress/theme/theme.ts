import { hopeTheme } from "vuepress-theme-hope";
import { myNavbar } from "./navbar";
import { mySidebar } from "./sidebar";
import { encrypt } from "./encrypt";

export default hopeTheme({
  hostname: "https://qiqiang.online",
  author: {
    name: "作草分茶",
    url: "https://qiqiang.online",
  },
  print: false,
  themeColor: true,
  fullscreen: true,
  iconAssets: "//at.alicdn.com/t/c/font_3689474_0cnr8109w3s.css",
  logo: "/logo.png",
  repo: "https://github.com/qiqiangvae/muan",
  docsRepo: "https://github.com/qiqiangvae/muan",
  docsBranch: "main",
  docsDir: "/docs",
  headerDepth: 4,
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  sidebarSorter: "filename",
  locales: {
    "/": {
      navbar: myNavbar,
      sidebar: mySidebar,
      footer: "轻拭沾衣新寒雨，江湖何处是故人",
      displayFooter: true,
      metaLocales: {
        editLink: "编辑该文档",
      },
    },
  },
  encrypt: encrypt,
  plugins: {
    shiki: { lineNumbers: false },
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      demo: true,
      echarts: true,
      gfm: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      vuePlayground: true,
      include: {
        resolvePath: (file) => {
          if (file.startsWith("@document")) {
            return file.replace("@document", __dirname + "/../document");
          }
          return file;
        },
      },
    },
  },
});
