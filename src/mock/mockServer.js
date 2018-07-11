/*使用mockjs模拟数据接口*/

import Mock from 'mockjs'
import data from './data.json'  //已经json.parse解析了，这是个js对象

//获取goods的接口
Mock.mock('/goods',{code:0,data:data.goods})  //不需要代理，不用发出去这个数据

//获取rating的接口
Mock.mock('/ratings',{code:0,data:data.ratings})  //只要这段代码执行过一遍之后，ajax就可以发送请求了

// 获取info的接口
Mock.mock('/info',{code:0,data:data.info})


