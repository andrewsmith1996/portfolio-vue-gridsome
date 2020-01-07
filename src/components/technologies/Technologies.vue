<template>
  <section class="technologies">
      <g-image background="white" fit="contain" width="125" height="125" src="~/assets/images/technologies/mongodb.png" alt="MongoDB Logo" />
      <g-image background="white" fit="contain" width="125" height="125" src="~/assets/images/technologies/react.png" alt="react.js Logo" />
      <g-image fit="contain" width="125" height="125" src="~/assets/images/technologies/ionic.png" alt="Ionic Logo" />
      <g-image fit="contain" width="125" height="125" src="~/assets/images/technologies/vue.png" alt="Vue.js Logo" />
      <g-image fit="contain" width="125" height="125" src="~/assets/images/technologies/typescript.png" alt="Typescript Logo" />
      <g-image fit="cover" width="125" height="125" src="~/assets/images/technologies/node.png" alt="Node.js Logo" />
      <g-image fit="contain" width="125" height="125" src="~/assets/images/technologies/js.png" alt="JavaScript Logo" />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class Technologies extends Vue {
  number: number | null = null;
}
</script>

<style lang="scss">

</style>