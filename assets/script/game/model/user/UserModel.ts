import EventManager from "../../../framework/event/EventManager";
import { OutQuestionList, OutUserRegister, OutUserLogin, OutUserInfo, OutBankAccount, InUserRegister, InBankAccount } from "./UserData";
import Net from "../../common/Net";
import { EnumUrl } from "../../config/EnumUrl";
import Str from "../../../framework/util/Str";
import { EnumErrorHttp } from "../../config/ErrorCore";
import { ConstTxt } from "../../config/ConstTxt";
import WorldUi from "../../WorldUi";
import Tool from "../../common/Tool";


// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


//发送http请求后返回的用户事件
export enum UserEvent
{
    securityQuestion = 0,   //获取问题列表
    checkAccount,           //用户名检测
    userRegister,           //用户注册
    userLogin,              //用户登录
    getUserInfo,            //获取用户信息
    getMyUserInfo,          //获取我的用户信息
    getBankAccount,         //获取银行信息
    updateBankAccount,      //修改银行信息
    balanceEve,             //更新用户余额事件
}

/**
 * 用户数据模型
 */
export default class UserModel extends EventManager
{
    private _token: string = null;          //登录后的用户token
    private _userId: string = null;         //用户id
    private _balance: number = null;        //玩家余额，分

    private _questionList:  OutQuestionList = null;              //密保问题列表
    private _userRegister:  OutUserRegister = null;              //用户注册返回数据
    private _loginInfo:     OutUserLogin    = null;              //用户登录
    private _myUserInfo:    OutUserInfo     = null;              //我的用户信息
    private _userInfo:      OutUserInfo     = null;              //用户信息
    private _bankAccount:   OutBankAccount  = null;              //用户银行信息
    
    public get userId() { return this._userId; }                //返回用户id
    public set token(token: string) {this._token = token;}      //设置用户token
    public get token() {return this._token;}                    //返回用户token
    public get registerResult() {return this._userRegister;}    //返回用户注册信息
    public get myUserInfo() {return this._myUserInfo;}          //返回我的用户信息
    public get loginInfo() {return this._loginInfo;}            //用户登录信息
    public get userInfo() {return this._userInfo;}              //返回用户信息
    public get bankAccount() {return this._bankAccount;}        //用户银行信息
    public get balance() {return this._balance;}                    //玩家余额，分

    //初始化
    public init() {}

    //获取密保问题列表
    public getQuestionList()
    {
        Net.post(EnumUrl.securityQuestion, this.getQuestionListRes.bind(this));
    }

    /**
     * 用户名检测，该接口未使用
     * @param token token
     * @param captcha token对应的验证码
     * @param account 
     */
    public checkAccount(token: string, captcha: string, account: string)
    {
        let nParm = EnumUrl.accountParm;        
        let parm = Str.format(nParm, token, captcha, account);  //发送的get数据      
        Net.post(EnumUrl.user, this.checkAccountRes.bind(this), parm);
    }

    /**
     * 用户注册
     * @param token token
     * @param captcha token对应的验证码
     * @param data 注册数据
     */
    public userRegister(token: string, captcha: string, data: InUserRegister)
    {
        let nParm = EnumUrl.tokenCaptchaParm;        
        let parm = Str.format(nParm, token, captcha);  //发送的get数据      
        Net.post(EnumUrl.user, this.userRegisterRes.bind(this), parm, data);
    }

    //用户登录
    public userLogin(token: string, captcha: string, data: InUserRegister)
    {   
        //发送的get数据
        let parm = Str.format(EnumUrl.tokenCaptchaParm, token, captcha);      
        Net.post(EnumUrl.login, this.userLoginRes.bind(this), parm, data);
    }

    //获取我的用户信息
    public getMyUserInfo()
    { 
        Net.getTicket(EnumUrl.userMe, this.getMyUserInfoRes.bind(this));
    }

    //获取某用户信息
    public getUserInfo(userId: string)
    { 
        Net.postTicket(EnumUrl.user + "/" + userId, this.getUserInfoRes.bind(this));
    }    

    //获取用户银行信息
    public getBankAccount()
    {
        let url = Str.format(EnumUrl.bankAccount, this._userId);
        Net.getTicket(url, this.getBanAccountkRes.bind(this));
    }

    //修改用户银行信息
    public updateBankAccount(bank: InBankAccount)
    {
        let url = Str.format(EnumUrl.bankAccount, this._userId);
        Net.postTicket(url, this.updateBanAccountkRes.bind(this), null, bank);
    }

    //设置用户余额
    public setBalance(balance: number)
    {
        this._balance = balance;                    //设置余额
        this.dispatchEvent(UserEvent.balanceEve);   //发送更新余额事件
    }

    //获取问题列表，返回数据
    private getQuestionListRes(code: any, ret: string)
    {
        this.dispatchEvent(UserEvent.securityQuestion);
    }

    //用户名检测，返回数据
    private checkAccountRes(code: any, ret: string)
    {
        this.dispatchEvent(UserEvent.checkAccount);
    }

    //用户注册，返回数据
    private userRegisterRes(code: any, ret: string)
    {
        this._userRegister = null;
        let res = Tool.getHttpRes(ret);
        if (res.error == EnumErrorHttp.success || null != res.result)
        {
            this._userRegister = res.result;            //保存注册信息
            this._userId = this._userRegister.id;       //保存用户id
            this.dispatchEvent(UserEvent.userRegister);
        }            
        else if (res.error == EnumErrorHttp.object_conflict)
        {
            //用户名已经存在
            WorldUi.dialog.showError(ConstTxt.accountExist);
        } 
        else if (res.error == EnumErrorHttp.invalid_data)
        {
            //账户或验证码错误，请核查
            WorldUi.dialog.showError(ConstTxt.registerError);
        }  
    }

    //用户登录返回
    private userLoginRes(code: any, ret: string)
    {
        this._loginInfo = null;
        let res = Tool.getHttpRes(ret);        
        if (res.error == EnumErrorHttp.success)
        {
            this._loginInfo = res.result;
            this._userId    = this._loginInfo.userId;   //保存用户id
            this._token     = this._loginInfo.token;    //用户token
            return this.dispatchEvent(UserEvent.userLogin);
        }
        else if (res.error == EnumErrorHttp.invalid_credentials)
            return WorldUi.dialog.showError(ConstTxt.loginPwdError);//账户或密码错误
        else if (res.error == EnumErrorHttp.invalid_data)
            return WorldUi.dialog.showError(ConstTxt.codeError);//验证码错误
    }

    //我的用户信息返回
    private getMyUserInfoRes(code: any, ret: string)
    {
        this._myUserInfo = Tool.getHttpResult(ret);   //用户信息
        this.dispatchEvent(UserEvent.getMyUserInfo);
    }

    //用户信息返回
    private getUserInfoRes(code: any, ret: string)
    {
        this._userInfo = Tool.getHttpResult(ret);    //用户信息
        this.dispatchEvent(UserEvent.getUserInfo);
    }

    //用户银行信息返回
    private getBanAccountkRes(code: any, ret: string)
    {
        this._bankAccount = Tool.getHttpResult(ret);    //用户信息
        this.dispatchEvent(UserEvent.getBankAccount);
    }

    //修改用户银行信息返回
    private updateBanAccountkRes(code: any, ret: string)
    {
        this._bankAccount = Tool.getHttpResult(ret);    //用户信息
        this.dispatchEvent(UserEvent.updateBankAccount);
        this.dispatchEvent(UserEvent.getBankAccount);
    }


}
