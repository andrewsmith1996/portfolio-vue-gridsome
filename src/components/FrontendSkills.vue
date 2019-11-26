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
                <a href="https://2018.lincolnhack.org/" target="_blank">
                    <g-image src="~/assets/images/websites/lincoln-hack.png" class="img-responsive" alt="Lincoln Hack 2018 website - Built at Cursor" />
                </a>
                <p class="project-caption text-center"><span>Lincoln Hack 2018</span><br>HTML, CSS, JavaScript, CSS animations based on provided designs<br>Built on placement at <a href="https://cursor.co.uk" target="_blank">Cursor</a></p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                <a href="https://www.greenstocklighting..co.uk/" target="_blank">
                    <g-image src="~/assets/images/websites/greenstock-lighting.png" class="img-responsive" alt="Greenstock Lighting - Built at Cursor" />
                </a>
                <p class="project-caption text-center"><span>Greenstock Lighting</span><br>HTML, CSS, JavaScript, CraftCMS based on provided designs<br>Built on placement at <a href="https://cursor.co.uk" target="_blank">Cursor</a></p>
            </div>
            <div class="col-md-6 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                <a href="https://www.nicholsonmcbride.com/digital-transformation" target="_blank">
                    <g-image src="~/assets/images/websites/digital-transformation.png" class="img-responsive" alt="Nicholson McBride Digital Transformation - Built at Cursor" />
                </a>
                <p class="project-caption text-center"><span>Digital Transformation</span><br>HTML, CSS, JavaScript based on provided designs<br>Built on placement at <a href="https://cursor.co.uk" target="_blank">Cursor</a></p>
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

@Component({
  components: {
    SkillsHeader,
    SkillsList
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