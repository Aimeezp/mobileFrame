import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../views/Login'
import cons from '../views/cons'
import test from '../views/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/cons',
      name: 'cons',
      component: cons
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
  ]
})
