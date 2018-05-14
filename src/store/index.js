/**
 * Created by Administrator on 2017/7/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'
require('core-js/es6/promise')
Vue.use(Vuex)

import mutations from './mutations'
import actions from './actions.js'
export function createStore () {
 return new Vuex.Store({
    modules: {
      mutations
    },
    actions
  })
}

