import { defineNotesConfig } from "vuepress-theme-plume";

const notesConfig = defineNotesConfig({
  dir: "/notes/",
  link: "/",
  notes: [
    {
      dir: "dev",
      link: "/dev/",
      sidebar: "auto",
    },
    {
      dir: "java",
      link: "/java/",
      sidebar: "auto",
    },
    {
      dir: "linux",
      link: "/linux/",
      sidebar: "auto",
    },
    {
      dir: "advanced",
      link: "/advanced/",
      sidebar: "auto",
    },
    {
      dir: "middleware",
      link: "/middleware/",
      sidebar: "auto",
    },
    {
      dir: "note",
      link: "/note/",
      sidebar: "auto",
    },
  ],
});
export default notesConfig;