import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/icon.css'
import './assets/fonts/daysOne.css'
import './assets/fonts/cabin.css'
import './assets/fonts/tangerine.css'
import './assets/fonts/montserrat.css'
// import './assets/styles/global.scss'
import './assets/styles/reset.css'
import 'vant/lib/button/style'
import 'vant/lib/slider/style'
import 'vant/lib/search/style'
import {
  Button,
  Slider,
  Search 
} from 'vant'
Vue.use(Button)
Vue.use(Slider)
Vue.use(Search)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
