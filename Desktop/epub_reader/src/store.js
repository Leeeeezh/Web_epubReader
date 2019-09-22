import Vue from 'vue'
import Vuex from 'vuex'
import book from './store/modules/books.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    book
  }
})
