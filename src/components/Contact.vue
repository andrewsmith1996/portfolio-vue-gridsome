

<template>
  <section class="contact skills-panel" id="contact-panel">
    <div class="container">
        <div class="row">
          <div class="col-md-4">
              <h2>Say hello</h2> 
              <p class="subtitle">Get in touch</p>
              <SocialLinks />
          </div>
          <div class="col-md-8 col-xs-12">
              <BlogPreview />
          </div>
        </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import SocialLinks from "~/components/social/SocialLinks.vue";
import BlogPreview from "~/components/social/BlogPreview.vue";

@Component({
  components: {
    SocialLinks,
    BlogPreview
  }
})
export default class Contact extends Vue {
  // get globalContent() {
  //   return content;
  // }
}
</script>

<style lang="scss">

</style>