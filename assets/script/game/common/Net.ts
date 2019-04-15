import { EnumUrl } from "../config/EnumUrl";
import HttpManager from "../../framework/net/HttpManager";
import WorldModel from "../WorldModel";
import Json from "../../framework/util/Json";
import EventManager from "../../framework/event/EventManager";
import WSManager, { WSManagerEvent } from "../../framework/net/WSManager";
import { Fun1 } from "../../framework/util/Func";
import { pro } from "../model/protoType/pro";
import { ProFactory } from "../model/protoType/ProFactory";
import { MessageType } from "../model/protoType/MessageType";

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
 * ws网络连接事件
 */
export enum NetEvent
{
    wsOpen = 0,     //webScoket连接成功
    wsClose,        //webScoket连接关闭
}

/**
 * web scoket事件
 */
export class WebScoketEvent extends EventManager
{

}

/**
 * http、webScoket请求类
 */
export default class Net extends EventManager
{
    //构造函数
    constructor()
    {
        super();

        //监听ws事件
        Net.ws.addListener(WSManagerEvent.open, this.onWSOpen.bind(this));
        Net.ws.addListener(WSManagerEvent.message, this.onWSMessage.bind(this));
        Net.ws.addListener(WSManagerEvent.close, this.onWSClose.bind(this));
    }

    /**
     * 返回http
     */
    public static get http()
    {
        return HttpManager.getInstance(HttpManager);
    }

    /**
     * 返回web scoket
     */
    public static get ws()
    {
        return WSManager.getInstance(WSManager);
    }

    /**
     * 返回ws业务逻辑监听管理器
     */
    public static get wsEvent()
    {
        return WebScoketEvent.getInstance(WebScoketEvent);
    }

    /**
     * 发送post数据请求
     * @param path 子路径
     * @param callback 回调函数
     * @param params get参数
     * @param body post参数,obj格式
     */
    public static post(path: string, callback: (error: any, ret: string) => void, 
                    params: string = null, body: any = null)
    {
        let BaseUrl = EnumUrl.baseUrl;                              //基础url
        let jsData = (null != body) ? Json.obj2Str(body) : null;   //post数据，json格式字符串
        this.http.post(BaseUrl, path, params, jsData, callback);
    }

    /**
     * 发送post数据请求，会自动带上用户token
     * @param path 子路径
     * @param callback 回调函数
     * @param params get参数
     * @param body post参数,obj格式    
     */
    public static postTicket(path: string, callback: (error: any, ret: string) => void,
                            params: string = null, body: any = null)
    {
        let BaseUrl = EnumUrl.baseUrl;      //基础url
        let jsData = Json.obj2Str(body);    //post数据，json格式字符串
        let head = ["x-rainier-ticket", WorldModel.user.token];
        this.http.post(BaseUrl, path, params, jsData, callback, head);
    }

    /**
     * 发送get数据请求，会自动带上用户token
     * @param path 子路径
     * @param callback 回调函数
     * @param params get参数
     */
    public static getTicket(path: string, callback: (error: any, ret: string) => void,
                            params: string = null)
    {
        let BaseUrl = EnumUrl.baseUrl;      //基础url
        let head = ["x-rainier-ticket", WorldModel.user.token];
        this.http.get(BaseUrl, callback, path, params, head);
    }

    /**
     * 根据消息类型，发送ws数据
     * @param type 消息类型
     */
    public static wsSend(type: MessageType)
    {
        //消息对应的2进制数据
        let req = ProFactory.getReqBinByType(type);
        //发送数据
        Net.ws.send(req);
    }

    /**
     * 根据消息类型和发送内容，发送ws数据
     * @param type 消息类型
     * @param body 内容
     */
    public static wsSendBody(type: MessageType, body)
    {
        let req = ProFactory.getReqBinByBody(MessageType.BankerRequest, body);
        Net.ws.send(req);
    }

    /**
     * 进行web Scoket连接
     * @param url 连接url
     */
    public wsConnect(url: string)
    {
        Net.ws.connect(url);
    }


    //ws连接成功
    private onWSOpen()
    {
        this.dispatchEvent(NetEvent.wsOpen);
    }

    //收到ws数据
    private onWSMessage(event: any)
    {
        //取2进制数据
        let buf         = new Uint8Array(event);
        //取消息数据
        let res         = pro.ResponseMessage.decode(buf);
        //取body对应的类
        let bodyClass   = ProFactory.getClassByType(res.messageType);
        //取body
        let body        = bodyClass.decode(res.body);
        //根据消息类型分发事件
        Net.wsEvent.dispatchEvent(res.messageType, body, res.errorCode);
    }

    //ws连接失败
    private onWSClose()
    {
        this.dispatchEvent(NetEvent.wsClose);
    }

    
}
