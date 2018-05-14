import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from './router.config'
Vue.use(Router)

export function createRouter (){
    return new Router({
  routes: routerConfig,
  // 切换路径模式，变成history模式
  mode: 'history'
    })
}

