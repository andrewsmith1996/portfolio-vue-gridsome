
<template>
  <div class="blog-content" v-if="blogLoaded">
    <h2>Latest from my blog</h2>
    <a href="https://thisdeveloperslife.wordpress.com/" target="_blank" class="blog-link">thisdeveloperslife.wordpress.com</a>
    <article id="blog-wrapper">
      <h4><strong><a :href=url>{{ title }}</a></strong></h4>
      <span>Posted on {{ postDate }}</span>
      <p>{{ intro }}</p>
      <a :href="url" target="_blank">read more</a>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import axios from 'axios';
import * as moment from 'moment';

@Component
export default class BlogPreview extends Vue {
  url!: string;
  title!: string;
  intro!: string;
  postDate!: string;
  blogLoaded: boolean = false;

  async mounted() {
     try {
        let response = await axios.get('https://public-api.wordpress.com/rest/v1.1/sites/117679029/posts/');

        const data = response.data;
        this.postDate = moment(data.posts[0].date).format('MMMM Do YYYY, h:mma');
        
        this.title = data.posts[0].title.replace(/<\/?[^>]+>/gi, '').replace(/&amp;/g, '&');
        this.url = data.posts[0].URL;
        this.intro = data.posts[0].excerpt.replace(/<\/?[^>]+>/gi, '').replace(/&amp;/g, '&').replace('[&hellip;]', '...');
        this.blogLoaded = true;

     } catch (e) {
       console.log(e);
     }
  }
}
</script>

<style lang="scss">

</style>