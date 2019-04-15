// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

/**
 * 项目远程连接枚举
 */
export enum EnumUrl
{
    //http请求基础连接
    baseUrl = "https://test.jdbishang.com",
    //webScoket连接
    wsUrl = "wss://test.jdbishang.com/ws/game?_ticket={0}",

    //请求验证码url
    httpCode = "/Home/CaptchaImage?token=",


    //用户相关api
    user                = "/api/User",
    userMe              = "/api/User/Me",                             //获取当然登录用户信息
    tokenCaptchaParm    = "token={0}&captcha={1}",                    //用户注册参数
    accountParm         = "token={0}&captcha={1}&account={2}",        //检测用户名参数

    login               = "/api/User/Login",                          //用户登录
    securityQuestion    = "/api/SecurityQuestion",                    //获取用户密保问题列表
    securityAnswers     = "/api/User/{0}/SecurityAnswers",            //保存用户密保答案 {0}:用户id
    
    bankAccount         = "/api/User/{0}/BankAccount",                //获取用户银行信息 {0}:用户id

    loginLogs           = "/api/User/{0}/LoginLogs",                 //用户登录记录t
}

