import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    redirect: '/ebook/Laws|2015_Book_ProtectingTheRightsOfPeopleWit'
  }, {
    path: '/ebook',
    component: () => import('./views/ebook/index.vue'),
    children: [{
      path: ':fileName',
      component: ()=>import('./components/ebook/EbookReader.vue')
    }]
  }]
})