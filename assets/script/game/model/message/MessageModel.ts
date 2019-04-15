import EventManager from "../../../framework/event/EventManager";
import Net from "../../common/Net";
import { MessageType } from "../protoType/MessageType";
import { pro } from "../protoType/pro";
import UserModel from "../user/UserModel";
import WorldModel from "../../WorldModel";

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
 * 消息事件
 */
export enum MessageEvent
{
    broadcastRes = 0,       //广播响应
    broadcastEve,           //广播事件
}

/**
 * 消息
 */
export class MessageModel extends EventManager
{
    private _user: UserModel = null;              //用户数据
    private _broadcast: pro.BroadcastEvent = null;//广播用户消息事件
    
    public init()
    {        
        this._user = WorldModel.user;
        Net.wsEvent.addListener(MessageType.BroadcastResponse, this.broadcastResponse.bind(this));//广播响应
        Net.wsEvent.addListener(MessageType.BroadcastEvent, this.broadcastEvent.bind(this));//广播用户消息事件
    }

    //我发送聊天数据
    public myBroadcastRequest(content: string)
    {
        let msg = new pro.Message();
        msg.content = content;                      //发送内容
        msg.from = this._user.myUserInfo.nickName;  //玩家名字
        this.broadcastRequest(msg);
    }

    //任何人发送聊天数据
    public broadcastRequest(msg: pro.Message)
    {
        let broadcast = new pro.BroadcastRequest();
        broadcast.message = msg;                    //聊天数据
        Net.wsSendBody(MessageType.BroadcastRequest, broadcast);
    }
    
    //广播响应
    private broadcastResponse(res: pro.BroadcastResponse, code: pro.ErrorCode)
    {
        this.dispatchEvent(MessageEvent.broadcastRes);
    }

    //广播用户消息事件
    private broadcastEvent(res: pro.BroadcastEvent, code: pro.ErrorCode)
    {
        this._broadcast = res;
        this.dispatchEvent(MessageEvent.broadcastEve);
    }

}
