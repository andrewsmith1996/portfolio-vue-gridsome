

<template>
  <section class="contact skills-panel" id="contact-panel">
    <div class="container">
        <div class="row">
          <div class="col-md-4">
              <h2>Say hello</h2> 
              <p class="subtitle">Get in touch</p>
              <div class="social">
                  <a href="https://www.linkedin.com/in/andrewsmithdeveloper/" target="_blank"><g-image src="~/assets/images/social/linkedin.png" alt="LinkedIn Icon" class="linkedin" /></a>
                  <a href="https://github.com/andrewsmith1996" target="_blank"><g-image src="~/assets/images/social/github.png" alt="GitHub Icon" class="github" /></a>
                  <a href="https://technottingham.slack.com/messages/andrewsmith96" target="_blank"><g-image src="~/assets/images/social/slack-icon.png" alt="Slack Icon" /></a>
                  <a href="https://stackoverflow.com/users/4561107/andrew1996" target="_blank"><g-image src="~/assets/images/social/stack-overflow-icon.png" alt="Stack Overflow Icon" class="stackoverflow" /></a>
                  <a href="https://dev.to/andrewsmith1996" target="_blank"><g-image src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Andrew Smith's DEV Profile" height="40" width="40" /></a>
                            
              </div>
          </div>

          <div class="col-md-8 col-xs-12">
              <div class="blog-content">
                  <h2>Latest from my blog</h2>
                  <a href="https://thisdeveloperslife.wordpress.com/" target="_blank" class="blog-link">thisdeveloperslife.wordpress.com</a>
                  BLOG HERE
                  <article id="blog-wrapper">

                  </article>
              </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class Contact extends Vue {

}
</script>

<style lang="scss">

</style>