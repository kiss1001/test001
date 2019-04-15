
import EventManager from "../framework/event/EventManager";
import UserModel from "./model/user/UserModel";
import RecordModel from "./model/user/RecordModel";
import { ConnectModel } from "./model/connect/ConnectModel";
import CodeModel from "./model/connect/CodeModel";
import { BrnnModel } from "./model/brnn/BrnnModel";
import { MessageModel } from "./model/message/MessageModel";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


/**
 * 世界模型，可以访问到所有模型
 */
export default class WorldModel
{
    //初始化游戏model
    public static init()
    {
        this.connect.init();        //初始化ws
        this.code.init();           //初始化验证码model
        this.user.init();           //初始化用户model
        this.record.init();         //初始化记录
        this.brnn.init();           //初始化百分牛牛model
        this.message.init();        //初始化聊天model
    }

    //验证码
    public static get code(): CodeModel
    {
        return CodeModel.getInstance(CodeModel);
    }

    //返回用户模型
    public static get user(): UserModel
    {
        return UserModel.getInstance(UserModel);
    }

    //返回记录模型
    public static get record(): RecordModel
    {
        return RecordModel.getInstance(RecordModel);
    }
    
    //返回web Scoket连接
    public static get connect(): ConnectModel
    {
        return ConnectModel.getInstance(ConnectModel);
    }

    //百人牛牛
    public static get brnn(): BrnnModel
    {
        return BrnnModel.getInstance(BrnnModel);
    }

    //聊天消息
    public static get message(): MessageModel
    {
        return MessageModel.getInstance(MessageModel);
    }
}
