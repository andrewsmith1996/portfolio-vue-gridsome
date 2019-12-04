<template>
  <section class="technologies">
      <g-image @mouseenter="setActive(1)" :class="{'active': technologyActive(1)}" background="transparent" fit="contain"  width="125" height="125" src="~/assets/images/technologies/mongodb.png" alt="MongoDB Logo" />
      <g-image @mouseenter="setActive(2)" :class="{'active': technologyActive(2)}" background="white" fit="contain" width="125" height="125" src="~/assets/images/technologies/react.png" alt="react.js Logo" />
      <g-image @mouseenter="setActive(3)" :class="{'active': technologyActive(3)}" background="transparent" fit="contain"  width="125" height="125" src="~/assets/images/technologies/node.png" alt="Node.js Logo" />
      <g-image @mouseenter="setActive(4)" :class="{'active': technologyActive(4)}" background="transparent" fit="contain" width="125" height="125" src="~/assets/images/technologies/vue.png" alt="Vue.js Logo" />
      <g-image @mouseenter="setActive(5)" :class="{'active': technologyActive(5)}" background="transparent" fit="contain"  width="125" height="125" src="~/assets/images/technologies/typescript.png" alt="Typescript Logo" />
      <g-image @mouseenter="setActive(6)" :class="{'active': technologyActive(6)}" background="transparent" fit="contain"  width="125" height="125" src="~/assets/images/technologies/ionic.png" alt="Ionic Logo" />
      <g-image @mouseenter="setActive(7)" :class="{'active': technologyActive(7)}" background="transparent" fit="contain"  width="125" height="125" src="~/assets/images/technologies/js.png" alt="JavaScript Logo" />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class Technologies extends Vue {
  number: number | null = null;
  
  setActive(id: number) {
    this.number = id;
  }

  technologyActive(id: number){
    return this.number == id;
  }
}
</script>

<style lang="scss">

</style>