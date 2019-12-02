<template>
  <section class="skills">
    <div class="skills__inner-container">
      <SkillsHeader />
      <div class="skills__container">
          <div class="skills__skills-content">
              <h3 class="skills__list-title">Front-end development</h3>
              <ul>
                  <li><span></span>HTML, CSS, LESS, Bootstrap</li>
                  <li><span></span>JavaScript, JQuery, AJAX</li>
                  <li><span></span>UX & UI design, Accessibility, SEO</li>
              </ul>
              <h3 class="skills__list-title">Non-agency experience</h3>
              <ul>
                  <li><span></span>ReactJS, Vue.js, TypeScript</li>
                  <li><span></span>Android Development (Java)</li>
                  <li><span></span>Ionic Framework, React Native</li>
                  <li><span></span>SASS, Flexbox</li>
              </ul>
          </div>
          <div class="skills__skills-example">
              <LincolnHack />
          </div>
      </div>
      <div class="screens">
        <div class="screens__row">
          <GreenstockLighting />
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