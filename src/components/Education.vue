<template>
   <section class="education">
    <EducationHeader />
    <div class="education__row">
      <YearModules class="education__column" :title="educationContent.year_1_title" :modules="educationContent.year_1_modules" />
      <YearModules class="education__column" :title="educationContent.year_2_title" :modules="educationContent.year_2_modules" />
      <YearModules class="education__column" :title="educationContent.year_3_title" :modules="educationContent.year_3_modules" />
    </div>
    <PlacementYearRow />
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