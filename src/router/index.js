import MSite from '../pages/MSite/MSite.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Login from '../pages/Login/Login.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes:[
    {
      path:'/msite',
      component:MSite,
      meta: {
        isShow: true
      }
    },
    {
      path:'/order',
      component:Order,
      meta: {
        isShow: true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta: {
        isShow: true
      }
    },
    {
      path:'/search',
      component:Search,
      meta: {
        isShow: true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect:'/msite'
    }
    
  ]
  
})
