import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '../views/index'
import about from '../views/about'
import user from '../views/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      hidden: true
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: '',
      component: index
    },
    {
      path: '/about',
      name: '',
      component: about
    },
    {
      path: './user/:id',
      component: user
    }
  ]
})
