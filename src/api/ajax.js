//ajax函数封装模块
import axios from 'axios'
const baseUrl=''

export default function ajax(url,data={},type='GET') {
  return new Promise(function(resolve,reject){
    let promise
    //执行异步ajax请求的代码
    url=baseUrl+url
    if(type==='GET'){
      //发送get请求，需要拼接请求参数
      // data: {username: tom, password: 123}
      // paramStr: username=tom&password=123
      let paramStr=''
      Object.keys(data).forEach(key=>{
        paramStr+= key+'='+data[key]+'&'
      })
      if(paramStr){
        paramStr=paramStr.substring(0,paramStr.length-1)
      }
      promise=axios.get(url+'?'+paramStr) //使用axios发送get请求
    }else{
      promise=axios.post(url,data)
    }
    promise
      .then(response=>{  //成功调用
        const result=response.data
        resolve(result)
      })
      .catch(error=>{  //失败调用
        reject(error)
      })
    
  })
}



