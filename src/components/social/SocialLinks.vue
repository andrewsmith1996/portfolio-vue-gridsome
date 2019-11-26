<template>
 <div class="social">
    <a href="https://www.linkedin.com/in/andrewsmithdeveloper/" target="_blank"><g-image src="~/assets/images/social/linkedin.png" alt="LinkedIn Icon" class="linkedin" /></a>
    <a href="https://github.com/andrewsmith1996" target="_blank"><g-image src="~/assets/images/social/github.png" alt="GitHub Icon" class="github" /></a>
    <a href="https://technottingham.slack.com/messages/andrewsmith96" target="_blank"><g-image src="~/assets/images/social/slack-icon.png" alt="Slack Icon" /></a>
    <a href="https://stackoverflow.com/users/4561107/andrew1996" target="_blank"><g-image src="~/assets/images/social/stack-overflow-icon.png" alt="Stack Overflow Icon" class="stackoverflow" /></a>
    <a href="https://dev.to/andrewsmith1996" target="_blank"><g-image src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Andrew Smith's DEV Profile" height="40" width="40" /></a>       
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class SocialLinks extends Vue {

}
</script>

<style lang="scss">

</style>