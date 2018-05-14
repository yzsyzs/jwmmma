import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store/index.js'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'
import titleMixin from './util/title'
import dailogVue from './components/dailogInfo'
Vue.use(dailogVue)
// 全局过滤器
import filters from './util/index.js'
// import axios from 'axios'
// 引入api设置成vue的方法
import api from './api/api'
import 'animate.css'

// require("babel-polyfill")

// Vue.config.productionTip = false
// import * as filters from './util/filters'
// mixin for handling title
Vue.mixin(titleMixin)

// 引入全局过滤器设置给Vue
Object.keys(filters).forEach(function (key) {
    Vue.filter(key, filters[key])
})
//测试
// if (isBrowser) {
// var BaiduMap = require('vue-baidu-map')
// Vue.use(BaiduMap, {
// // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
// ak: '7afiGvuZeXBnciPvdfGrxcGDRMpLeoOw'
// })
// }
// 设置全局api请求接口
Vue.prototype.$http = api
// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp () {
  // create store and router instances
  const store = createStore()
  const router = createRouter()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}
