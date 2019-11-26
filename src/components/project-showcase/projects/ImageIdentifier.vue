



<template>
  <div class="row">
    <div class="col-sm-12 col-md-3 col-sm-offset-0 col-xs-10 col-xs-offset-1">
        <div class="app-description">
            <h3>Image Identifier 
                <!-- <a href="https://github.com/andrewsmith1996/Image-Recogition-React-Native" target="_blank"> -->
                <!-- <g-image src="/images/assets/octocat.png"></a> -->
            </h3>
            <h6>React Native</h6>
            <p>A React Native app that uses AI and a number of React Native components to identify what's in an image taken by a user.
                <br><br>I published a full guide on how to build this app <a href="https://dev.to/andrewsmith1996/how-to-build-an-image-recognition-app-in-react-native-m6g" target="_blank">here</a> as part of a "Let's Build" series of tutorials.
                <br><br>This guide was also a featured article in Tech Nottingham's September newsletter.
                <br><br><a href="https://github.com/andrewsmith1996/Image-Recogition-React-Native" target="_blank"> View on GitHub</a>
            </p>
        </div>
    </div>

    <div class="col-sm-4 col-md-3 col-sm-offset-0 col-xs-8 col-xs-offset-2">
        <g-image src="~/assets/images/apps/image-recognition-react-native-1.png" class="img-responsive project-app" alt="React Native image recognition app" />
    </div>
    <div class="col-sm-4 col-md-3 col-sm-offset-0 col-xs-8 col-xs-offset-2">
        <g-image src="~/assets/images/apps/image-recognition-react-native-2.png" class="img-responsive project-app" alt="React Native image recognition app" />
    </div>
    <div class="col-sm-4 col-md-3 col-sm-offset-0 col-xs-8 col-xs-offset-2">
        <g-image src="~/assets/images/apps/image-recognition-react-native-3.png" class="img-responsive project-app" alt="React Native image recognition app" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class ImageIdentifier extends Vue {

}
</script>

<style lang="scss">

</style>