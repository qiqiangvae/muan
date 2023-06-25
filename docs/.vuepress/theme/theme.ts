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
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  fullscreen: true,
  iconAssets: "//at.alicdn.com/t/c/font_3689474_0cnr8109w3s.css",
  logo: "/logo.png",
  repo: "https://github.com/qiqiangvae/muan",
  docsRepo: "https://github.com/qiqiangvae/muan",
  docsBranch: "main",
  docsDir: "/docs",
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
      imgSize: true,
      katex: true,
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
      tabs: true,
      vuePlayground: true,
      include: {
        resolvePath: (file) => {
          if (file.startsWith("@document")) {
            return file.replace("@document", __dirname + "/../document");
          }
          return file;
        },
      },
    }
  },
});
