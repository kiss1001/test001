import EventManager from "../../../framework/event/EventManager";
import { OutLoginLogs } from "./RecordData";
import UserModel from "./UserModel";
import WorldModel from "../../WorldModel";
import Str from "../../../framework/util/Str";
import { EnumUrl } from "../../config/EnumUrl";
import Net from "../../common/Net";
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

//请求游戏记录返回的事件类型
export enum RecordEvent
{
    loginLogs = 0,      //用户登录记录
}

/**
 * 游戏记录，包括登录记录。转账记录等
 */
export default class RecordModel extends EventManager
{
    //数据
    private _loginLogs:     OutLoginLogs[]  = null;         //登录数据
    
    public get loginLog() { return this._loginLogs; }       //返回登录记录

    //外部模型
    private user:           UserModel       = null;         //用户模型

    //初始化
    public init()
    {
        this.user = WorldModel.user;
    }

    //请求用户登录记录
    public getLoginLog()
    {
        let url = Str.format(EnumUrl.loginLogs, this.user.userId)
        Net.getTicket(url, this.getLoginLogRes.bind(this));
    }

    //请求用户登录记录，返回
    private getLoginLogRes(code: any, ret: string)
    {
        this._loginLogs = Tool.getHttpResult(ret);    //登录数据
        this.dispatchEvent(RecordEvent.loginLogs);
    }
}
