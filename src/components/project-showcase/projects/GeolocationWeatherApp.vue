<template>
  <div class="row">
    <div class="col-sm-12 col-md-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
        <div class="app-description">
            <h3>Geolocation Weather Forecast</h3>
                <!-- <a href="https://github.com/andrewsmith1996/geolocationWeatherReactNative" target="_blank"><g-image src="/images/assets/octocat.png"></a></h3> -->
            <h6>React Native</h6>
            <p>A simple React Native app that uses the Geolocation functionality of a mobile phone and a WeatherAPI to retrieve a user's current location and return a 5 day weather forecast for that location. 
            <br><br>I published a full guide on how to build this app <a href="https://dev.to/andrewsmith1996/how-to-build-an-geolocation-weather-forecast-app-in-react-native-in-30-minutes-1kmo" target="_blank">here</a> as part of a "Let's Build" series of tutorials.
            <br><br>This guide was also a featured article in Tech Nottingham's October newsletter.
            <br><br><a href="https://github.com/andrewsmith1996/geolocationWeatherReactNative" target="_blank">View on GitHub</a>
        </p>

        </div>
    </div>
    <div class="col-sm-6 col-md-3 col-sm-offset-0 col-xs-8 col-xs-offset-2">
        <g-image src="~/assets/images/apps/geolocation-one.png" class="img-responsive project-app" alt="React Native Geolocation Weather Forecast app" />
    </div>
    <div class="col-sm-6 col-md-3 col-sm-offset-0 col-xs-8 col-xs-offset-2">
        <g-image src="~/assets/images/apps/geolocation-two.png" class="img-responsive project-app" alt="React Native Geolocation Weather Forecast app" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class GeolocationWeatherApp extends Vue {

}
</script>

<style lang="scss">

</style>