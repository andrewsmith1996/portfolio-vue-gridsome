
<template>
  <div class="contact__blog">
    <h2 class="contact__blog-preview__top-title">Latest from my blog</h2>
    <a href="https://thisdeveloperslife.wordpress.com/" target="_blank" class="contact__blog-preview__url">thisdeveloperslife.wordpress.com</a>
    <carousel v-if="blogPosts">
      <slide v-for="(post, index) in blogPosts" :key="index" class="contact__blog-preview">
        <article>
          <h4 class="contact__blog-preview__title"><strong><a :href=post.url>{{ post.title }}</a></strong></h4>
          <span>Posted on {{ post.postDate }}</span>
          <p class="contact__blog-preview__content">{{ post.intro }}</p>
          <a :href="post.url" target="_blank">read more</a>
        </article>
      </slide>
    </carousel>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import axios from 'axios';
import * as moment from 'moment';
const { Carousel, Slide }  = require('vue-carousel');

@Component({
   components: {
      Carousel,
      Slide
   }
})
export default class BlogPreview extends Vue {
  blogPosts: Array<any> = [];
  async mounted() {
     try {
        let response = await axios.get('https://public-api.wordpress.com/rest/v1.1/sites/117679029/posts/');
        this.blogPosts = response.data.posts.map((post: any) => {
          return {
            title: post.title.replace(/<\/?[^>]+>/gi, '').replace(/&amp;/g, '&'),
            url: post.URL,
            intro: post.excerpt.replace(/<\/?[^>]+>/gi, '').replace(/&amp;/g, '&').replace('[&hellip;]', '...'),
            postDate: moment(post.date).format('MMMM Do YYYY, h:mma')
          }
        });
     } catch (e) {
       console.log(e);
     }
  }
}
</script>

<style lang="scss">

</style>