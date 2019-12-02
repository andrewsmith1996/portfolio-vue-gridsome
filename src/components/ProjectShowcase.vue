<template>
  <section class="projects-panel">
    <div class="projects-panel__inner-container">
      <ProjectShowcaseHeader />
      <Gluco />
      <Memories />
      <Hoptical />
      <ImageIdentifier />
      <BloodSugarAppMagik />
      <DataDashboard />
      <GeolocationWeatherApp />
      <HackbustersGame />  
      
      <div class="projects__screens">
        <div class="projects__screen">
          <InconnectCables />
        </div>
        <div class="projects__screen">
          <EspressoDesign />
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
import InconnectCables from "~/components/project-showcase/websites/InconnectCables.vue";
import EspressoDesign from "~/components/project-showcase/websites/EspressoDesign.vue";


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
    HackbustersGame,
    InconnectCables,
    EspressoDesign
  }
})
export default class ProjectShowcase extends Vue {

}
</script>

<style lang="scss">

</style>