import EventManager from "../../../framework/event/EventManager";
import Net, { NetEvent } from "../../common/Net";
import { EnumUrl } from "../../config/EnumUrl";
import Str from "../../../framework/util/Str";
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

//连接返回的事件类型
export enum ConnectType
{
    conSuccess = 0,     //连接成功
    conFail,            //连接失败
    conLose,            //失去连接
}

//连接
export class ConnectModel extends EventManager
{
    private user: UserModel = null;
    public init()
    {
        this.user = WorldModel.user;

        Net.getInstance(Net).addListener(NetEvent.wsOpen,   this.wsOpenRes.bind(this));
        Net.getInstance(Net).addListener(NetEvent.wsClose,  this.wsCloseRes.bind(this));
    }

    //开始连接服务器
    public connect()
    {
        let url = Str.format(EnumUrl.wsUrl, this.user.token);
        Net.ws.connect(url);
    }

    //webScoket连接成功回调
    private wsOpenRes(msg: any)
    {

    }

    //webScoket连接失败回调
    private wsCloseRes(msg: any)
    {

    }
}
