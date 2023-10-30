//对于axios的二次封装
import axios from 'axios'
//1.利用axios对象的方法创建axios实例
const requests = axios.create({
    //接口路径中都带有api
    //发起请求时自动携带api
    baseURL:"/mock",
    //请求超时的时间
    timeout:5000
})

//请求拦截器

requests.interceptors.request.use((config)=>{
    //config：配置对象，对象里面有一个header请求头重要属性
    return config
})

//响应拦截器
requests.interceptors.response.use((res)=>{
    return res.data
},(err)=>{
    return Promise.reject(new Error("false"))
})

export default requests