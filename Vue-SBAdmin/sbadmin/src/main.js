import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import VueSession from 'vue-session'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import vue router
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(VueSession)

const router = new VueRouter({
  routes: Routes,
  mode: 'hash',
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
