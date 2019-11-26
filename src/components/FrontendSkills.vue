<template>
  <section class="front-end skills-panel" id="skills-panel">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>Skills</h2>
                <p class="subtitle">What do I know?</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <h3>Front-end development</h3>
                <ul class="list-unstyled">
                    <li><span></span>HTML, CSS, LESS, Bootstrap</li>
                    <li><span></span>JavaScript, JQuery, AJAX</li>
                    <li><span></span>UX &amp; UI design, Accessibility, SEO</li>
                </ul>
                <h3>Non-agency experience</h3>
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

@Component
export default class FrontendSkills extends Vue {

}
</script>

<style lang="scss">

</style>