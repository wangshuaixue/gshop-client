// import MSite from '../pages/MSite/MSite.vue'
// import Profile from '../pages/Profile/Profile.vue'
// 优化  路由组件懒加载,需要的时候才加载，不需要的时候不用加载，上面那种的话页面刚上来就会全部加载所有路由组件
const MSite = () => import('../pages/MSite/MSite.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'


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
     path:'/shop',
     component:Shop,
     children:[
       {
         path:'/shop/goods',
         component:ShopGoods
       },
       {
         path:'/shop/ratings',
         component:ShopRatings
       },
       {
         path:'/shop/info',
         component:ShopInfo
       },
       {
         path:'',
         redirect:'/shop/goods'
       }
     ]
    },
    {
      path:'/',
      redirect:'/msite'
    }
    
  ]
  
})
