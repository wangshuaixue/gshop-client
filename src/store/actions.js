import {
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS
} from './mutation-types'

import {
  reqAddress,
  reqFoodTypes,
  reqShops,
  reqUser,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from '../api'

export default {



//获取地址信息的 包含异步的action
  async getAddress({commit,state}){ //因为经纬度在状态里面有
    //发送异步请求
    const {latitude,longitude}=state
    const geohash=`${latitude},${longitude}`
    const result= await reqAddress(geohash)      //需要同步编码用await
    if(result.code===0){
      //提交mutation
      const address=result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  
  //异步获取分类列表，轮播
  async getCategorys({commit,state}){
    //发送异步请求
    const result= await reqFoodTypes()      //需要同步编码用await
    if(result.code===0){
      //提交mutation
      const categorys=result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  
  //异步获取商品分类
  async getShops({commit,state}){ //因为经纬度在状态里面有
    //发送异步请求
    const {latitude,longitude}=state
    const result= await reqShops({latitude,longitude})      //需要同步编码用await
    if(result.code===0){
      //提交mutation
      const shops=result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  //异步获取商品分类
  async getShops({commit,state}){ //因为经纬度在状态里面有
    //发送异步请求
    const {latitude,longitude}=state
    const result= await reqShops({latitude,longitude})      //需要同步编码用await
    if(result.code===0){
      //提交mutation
      const shops=result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  
  //保存(记录)用户信息
  saveUser({commit},user){
    commit(RECEIVE_USER,{user})
  },
  
  //异步获取用户信息
  async getUser({commit}){
    //发送异步请求
    const result=await reqUser()
    if(result.code===0){
      //提交mutation
      const user=result.data
      commit(RECEIVE_USER,{user})
    }
  },
  
  //异步请求退出
  async logout({commit}){
    const result = await reqLogout()
    if(result.code===0){
      commit(RESET_USER)
    }
  },
  
  //mock  异步获取商品列表
  async getShopGoods ({commit},callback) {
    const result = await reqShopGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      //有数据之后再调用
      callback && callback()
    }
  },
  
  // 异步获取评价列表
  async getShopRatings ({commit}) {
    const result = await reqShopRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },
  
  // 异步获取商品列表
  async getShopInfo ({commit}) {
    const result = await reqShopInfo()
    if(result.code===0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
  
}
