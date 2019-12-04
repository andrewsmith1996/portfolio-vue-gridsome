declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

interface BlogPost {
  title: string;
  url: string;
  intro: string;
  postDate: string;
}