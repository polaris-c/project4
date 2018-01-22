import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    item: {}
  },
  mutations: {
    tableToForm (state, row) {
      state.item = row
      console.log('Vuex current item:', state.item)
    },
    fromReqData (state) {

    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app1',
  router,
  store,
  render: h => h(App)
})
