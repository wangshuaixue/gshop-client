import {
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_ADDRESS
} from './mutation-types'

import {
  reqAddress,
  reqFoodTypes,
  reqShops
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
  
  
  
  
}
