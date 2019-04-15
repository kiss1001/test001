import Singleton from "../util/Singleton";
import { Fun1 } from "../util/Func";
import Str from "../util/Str";
import EventManager from "../event/EventManager";
import Log from "../log/Log";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

//ws连接事件
export enum WSManagerEvent
{
    open = 0,   //连接成功事件
    message,    //收到服务端消息事件
    close,      //连接关闭事件
}

/**
 * web scoker 管理，每次断线后会自动进行2次重连，连续2次重连失败才通知监听方连接已关闭
 */
export default class WSManager extends EventManager
{
    sock: WebSocket         = null;     //web scoket
    binaryType: BinaryType  = null;     //web scoket 连接类型
    url: string             = null;     //连接url
    messageCacheArr: any[]  = [];       //还未发送的缓存数据
    connNum                 = 0;        //已经自动重连次数
    connNumMax              = 2;        //断线后自动重连最大次数    

    /**
     * 开始连接
     * @param url 连接url
     * @param binaryType 传输数据类型
     */
    public connect(url, binaryType: BinaryType = "arraybuffer")
    {
        this.close();                       //关闭已有连接
        this.connNum = 0;                   //重连次数置0
        this.autoConnect(url, binaryType);  //开始自动连接
    }

    /**
     * 发送数据
     * @param data 数据
     */
    public send(data: any)
    {
        if (this.isOpen())                      //当前连接是否打开状态
        {
            this.sendMessageCache();            //发送缓存中数据
            this.sock.send(data);               //正常发送消息            
        }
        else
        {            
            this.messageCacheArr.push(data);    //不能发送消息就把数据写入缓存
        }        
    }

    /**
     * 连接是否打开状态，打开状态才能发送数据
     */
    private isOpen(): boolean
    {
        return (null != this.sock) && (this.sock.readyState == WebSocket.OPEN)
    }

    /**
     * 是否可以进行连接请求。true:可以
     */
    private isCanConnect(): boolean
    {
        return (null == this.sock)                              //为空，可以请求连接。
            || (this.sock.readyState != WebSocket.CONNECTING    //或者，不是处于开始请求连接状态
                && this.sock.readyState != WebSocket.OPEN)      //且不是连接成功状态
    }

    /**
     * 开始自动连接，每次连接次数都+1
     * @param url 连接url
     * @param binaryType web socket 连接类型
     */
    private autoConnect(url = null, binaryType: BinaryType = null)
    {
        //不能请求状态，直接返回
        //if (!this.isCanConnect()) return;

        if (!Str.isEmpty(url)) this.url = url;
        if (!Str.isEmpty(binaryType)) this.binaryType = binaryType;

        this.sock               = new WebSocket(this.url);
        this.sock.binaryType    = this.binaryType;

        //监听连接事件
        this.sock.onopen    = this.onOpen.bind(this);
        this.sock.onmessage = this.onMessage.bind(this);
        this.sock.onclose   = this.onClose.bind(this);
        this.sock.onerror   = this.onError.bind(this);

        //重连次数加1
        this.connNum += 1;
    }

    /**
     * 发送缓存中数据
     */
    private sendMessageCache()
    {
        while (this.messageCacheArr.length > 0)
        {
            let cache = this.messageCacheArr.shift();
            this.sock.send(cache); //发送数据
        }
    }

    /**
     * 连接成功
     */
    private onOpen()
    {        
        this.connNum = 0;                           //重连次数置0
        this.dispatchEvent(WSManagerEvent.open);    //发送连接成功事件
    }

    /**
     * 接收到数据
     * @param event 
     */
    private onMessage(event: any)
    {
        //通知已经接收到消息
        this.dispatchEvent(WSManagerEvent.message, event.data);
    }

    /**
     * 连接被断开
     */
    private onClose()
    {                
        this.reConnectOrOnClose();  //重新连接或者发送关闭事件
    }

    /**
     * 连接出错
     * @param event 
     */
    private onError(event)
    {        
        Log.error(event);
        this.reConnectOrOnClose();  //重新连接或者发送关闭事件
    }    

    /**
     * 关闭连接
     */
    private close()
    {
        if (this.sock != null)
        {
            this.sock.close();
            this.sock = null;
        }
    }    

    /**
     * 再次连接，或者不重连并发送监听方关闭事件
     */
    private reConnectOrOnClose()
    {
        this.close();
        if (this.connNum <= this.connNumMax)            //关闭连接
        {
            this.autoConnect();
        }
        else
        {            
            this.dispatchEvent(WSManagerEvent.close);   //发送连接关闭事件
        }
    }
    

}
