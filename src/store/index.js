import { createStore } from 'vuex'
// import Vue from 'vue'
import windowModul from '@/store/windowModul.js'
import userRegistrationModul from '@/store/userRegistrationModul.js'
import gameModul from '@/store/gameModul.js'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    windowModul,
    userRegistrationModul,
    gameModul,
  }
})
