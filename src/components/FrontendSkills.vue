<template>
  <section class="front-end skills-panel" id="skills-panel">
    <div class="container">
       <SkillsHeader />
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <h3>{{ content.frontend_title }}</h3>
                <SkillsList :skills="frontEndSkills" />
                <h3>{{ content.frontend_title_non_agency }}</h3>
                <ul class="list-unstyled sub-experience">
                    <li><span></span>ReactJS, Vue.js, TypeScript</li>
                    <li><span></span>Android Development (Java)</li>
                    <li><span></span>Ionic Framework, React Native</li>
                    <li><span></span>SASS, Flexbox</li>
                </ul>
            </div>
            <div class="col-md-8 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                <LincolnHack />
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
              <GreenstockLighting />
            </div>
            <div class="col-md-6 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
               <NicholsonMcBride />
            </div>
        </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import SkillsHeader from "~/components/skills/SkillsHeader.vue";
import SkillsList from "~/components/skills/SkillsList.vue";
import { mapGetters } from "vuex";
import LincolnHack from "~/components/project-showcase/websites/LincolnHack.vue";
import GreenstockLighting from "~/components/project-showcase/websites/GreenstockLighting.vue";
import NicholsonMcBride from "~/components/project-showcase/websites/NicholsonMcBride.vue";

@Component({
  components: {
    SkillsHeader,
    SkillsList,
    LincolnHack,
    GreenstockLighting,
    NicholsonMcBride
  },
  computed: {
    ...mapGetters({
      content: "GlobalStore/skills_content"
    })
  }
})
export default class FrontendSkills extends Vue {
  content!: {skills_one: any, skills_two: any, skills_three: any, skills_four: any};

  get frontEndSkills() {
    return `${this.content.skills_one}-${this.content.skills_two}-${this.content.skills_three}-${this.content.skills_four}}`.split("-");
  }
}
</script>

<style lang="scss">

</style>