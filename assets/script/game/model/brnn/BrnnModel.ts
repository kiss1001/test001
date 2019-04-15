import EventManager from "../../../framework/event/EventManager";
import Net from "../../common/Net";
import { MessageType } from "../protoType/MessageType";
import { pro } from "../protoType/pro";
import { ProFactory } from "../protoType/ProFactory";
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
 * 百人牛牛事件
 */
export enum BrnnEvent
{
    loginRes = 0,           //登录响应
    exitGameRes,            //退出游戏响应
    bankerRes,              //抢庄响应
    cancelBankerRes,        //取消抢庄响应
    betRes,                 //下注响应
    checkRes,               //抢红包响应
    listGameRecordsRes,     //获取历史订单响应    
    playerEnterEve,         //玩家进入游戏事件
    playExitEve,            //玩家离开游戏事件
    gameStateUpdateEve,     //游戏状态更新事件
    gameModeUpdatedEve,     //游戏模式更新事件
    bankerEve,              //抢庄事件
    betEve,                 //下注事件
    redPacketEve,           //发红包事件
    checkEve,               //抢红包事件
    bankerCanceledEve,      //退庄事件
    settlementEve,          //结算事件
    userBalanceEve,         //玩家更新金币事件
    configUpdatedEve,       //游戏配置更新事件
    forcePlayerExitEve,     //强制用户退出游戏
}

/**
 * 百人牛牛，model
 */
export class BrnnModel extends EventManager
{
    private _user: UserModel = null;    //用户信息

    private _loginRes: pro.LoginResponse = null;//登录响应
    private _listGameRecords: pro.ListGameRecordsResponse = null;//历史订单
    private _playEnter: pro.PlayerEnterEvent = null;//玩家进入游戏事件
    private _playExit: pro.PlayerExitEvent = null;//玩家离开游戏事件
    private _gameStateUpdated: pro.GameStateUpdatedEvent = null;//游戏状态更新事件
    private _gameModeUpdated: pro.GameModeUpdatedEvent = null;//游戏模式更新事件
    private _banker: pro.BankerEvent = null;//抢庄事件
    private _bet: pro.BetEvent = null;//下注事件
    private _redPacket: pro.RedPacketEvent = null; //发红包事件
    private _checkEve: pro.CheckEvent = null;//抢红包事件
    private _bankerCanceled: pro.BankerCanceledEvent = null;//退庄事件
    private _settlement: pro.SettlementEvent = null;//结算事件
    private _userBalance: pro.UserBalanceUpdatedEvent = null;//玩家更新金币事件
    private _configUpdated: pro.ConfigUpdatedEvent = null;//游戏配置更新事件
    private _forcePlayerExit: pro.ForcePlayerExitEvent = null;//强制用户退出游戏    

    public get loginRes() { return this._loginRes; }
    public get listGameRecords() { return this._listGameRecords; }
    
    public get playEnter() { return this._playEnter; }
    public get playExit() { return this._playExit; }
    public get gameStateUpdated() { return this._gameStateUpdated; }
    public get gameModeUpdated() { return this._gameModeUpdated; }
    public get banker() { return this._banker; }
    public get bet() { return this._bet; }
    public get redPacket() { return this._redPacket; }
    public get check() { return this._checkEve; }
    public get bankerCanceled() { return this._bankerCanceled; }
    public get settlement() { return this._settlement; }
    public get userBalance() { return this._userBalance; }
    public get configUpdated() { return this._configUpdated; }
    public get forcePlayerExit() { return this._forcePlayerExit; }


    //初始化
    public init()
    {        
        this._user = WorldModel.user;       //设置用户模型信息

        Net.wsEvent.addListener(MessageType.LoginResponse , this.loginResponse.bind(this));//登录相应
        Net.wsEvent.addListener(MessageType.ExitGameResponse, this.exitGameResponse.bind(this));//退出游戏响应
        Net.wsEvent.addListener(MessageType.BankerResponse, this.bankerResponse.bind(this));//抢庄响应
        Net.wsEvent.addListener(MessageType.CancelBankerRespose, this.cancelBankerRespose.bind(this));//取消抢庄响应
        Net.wsEvent.addListener(MessageType.BetResponse, this.betResponse.bind(this));//下注响应
        Net.wsEvent.addListener(MessageType.CheckResponse, this.checkResponse.bind(this));//抢红包响应
        Net.wsEvent.addListener(MessageType.ListGameRecordsResponse, this.listGameRecordsResponse.bind(this));//获取历史订单响应        
        Net.wsEvent.addListener(MessageType.PlayerEnterEvent, this.playerEnterEvent.bind(this));//玩家进入游戏事件
        Net.wsEvent.addListener(MessageType.PlayerExitEvent, this.playerExitEvent.bind(this));//玩家离开游戏事件
        Net.wsEvent.addListener(MessageType.GameStateUpdatedEvent, this.gameStateUpdatedEvent.bind(this));//游戏状态更新事件
        Net.wsEvent.addListener(MessageType.GameModeUpdatedEvent, this.gameModeUpdatedEvent.bind(this));//游戏模式更新事件
        Net.wsEvent.addListener(MessageType.BankerEvent, this.bankerEvent.bind(this));//抢庄事件
        Net.wsEvent.addListener(MessageType.BetEvent, this.betEvent.bind(this));//下注事件
        Net.wsEvent.addListener(MessageType.RedPacketEvent, this.redPacketEvent.bind(this));//发红包事件
        Net.wsEvent.addListener(MessageType.CheckEvent, this.checkEvent.bind(this));//抢红包事件
        Net.wsEvent.addListener(MessageType.BankerCanceledEvent, this.bankerCanceledEvent.bind(this));//退庄事件
        Net.wsEvent.addListener(MessageType.SettlementEvent, this.settlementEvent.bind(this));//结算事件
        Net.wsEvent.addListener(MessageType.UserBalanceUpdatedEvent, this.userBalanceUpdatedEvent.bind(this));//玩家更新金币事件
        Net.wsEvent.addListener(MessageType.ConfigUpdatedEvent, this.configUpdatedEvent.bind(this));//游戏配置更新事件
        Net.wsEvent.addListener(MessageType.ForcePlayerExitEvent, this.forcePlayerExitEvent.bind(this));//强制用户退出游戏
    }

    //退出游戏
    public exitGameRequest()
    {
        Net.wsSend(MessageType.ExitGameRequest);
    }

    //抢庄
    public bankerRequest(money: number)
    {        
        let banker = new pro.BankerRequest();
        banker.deposit = money; //抢庄金额
        Net.wsSendBody(MessageType.BankerRequest, banker);
    }

    //取消抢庄
    public cancelBankerRequest(money: number)
    {        
        Net.wsSend(MessageType.CancelBankerRequest);
    }

    //下注
    public betRequest(money: number)
    {        
        let bet = new pro.BetRequest();
        bet.amount = money; //下注金额
        Net.wsSendBody(MessageType.BetRequest, bet);
    }

    //抢红包
    public checkRequest(money: number)
    {        
        Net.wsSend(MessageType.CheckRequest);
    }


    //登录响应
    private loginResponse(res: pro.LoginResponse, code: pro.ErrorCode)
    {
        this._loginRes = res;   //登录响应数据
        this.dispatchEvent(BrnnEvent.loginRes);
    }

    //退出游戏响应
    private exitGameResponse(res: pro.ExitGameResponse, code: pro.ErrorCode)
    {
        this.dispatchEvent(BrnnEvent.exitGameRes);
    }

    //抢庄响应
    private bankerResponse(res: pro.BankerResponse, code: pro.ErrorCode)
    {
        this.dispatchEvent(BrnnEvent.bankerRes);
    } 

    //取消抢庄响应
    private cancelBankerRespose(res: pro.CancelBankerRespose, code: pro.ErrorCode)
    {
        this.dispatchEvent(BrnnEvent.cancelBankerRes);
    }

    //下注响应
    private betResponse(res: pro.BetResponse, code: pro.ErrorCode)
    {
        this.dispatchEvent(BrnnEvent.betRes);
    }

    //抢红包响应
    private checkResponse(res: pro.CheckResponse, code: pro.ErrorCode)
    {
        this.dispatchEvent(BrnnEvent.checkRes);
    }

    //获取历史订单响应
    private listGameRecordsResponse(res: pro.ListGameRecordsResponse, code: pro.ErrorCode)
    {
        this._listGameRecords = res;
        this.dispatchEvent(BrnnEvent.listGameRecordsRes);
    }

    //玩家进入游戏事件
    private playerEnterEvent(res: pro.PlayerEnterEvent, code: pro.ErrorCode)
    {
        this._playEnter = res;
        this.dispatchEvent(BrnnEvent.playerEnterEve);
        //设置用户余额，accountName其实是用户id，id一样的才是自己的余额 todo:accountName是用户id，是否要改？
        if (this._playEnter.player.accountName == this._user.myUserInfo.id)
        {
            this._user.setBalance(this._playEnter.player.balance);
        }        
    }

    //玩家离开游戏事件
    private playerExitEvent(res: pro.PlayerExitEvent, code: pro.ErrorCode)
    {
        this._playExit = res;
        this.dispatchEvent(BrnnEvent.playExitEve);
    }

    //游戏状态更新事件
    private gameStateUpdatedEvent(res: pro.GameStateUpdatedEvent, code: pro.ErrorCode)
    {
        this._gameStateUpdated = res;
        this.dispatchEvent(BrnnEvent.gameStateUpdateEve);
    }

    //游戏模式更新事件
    private gameModeUpdatedEvent(res: pro.GameModeUpdatedEvent, code: pro.ErrorCode)
    {
        this._gameModeUpdated = res;
        this.dispatchEvent(BrnnEvent.gameModeUpdatedEve);
    }

    //抢庄事件
    private bankerEvent(res: pro.BankerEvent, code: pro.ErrorCode)
    {
        this._banker = res;
        this.dispatchEvent(BrnnEvent.bankerEve);
    } 

    //下注事件
    private betEvent(res: pro.BetEvent, code: pro.ErrorCode)
    {
        this._bet = res;
        this.dispatchEvent(BrnnEvent.betEve);
    } 

    //发红包事件
    private redPacketEvent(res: pro.RedPacketEvent, code: pro.ErrorCode)
    {
        this._redPacket = res;
        this.dispatchEvent(BrnnEvent.redPacketEve);
    } 

    //抢红包事件
    private checkEvent(res: pro.CheckEvent, code: pro.ErrorCode)
    {
        this._checkEve = res;
        this.dispatchEvent(BrnnEvent.checkEve);
    } 

    //退庄事件
    private bankerCanceledEvent(res: pro.BankerCanceledEvent, code: pro.ErrorCode)
    {
        this._bankerCanceled = res;
        this.dispatchEvent(BrnnEvent.bankerCanceledEve);
    } 

    //结算事件
    private settlementEvent(res: pro.SettlementEvent, code: pro.ErrorCode)
    {
        this._settlement = res;
        this.dispatchEvent(BrnnEvent.settlementEve);
    } 

    //玩家更新金币事件
    private userBalanceUpdatedEvent(res: pro.UserBalanceUpdatedEvent, code: pro.ErrorCode)
    {
        this._userBalance = res;
        this.dispatchEvent(BrnnEvent.userBalanceEve);
    }

    //游戏配置更新事件
    private configUpdatedEvent(res: pro.ConfigUpdatedEvent, code: pro.ErrorCode)
    {
        this._configUpdated = res;
        this.dispatchEvent(BrnnEvent.configUpdatedEve);
    }

    //强制用户退出游戏
    private forcePlayerExitEvent(res: pro.ForcePlayerExitEvent, code: pro.ErrorCode)
    {
        this._forcePlayerExit = res;
        this.dispatchEvent(BrnnEvent.forcePlayerExitEve);
    }


}
