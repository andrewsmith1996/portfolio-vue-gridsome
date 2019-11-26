<template>
  <section class="projects-panel">
    <div class="container">
        <ProjectShowcaseHeader />
        <Gluco />
        <Memories />
        <Hoptical />
        <ImageIdentifier />
        <BloodSugarAppMagik />
        <DataDashboard />
        <GeolocationWeatherApp />
        <HackbustersGame />  
        
        <div class="row">
            <div class="col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                <a href="https://www.inconnectcables.co.uk" target="_blank">
                    <g-image src="~/assets/images/websites/inconnect-cables.png" class="img-responsive" alt="Inconnect Cables website - Built at Cursor" />
                </a>
                <p class="project-caption"><span>Inconnect Cables</span><br>HTML, CSS, JavaScript, CraftCMS based on provided designs<br>Built on placement at <a href="https://cursor.co.uk" target="_blank">Cursor</a></p>
            </div>

            <div class="col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                <a href="https://www.espressodesign.co.uk/offers" target="_blank">
                    <g-image src="~/assets/images/websites/espresso-design.png" class="img-responsive" alt="Espresso Design Offers Page - Built at Cursor" />
                </a>
                <p class="project-caption text-center"><span>Espresso Design offers page</span><br>HTML, CSS, JavaScript based on provided designs<br>Built on placement at <a href="https://cursor.co.uk" target="_blank">Cursor</a></p>
            </div>
        </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import ProjectShowcaseHeader from "~/components/project-showcase/ProjectShowcaseHeader.vue";
import Gluco from "~/components/project-showcase/projects/Gluco.vue";
import Memories from "~/components/project-showcase/projects/Memories.vue";
import Hoptical from "~/components/project-showcase/projects/Hoptical.vue";
import ImageIdentifier from "~/components/project-showcase/projects/ImageIdentifier.vue";
import BloodSugarAppMagik from "~/components/project-showcase/projects/BloodSugarAppMagik.vue";
import DataDashboard from "~/components/project-showcase/projects/DataDashboard.vue";
import GeolocationWeatherApp from "~/components/project-showcase/projects/GeolocationWeatherApp.vue";
import HackbustersGame from "~/components/project-showcase/projects/HackbustersGame.vue";

@Component({
  components: {
    ProjectShowcaseHeader,
    Gluco,
    Memories,
    Hoptical,
    ImageIdentifier,
    BloodSugarAppMagik,
    DataDashboard,
    GeolocationWeatherApp,
    HackbustersGame
  }
})
export default class ProjectShowcase extends Vue {

}
</script>

<style lang="scss">

</style>