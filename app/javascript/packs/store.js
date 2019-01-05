import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    // initial state
    projects: [],
    currentUser: null,
    currentProject: null
  },

  mutations: {
    setProjects(state, projects) {
      state.projects = projects
    },

    selectProject(state, project) {
      state.currentProject = project
    },

    addProject(state, project) {
      state.projects.push(project)
    },
  },

})