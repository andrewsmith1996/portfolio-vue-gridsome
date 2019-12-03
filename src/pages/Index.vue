<template>
  <!DOCTYPE HTML>
    <html lang="en">
      <body>
        <Header />
          <div class="gradient-wrapper">
            <AboutPanel v-scroll-reveal.reset />
            <ProjectShowcase />
            <Skills v-scroll-reveal.reset />
            <Education v-scroll-reveal.reset />
            <Projects v-scroll-reveal.reset />
            <Contact v-scroll-reveal.reset /> 
          </div>
        <Footer />
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
import Skills from '~/components/Skills.vue';
import ProjectShowcase from '~/components/ProjectShowcase.vue';

@Component({
  components: {
    Header,
    AboutPanel,
    Footer,
    Contact,
    Education,
    Projects,
    Skills,
    ProjectShowcase
  }
})
export default class Index extends Vue {

}
</script>