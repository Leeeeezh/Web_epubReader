import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/icon.css'
import './assets/fonts/daysOne.css'
import './assets/fonts/cabin.css'
import './assets/fonts/tangerine.css'
import './assets/fonts/montserrat.css'
import './assets/styles/global.scss'
import './assets/styles/reset.css'
import 'vant/lib/button/style';
import {
  Button
} from 'vant'
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
