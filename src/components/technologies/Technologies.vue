<template>
  <section class="technologies">
      <g-image @mouseenter="number = 1" :class="{'active': number === 1}" background="transparent" fit="contain"  width="125" height="125" src="~/assets/images/technologies/mongodb.png" alt="MongoDB Logo" />
      <g-image @mouseenter="number = 2" :class="{'active': number === 2}" background="white" fit="contain" width="125" height="125" src="~/assets/images/technologies/react.png" alt="react.js Logo" />
      <g-image @mouseenter="number = 3" :class="{'active': number === 3}" background="transparent" fit="contain"  width="125" height="125" src="~/assets/images/technologies/node.png" alt="Node.js Logo" />
      <g-image @mouseenter="number = 4" :class="{'active': number === 4}" background="transparent" fit="contain" width="125" height="125" src="~/assets/images/technologies/vue.png" alt="Vue.js Logo" />
      <g-image @mouseenter="number = 5" :class="{'active': number === 5}" background="transparent" fit="contain"  width="125" height="125" src="~/assets/images/technologies/typescript.png" alt="Typescript Logo" />
      <g-image @mouseenter="number = 6" :class="{'active': number === 6}" background="transparent" fit="contain"  width="125" height="125" src="~/assets/images/technologies/ionic.png" alt="Ionic Logo" />
      <g-image @mouseenter="number = 7" :class="{'active': number === 7}" background="transparent" fit="contain"  width="125" height="125" src="~/assets/images/technologies/js.png" alt="JavaScript Logo" />
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