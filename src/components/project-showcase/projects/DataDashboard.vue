<template>
  <div class="row">
    <div class="col-sm-12 col-md-4 col-sm-offset-0 col-xs-10 col-xs-offset-1">
        <div class="app-description">
            <h3>Personal Data Dashboard</h3>
            <h6>React, Flexbox</h6>
            <p>A ReactJS project that utilises a variety of third-party APIs to display and organise useful personal information including unique iCal calendar integration, WunderList integration and both news and weather APIs.<br><br>This web app also features on-demand refreshing of information, CSS animation and a layout built using Flexbox.</p>
        </div>
    </div>
    <div class="col-sm-12 col-md-8 col-sm-offset-0 col-xs-10 col-xs-offset-1">
        <g-image src="~/assets/images/websites/dashboard-reactjs.png" class="img-responsive project-app" alt="ReactJS data dashboard project" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class Gluco extends Vue {

}
</script>

<style lang="scss">

</style>