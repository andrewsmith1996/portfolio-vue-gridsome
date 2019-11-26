import Vue from "vue";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
const globalContent = require('~/content/global.json')

@Module({
  namespaced: true
})
export default class GlobalStore extends VuexModule {
  get content() {
    return globalContent;
  }
}
