<template>
  <section class="skills">
    <div class="skills__inner-container">
      <SkillsHeader />
      <FrontendSkills />
      <BackendSkills />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import SkillsHeader from "~/components/skills/SkillsHeader.vue";
import FrontendSkills from "~/components/FrontendSkills.vue";
import BackendSkills from "~/components/BackendSkills.vue";
import { mapGetters } from "vuex";

@Component({
  components: {
    SkillsHeader,
    FrontendSkills,
    BackendSkills
  },
  computed: {
    ...mapGetters({
      content: "GlobalStore/skills_content"
    })
  }
})
export default class Skills extends Vue {
  
}
</script>

<style lang="scss">

</style>