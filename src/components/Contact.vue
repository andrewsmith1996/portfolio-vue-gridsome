

<template>
  <section class="contact skills-panel" id="contact-panel">
    <div class="container">
        <div class="row">
          <div class="col-md-4">
              <h2>Say hello</h2> 
              <p class="subtitle">Get in touch</p>
              <SocialLinks :links="globalContent.socialLinks"/>
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
import { mapGetters } from "vuex";

@Component({
  components: {
    SocialLinks,
    BlogPreview
  },
  computed: {
    ...mapGetters({
      globalContent: "GlobalStore/content"
    })
  }
})
export default class Contact extends Vue {
}
</script>

<style lang="scss">

</style>