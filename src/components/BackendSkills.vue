<template>
  <section class="back-end skills-panel">
    <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-6">
              <h3>Back-end development</h3>
              <ul class="list-unstyled">
                  <li><span></span>PHP</li>
                  <li><span></span>SQL, mySQL</li>
                  <li><span></span>Git, GitHub, BitBucket</li>
                  <li><span></span>CraftCMS</li>
                  <li><span></span>Trello, BaseCamp, Float</li>
              </ul>
              <h3 class="text-left">Non-agency experience</h3>
              <ul class="list-unstyled text-left sub-experience">
                  <li><span></span>Google Firebase, Google Cloud</li>
                  <li><span></span>NodeJS</li>
                  <li><span></span>MongoDB</li>
                  <li><span></span>C++, C#</li>
                  <li><span></span>Python, PHPmyAdmin</li>
              </ul>
          </div>
          <div class="col-md-8 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
              <SteveNashFashion />
          </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                <SimonsGroup />
            </div>
            <div class="col-md-6 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                <FosterAC />
            </div>
        </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import SteveNashFashion from "~/components/project-showcase/websites/SteveNashFashion.vue";
import SimonsGroup from "~/components/project-showcase/websites/SimonsGroup.vue";
import FosterAC from "~/components/project-showcase/websites/FosterAC.vue";


@Component({
  components: {
    SteveNashFashion,
    SimonsGroup,
    FosterAC
  }
})
export default class Header extends Vue {

}
</script>

<style lang="scss">

</style>