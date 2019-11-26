<template>
   <section class="university skills-panel">
      <div class="container">
         <EducationHeader />
          <div class="row">
              <div class="col-md-4 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                  <h3><strong>Level 1 Modules</strong></h3>
                  <ul class="list-unstyled">
                      <li>Programming &amp; Data Structures <span>(1st)</span></li>
                      <li>Algorithms &amp; Complexity <span>(2:1)</span></li>
                      <li>Maths for Computing <span>(1st)</span></li>
                      <li>Web Authoring <span>(2:1)</span></li>
                      <li>Problem Solving <span>(1st)</span></li>
                      <li>Computer Architectures <span>(2:1)</span></li>
                      <li>Operating Systems <span>(1st)</span></li>
                      <li>Web Applications Development<br>(volunteer module)</li>
                  </ul>
              </div>
              <div class="col-md-4 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                  <h3><strong>Level 2 Modules</strong></h3>
                  <ul class="list-unstyled">
                      <li>Object Oriented Programming <span>(1st)</span></li>
                      <li>Database Systems <span>(1st)</span></li>
                      <li>Human Computer Interaction <span>(1st)</span></li>
                      <li>Artificial Intelligence <span>(1st)</span></li>
                      <li>Professional Practice <span>(1st)</span></li>
                      <li>Networks &amp; Network Systems <span>(1st)</span></li>
                      <li>Group Project <span>(1st)</span></li>
                      <li>Programming Paradigms <span>(2:1)</span></li>
                  </ul>
              </div>
              <div class="col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                  <h3><strong>Level 3 Modules</strong></h3>
                  <ul class="list-unstyled">
                      <li>Software Engineering (1st)</li>
                      <li>Mobile Computing (1st)</li>
                      <li>Image Processing (1st)</li>
                      <li>Cross Platform Development (1st)</li>
                      <li>Final Year Project (1st)</li>
                      <li>Autonomous Mobile Robots (1st)</li>
                      <li>Parallel Computing (1st)</li>
                  </ul>
              </div>
          </div>
          <PlacementYearRow />
      </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import EducationHeader from "~/components/education/EducationHeader.vue";
import PlacementYearRow from "~/components/education/PlacementYearRow.vue";

@Component({
  components: {
    EducationHeader,
    PlacementYearRow
  }
})
export default class Education extends Vue {

}
</script>

<style lang="scss">

</style>