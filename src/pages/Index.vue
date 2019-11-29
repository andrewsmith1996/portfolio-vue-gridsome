<template>
  <!DOCTYPE HTML>
    <html lang="en">
      <body>
        <div class="global__container">
          <div class="global__container-inner">
            <Header />
              <div class="gradient-wrapper">
                <AboutPanel />
                <ProjectShowcase />
                <FrontendSkills />
                <BackendSkills />
                <Education />
                <Projects />
                <Contact /> 
              </div>
            <Footer />
            </div>
        </div>
      </body>
    </html>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import Header from '~/components/Header.vue';
import AboutPanel from '~/components/AboutPanel.vue';
import Footer from '~/components/Footer.vue';
import Contact from '~/components/Contact.vue';
import Education from '~/components/Education.vue';
import Projects from '~/components/Projects.vue';
import BackendSkills from '~/components/BackendSkills.vue';
import FrontendSkills from '~/components/FrontendSkills.vue';
import ProjectShowcase from '~/components/ProjectShowcase.vue';

@Component({
  components: {
    Header,
    AboutPanel,
    Footer,
    Contact,
    Education,
    Projects,
    BackendSkills,
    FrontendSkills,
    ProjectShowcase
  }
})
export default class Index extends Vue {

}
</script>