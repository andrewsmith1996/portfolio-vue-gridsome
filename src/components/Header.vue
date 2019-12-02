<template>
  <header class="header">
    <div class="header__inner-container">
        <HeaderContent class="header__content" :title="globalContent.headerTitle" :jobRole="globalContent.headerJobRole" :intro="globalContent.headerIntro"/>
        <Technologies class="header__technologies"/>
      </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import Technologies from "~/components/technologies/Technologies.vue";
import HeaderContent from "~/components/header/HeaderContent.vue";
import { mapGetters } from "vuex";

@Component({
  components: {
    Technologies,
    HeaderContent
  },
 computed: {
    ...mapGetters({
      globalContent: "GlobalStore/content"
    })
  }
})
export default class Header extends Vue {
  globalContent!: {};
}
</script>

<style lang="scss">

</style>