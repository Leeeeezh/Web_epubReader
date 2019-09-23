import Vue from 'vue'
import Router from 'vue-router'
import store from './views/store/index'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
    name: 'root',
    path: '/',
    redirect: '/store'
    // redirect: '/ebook/Laws|2015_Book_ProtectingTheRightsOfPeopleWit'
  }, 
  {
    name: 'store',
    path: '/store',
    component: store
  },{
    path: '/ebook',
    component: () => import('./views/ebook/index.vue'),
    children: [{
      name: 'ebook',
      path: ':fileName',
      component: ()=>import('./components/ebook/EbookReader.vue')
    }]
  }]
})