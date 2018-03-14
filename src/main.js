// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/permission'
import axios from 'axios'
import store from './store'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI)

Vue.prototype.$axios = axios
Vue.config.productionTip = false


Vue.prototype.back = (route) => {
    route.animate = 2
    history.go(-1)
}

// 跳转文章页
Vue.prototype.skip = (route, id) => {
    route.push('/article/'+id)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
