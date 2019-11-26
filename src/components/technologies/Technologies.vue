<template>
  <section class="technologies">
      <g-image background="transparent" fit="contain"  width="90" height="90" src="~/assets/images/technologies/node.png" alt="Node.js Logo" />
      <g-image background="white" fit="contain" width="90" height="90" src="~/assets/images/technologies/react.png" alt="react.js Logo" />
      <g-image background="transparent" fit="contain" width="90" height="90" src="~/assets/images/technologies/vue.png" alt="Vue.js Logo" />
      <g-image background="transparent" fit="contain"  width="90" height="90" src="~/assets/images/technologies/typescript.png" alt="Typescript Logo" />
      <g-image background="transparent" fit="contain"  width="90" height="90" src="~/assets/images/technologies/mongodb.png" alt="MongoDB Logo" />
      <g-image background="transparent" fit="contain"  width="90" height="90" src="~/assets/images/technologies/php.png" alt="PHP Logo" />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class Technologies extends Vue {

}
</script>

<style lang="scss">

</style>