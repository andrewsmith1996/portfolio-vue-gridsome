<template>
  <section class="skills">
    <div class="skills__container skills__container--reverse">
      <div class="skills__skills-content">
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
      <div class="skills__skills-example">
          <SteveNashFashion />
      </div>
    </div>
    <div class="screens">
      <div class="screens__row">
        <SimonsGroup />
        <FosterAC />
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