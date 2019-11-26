<template>
  <div class="row">
    <div class="col-sm-12 col-md-3 col-sm-offset-0 col-xs-10 col-xs-offset-1">
        <div class="app-description">
            <h3>Hoptical</h3>
            <h6>Android</h6>
            <p>Craft Beer tracker Android application showcasing a range of advanced Android concepts such as:</p>
            <ul class="mobile-features">
                <li>Google Sign-in</li>
                <li>Google Firebase Realtime Database</li>
                <li>Encrypted local SQL storage</li>
                <li>Geolocation services</li>
                <li>Offline capabilities</li>
                <li>API calls & JSON parsing</li>
                <li>Async tasks</li>
                <li>Camera integration</li>
                <li>Contacts directory integration</li>
                <li>Fragments, Implicit & Explicit intents</li>
            </ul> 
        </div>
    </div>
    <div class="col-sm-4 col-md-3 col-sm-offset-0 col-xs-8 col-xs-offset-2">
        <g-image src="~/assets/images/apps/hoptical-one.png" class="img-responsive project-app" alt="Hoptical Craft Beer Tracking app built in Android" />
    </div>
    <div class="col-sm-4 col-md-3 col-sm-offset-0 col-xs-8 col-xs-offset-2">
        <g-image src="~/assets/images/apps/hoptical-three.png" class="img-responsive project-app" alt="Hoptical Craft Beer Tracking app built in Android" />
    </div>
    <div class="col-sm-4 col-md-3 col-sm-offset-0 col-xs-8 col-xs-offset-2">
        <g-image src="~/assets/images/apps/hoptical-two.png" class="img-responsive project-app" alt="Hoptical Craft Beer Tracking app built in Android" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class Hoptical extends Vue {

}
</script>

<style lang="scss">

</style>