<template>
<section class="about-panel">
  <div class="container">
     <div class="row">
      <div class="col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
          <g-image src="~/assets/images/icons/web.png" alt="Web Development Icon" />
          <h3 class="web hidden-xs">{{ aboutBlocks.panels[0].title }}</h3>
          <h3 class="web visible-xs">{{ aboutBlocks.panels[0].title }}</h3>
          <p>{{ aboutBlocks.panels[0].description }}</p>
      </div>
      <div class="col-md-4 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
          <g-image src="~/assets/images/icons/mobile.png" alt="Mobile Development Icon" />
          <h3 class="web hidden-xs">{{ aboutBlocks.panels[1].title }}</h3>
          <h3 class="web visible-xs">{{ aboutBlocks.panels[1].title }}</h3>
          <p>{{ aboutBlocks.panels[1].description }}</p>
      </div>
      <div class="col-md-4 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
          <g-image src="~/assets/images/icons/comp-sci.png" alt="Computer Science Icon" />
          <h3 class="web hidden-xs">{{ aboutBlocks.panels[2].title }}</h3>
          <h3 class="web visible-xs">{{ aboutBlocks.panels[2].title }}</h3>
          <p>{{ aboutBlocks.panels[2].description }}</p>
      </div>
    </div>
  </div>
</section>

</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import AboutBlock from "~/components/about/AboutBlock.vue";
import { mapGetters } from "vuex";

@Component({
  components: {
    AboutBlock
  },
  computed: {
    ...mapGetters({
      aboutBlocks: "GlobalStore/about_content"
    })
  }
})
export default class AboutPanel extends Vue {

}
</script>

<style lang="scss">

</style>