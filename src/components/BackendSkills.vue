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
                <g-image src="~/assets/images/websites/steve-nash-fashion.png" class="img-responsive" alt="Steve Nash fashion designer website" />
                <p class="project-caption text-center"><span>Steve Nash Fashion Designer Portfolio Website</span></p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                <a href="https://www.simonsgroup.com" target="_blank">
                    <g-image src="~/assets/images/websites/simons-group-main.png" class="img-responsive" alt="www.simonsgroup.com" />
                </a>
                <p class="project-caption text-center"><span>Simons Group</span><br>HTML, CSS, JavaScript, CraftCMS based on provided designs<br>Built on placement at <a href="https://cursor.co.uk" target="_blank">Cursor</a></p>
            </div>
            <div class="col-md-6 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                <a href="https://www.fosterac.co.uk/" target="_blank">
                    <g-image src="~/assets/images/websites/fosterac.png" class="img-responsive" alt="Foster Environmental - Built at Cursor" />
                </a>
                <p class="project-caption text-center"><span>Foster Environmental</span><br>HTML, CSS, JavaScript, CraftCMS based on provided designs<br>Built on placement at <a href="https://cursor.co.uk" target="_blank">Cursor</a></p>
            </div>
        </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class Header extends Vue {

}
</script>

<style lang="scss">

</style>