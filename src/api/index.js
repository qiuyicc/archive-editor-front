//当前文档对接口进行统一管理
import requests  from "./requests";
//三级联动接口
export const reqRegister = (registerForm) =>{
    //发请求
    return requests({
        url:"/user/register",
        method:'post',
        data:registerForm,
    })
}

export const reqLogin = (loginForm) =>{
    return requests({
        url:'/user/login',
        method:'post',
        data:loginForm
    })
}