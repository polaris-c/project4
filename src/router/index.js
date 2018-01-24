import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '../views/index'

import guide from '../views/guide'

import user from '../views/User/user'

import A1table from '../views/functionA/A1table'
import A1add from '../views/functionA/A1add'
import A1edit from '../views/functionA/A1edit'
import A1details from '../views/functionA/A1details'
import A2table from '../views/functionA/A2table'
import A2add from '../views/functionA/A2add'
import A2edit from '../views/functionA/A2edit'

import tableB from '../views/functionB/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      redirect: '/guide',
      component: index,
      children: [
        { path: 'guide', component: guide, name: '' }
      ]
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
      path: '*',
      name: '',
      redirect: '/guide',
      component: index,
      children: [
        { path: 'guide', component: guide, name: '' }
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
        { path: 'A1table', component: A1table, name: '' },
        { path: 'A1add', component: A1add, name: '' },
        { path: 'A1edit', component: A1edit, name: '' },
        { path: 'A1details', component: A1details, name: '' },

        { path: 'A2table', component: A2table, name: '' },
        { path: 'A2add', component: A2add, name: '' },
        { path: 'A2edit', component: A2edit, name: '' }
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
    }//,
    // { path: '*', redirect: '/index', hidden: true }
  ]
})
