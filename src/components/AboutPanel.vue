<template>
<section class="about-panel">
  <div class="container">
     <div class="row">
      <div class="col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
          <g-image src="~/assets/images/icons/web.png" alt="Web Development Icon" />
          <h3 class="web hidden-xs">Web<br />Development</h3>
          <h3 class="web visible-xs">Web Development</h3>
          <p>Web design &amp; web development skills with a year's experience of working within an agency and a year's freelance experience.</p>
      </div>
      <div class="col-md-4 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
          <g-image src="~/assets/images/icons/mobile.png" alt="Mobile Development Icon" />
          <h3 class="web hidden-xs">Mobile<br />Development</h3>
          <h3 class="web visible-xs">Mobile Development</h3>
          <p>Skills in native Android development in Java and cross-platform mobile development in Ionic and React Native.</p>
      </div>
      <div class="col-md-4 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
          <g-image src="~/assets/images/icons/comp-sci.png" alt="Computer Science Icon" />
          <h3 class="web hidden-xs">Computer<br />Science</h3>
          <h3 class="web visible-xs">Computer Science</h3>
          <p>First Class Honours degree in BSc Computer Science (85%) with a year's placement in industry, winning both the 'Best Graduate' and 'Best Project' awards.</p>
      </div>
    </div>
  </div>
</section>

</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class AboutPanel extends Vue {

}
</script>

<style lang="scss">

</style>