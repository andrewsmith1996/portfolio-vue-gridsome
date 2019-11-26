import Vue from "vue";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
const globalContent = require('~/content/global.json')
const educationContent = require('~/content/education.json')
const projectsContent = require('~/content/projects.json')

@Module({
  namespaced: true
})
export default class GlobalStore extends VuexModule {
  get content() {
    return globalContent;
  }

  get education_content() {
    return educationContent;
  }

  get projects_content() {
    return projectsContent;
  }
}
