<template>
   <section class="university skills-panel">
      <div class="container">
         <EducationHeader />
          <div class="row">
            <div class="col-md-4 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
              <YearModules :title="educationContent.year_1_title" :modules="educationContent.year_1_modules" />
            </div>
            <div class="col-md-4 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
              <YearModules :title="educationContent.year_2_title" :modules="educationContent.year_2_modules" />
            </div>
            <div class="col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
              <YearModules :title="educationContent.year_3_title" :modules="educationContent.year_3_modules" />
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
import { mapGetters } from "vuex";
import YearModules from "~/components/education/YearModules.vue";

@Component({
  components: {
    EducationHeader,
    PlacementYearRow,
    YearModules
  },
  computed: {
    ...mapGetters({
      educationContent: "GlobalStore/education_content"
    })
  }
})
export default class Education extends Vue {

}
</script>

<style lang="scss">

</style>