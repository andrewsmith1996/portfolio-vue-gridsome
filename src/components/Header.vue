<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-md-offset-1 col-sm-8 col-sm-offset-0">
          <h1>Andrew Smith</h1>
          <h2>Developer</h2>
          <p>A double award winning First Class BSc (Hons) Computer Science graduate and agency experienced developer specialising in web development and mobile app development.</p>
          <p>Currently working with Vue.js, MEAN stack technologies, native mobile application development and cross-platform application development.</p>
        </div>
        <div class="col-md-4 col-sm-4 col-sm-offset-0 col-xs-10 col-xs-offset-1">
          phone here
          <div id="phone-wrapper"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class Header extends Vue {

}
</script>

<style lang="scss">

</style>