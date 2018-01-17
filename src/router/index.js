import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '../views/index'

import about from '../views/about'

import user from '../views/User/user'

import tableA from '../views/functionA/table'
import formA from '../views/functionA/form'

import tableB from '../views/functionB/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      hidden: true
    },
    {
      path: '/index',
      name: '',
      component: index
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: '',
      redirect: 'noredirect',
      component: index,
      children: [
        { path: 'about', component: about, name: '' }
      ]
    },
    {
      path: '/User',
      name: '',
      redirect: 'noredirect',
      component: index,
      children: [
        { path: 'user', component: user, name: '' }
      ]
    },
    {
      path: '/functionA',
      name: '',
      redirect: 'noredirect',
      component: index,
      children: [
        { path: 'table', component: tableA, name: '' },
        { path: 'form', component: formA, name: '' }
      ]
    },
    {
      path: '/functionB',
      name: '',
      redirect: 'noredirect',
      component: index,
      children: [
        { path: 'table', component: tableB, name: '' }
      ]
    },
    { path: '*', redirect: '/index', hidden: true }
  ]
})
