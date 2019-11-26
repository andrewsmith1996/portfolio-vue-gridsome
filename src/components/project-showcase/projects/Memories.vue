



<template>
  <div class="row">
    <div class="col-sm-12 col-md-3 col-sm-offset-0 col-xs-10 col-xs-offset-1">
      <div class="app-description">
        <h3>Memories</h3>
        <h6>Ionic 4, Firebase</h6>
        <p>Diary and journaling application for capturing and collecting social experiences.<br><br>Share, scan and collect friends’ memories with QR codes to build memory diaries together.</p>
        <ul class="mobile-features">
            <li>Google Firebase Authentication, Realtime Database & Storage</li>
            <li>Device Contacts List & Cameria Integration</li>
            <li>Geolocation & Interactive Map with Custom Markers</li>
            <li>Google Maps API, Google Nearby Places API</li>
            <li>Geofencing & Local Notifications</li>
            <li>QR Code Generation & QR Code Scanner</li>
            <li>Social Media Sharing</li>
        </ul> 
      </div>
    </div>
    <div class="col-sm-4 col-md-3 col-sm-offset-0 col-xs-8 col-xs-offset-2">
        <g-image src="~/assets/images/apps/memories_one.png" class="img-responsive project-app" alt="Memories app built in Ionic 4" /> 
    </div>
    <div class="col-sm-4 col-md-3 col-sm-offset-0 col-xs-8 col-xs-offset-2">
        <g-image src="~/assets/images/apps/memories_two.png" class="img-responsive project-app" alt="Memories app built in Ionic 4" /> 
    </div>
    <div class="col-sm-4 col-md-3 col-sm-offset-0 col-xs-8 col-xs-offset-2">
        <g-image src="~/assets/images/apps/memories_four.png" class="img-responsive project-app" alt="Memories app built in Ionic 4" /> 
    </div>
</div>

</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class Memories extends Vue {

}
</script>

<style lang="scss">

</style>