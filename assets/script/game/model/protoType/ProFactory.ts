import { MessageType } from "./MessageType";
import Log from "../../../framework/log/Log";
import { pro } from "./pro";

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
 * proto工厂类
 */
export  class ProFactory
{
    /**
     * 根据消息类型，返回消息的结构体
     * @param type 消息类型
     */
    public static getClassByType(type: MessageType)
    {
        switch (type)
        {
            case MessageType.AcceptAwardRequest: return pro.AcceptAwardRequest; 
            case MessageType.AcceptAwardResponse: return pro.AcceptAwardResponse;   
            case MessageType.Award: return pro.Award; 
            case MessageType.AwardAcceptedEvent: return pro.AwardAcceptedEvent; 
            case MessageType.AwardAvaliableEvent: return pro.AwardAvaliableEvent; 
            case MessageType.AwardCanceledEvent: return pro.AwardCanceledEvent; 
            case MessageType.BankerCanceledEvent: return pro.BankerCanceledEvent; 
            case MessageType.BankerEvent: return pro.BankerEvent; 
            case MessageType.BankerRequest: return pro.BankerRequest; 
            case MessageType.BankerResponse: return pro.BankerResponse; 
            case MessageType.BeneficialBankerConfig: return pro.BeneficialBankerConfig; 
            case MessageType.BetEvent: return pro.BetEvent; 
            case MessageType.BetRecord: return pro.BetRecord; 
            case MessageType.BetRequest: return pro.BetRequest; 
            case MessageType.BetResponse: return pro.BetResponse; 
            case MessageType.BroadcastEvent: return pro.BroadcastEvent; 
            case MessageType.BroadcastRequest: return pro.BroadcastRequest; 
            case MessageType.BroadcastResponse: return pro.BroadcastResponse;
            case MessageType.CancelBankerRequest: return pro.CancelBankerRequest;
            case MessageType.CancelBankerRespose: return pro.CancelBankerRespose;
            case MessageType.CheckEvent: return pro.CheckEvent;
            case MessageType.CheckRequest: return pro.CheckRequest;
            case MessageType.CheckResponse: return pro.CheckResponse;
            case MessageType.ConfigUpdatedEvent: return pro.ConfigUpdatedEvent;
            case MessageType.ExitGameRequest: return pro.ExitGameRequest;
            case MessageType.ExitGameResponse: return pro.ExitGameResponse;
            case MessageType.ForcePlayerExitEvent: return pro.ForcePlayerExitEvent;
            case MessageType.GameConfig: return pro.GameConfig;
            case MessageType.GameLimitsConfig: return pro.GameLimitsConfig;
            case MessageType.GameModeUpdatedEvent: return pro.GameModeUpdatedEvent;
            case MessageType.GameRecord: return pro.GameRecord;
            case MessageType.GameResult: return pro.GameResult;
            case MessageType.GameState: return pro.GameState;
            case MessageType.GameStateUpdatedEvent: return pro.GameStateUpdatedEvent;
            case MessageType.GetAwardStatusRequest: return pro.GetAwardStatusRequest;
            case MessageType.GetAwardStatusResponse: return pro.GetAwardStatusResponse;
            case MessageType.ListAwardsRequest: return pro.ListAwardsRequest;
            case MessageType.ListAwardsResponse: return pro.ListAwardsResponse;
            case MessageType.ListGameRecordsRequest: return pro.ListGameRecordsRequest;
            case MessageType.ListGameRecordsResponse: return pro.ListGameRecordsResponse;
            case MessageType.LoginResponse: return pro.LoginResponse;
            case MessageType.Message: return pro.Message;
            case MessageType.Player: return pro.Player;
            case MessageType.PlayerEnterEvent: return pro.PlayerEnterEvent;
            case MessageType.PlayerExitEvent: return pro.PlayerExitEvent;
            case MessageType.RedPacket: return pro.RedPacket;
            case MessageType.RedPacketEvent: return pro.RedPacketEvent;
            case MessageType.RequestMessage: return pro.RequestMessage;
            case MessageType.ResponseMessage: return pro.ResponseMessage;
            case MessageType.Settlement: return pro.Settlement;
            case MessageType.SettlementEvent: return pro.SettlementEvent;
            case MessageType.SpecialHandsAwardConfig: return pro.SpecialHandsAwardConfig;
            case MessageType.SpecialHandsStatus: return pro.SpecialHandsStatus;
            case MessageType.StraightAwardConfig: return pro.StraightAwardConfig;
            case MessageType.StraightStatus: return pro.StraightStatus;
            case MessageType.UserBalanceUpdatedEvent: return pro.UserBalanceUpdatedEvent;
        }

        Log.error("type errot: " + type);
        return null;
    }

    /**
     * 根据请求类型，返回请求类
     * @param type 
     */
    public static getReqByType(type: MessageType): pro.RequestMessage
    {
        let req = new pro.RequestMessage();
        req.messageType = type;
        return req;
    }

    /**
     * 根据请求类型，返回请求的2进制数据
     * @param type 
     */
    public static getReqBinByType(type: MessageType)
    {
        let req = this.getReqByType(type);
        return pro.RequestMessage.encode(req).finish();
    }

    /**
     * 根据请求类型和数据，返回请求的2进制数据
     * @param type 请求类型
     * @param body 请求数据
     */
    public static getReqBinByBody(type: MessageType, body)
    {
        let req = this.getReqByType(type);
        let bodyClass = this.getClassByType(type);      //类型
        req.body = bodyClass.encode(body).finish();     //转为二进制数据
        return pro.RequestMessage.encode(req).finish();
    }

}

