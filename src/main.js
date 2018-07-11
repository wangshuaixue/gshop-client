import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'
import router from './router'
import store from './store'

import './mock/mockServer' //只需要引入即可,保证这个文件可以被打包

Vue.component(Button.name, Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

//webpack打包是通过入口文件来解析执行，打包是这里来看打包谁的
