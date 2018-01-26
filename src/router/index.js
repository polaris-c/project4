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

import Btable from '../views/functionB/Btable'
import Badd from '../views/functionB/Badd'
import Bedit from '../views/functionB/Bedit'
import Bdetails from '../views/functionB/Bdetails'

import C1table from '../views/functionC/C1table'
import C1add from '../views/functionC/C1add'
import C1edit from '../views/functionC/C1edit'
import C1details from '../views/functionC/C1details'

import C2aTable from '../views/functionC/C2a-table'
import C2aAdd from '../views/functionC/C2a-add'
import C2aEdit from '../views/functionC/C2a-edit'
import C2aDetails from '../views/functionC/C2a-details'

import C2bTable from '../views/functionC/C2b-table'
import C2bAdd from '../views/functionC/C2b-add'
import C2bEdit from '../views/functionC/C2b-edit'
import C2bDetails from '../views/functionC/C2b-details'

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
        { path: 'Btable', component: Btable, name: '' },
        { path: 'Badd', component: Badd, name: '' },
        { path: 'Bedit', component: Bedit, name: '' },
        { path: 'Bdetails', component: Bdetails, name: '' }
      ]
    },
    {
      path: '/functionC',
      name: '',
      redirect: 'noredirect',
      component: index,
      children: [
        { path: 'C1table', component: C1table, name: '' },
        { path: 'C1add', component: C1add, name: '' },
        { path: 'C1edit', component: C1edit, name: '' },
        { path: 'C1details', component: C1details, name: '' },

        { path: 'C2aTable', component: C2aTable, name: '' },
        { path: 'C2aAdd', component: C2aAdd, name: '' },
        { path: 'C2aEdit', component: C2aEdit, name: '' },
        { path: 'C2aDetails', component: C2aDetails, name: '' },

        { path: 'C2bTable', component: C2bTable, name: '' },
        { path: 'C2bAdd', component: C2bAdd, name: '' },
        { path: 'C2bEdit', component: C2bEdit, name: '' },
        { path: 'C2bDetails', component: C2bDetails, name: '' }
      ]
    }
    // { path: '*', redirect: '/index', hidden: true }
  ]
})
