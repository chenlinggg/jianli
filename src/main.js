import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import  Vuesax  from 'vuesax'
import 'vuesax/dist/vuesax.css'
import router from './router/router'
import VueRouter from 'vue-router'
import './base/base.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuesax)
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
