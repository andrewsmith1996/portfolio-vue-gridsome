<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-md-offset-1 col-sm-8 col-sm-offset-0">
          <HeaderContent />
        </div>
        <div class="col-md-4 col-sm-4 col-sm-offset-0 col-xs-10 col-xs-offset-1">
          <Phone />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import Phone from "~/components/phone/Phone.vue";
import HeaderContent from "~/components/header/HeaderContent.vue";

@Component({
  components: {
    Phone,
    HeaderContent
  }
})
export default class Header extends Vue {

}
</script>

<style lang="scss">

</style>