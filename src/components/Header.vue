<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-md-offset-1 col-sm-8 col-sm-offset-0">
          <HeaderContent :title="globalContent.headerTitle" :jobRole="globalContent.headerJobRole" :intro="globalContent.headerIntro"/>
        </div>
        <div class="col-md-4 col-sm-4 col-sm-offset-0 col-xs-10 col-xs-offset-1">
          <Technologies />
        </div>
      </div>
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