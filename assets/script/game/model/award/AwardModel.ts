import EventManager from "../../../framework/event/EventManager";
import Net from "../../common/Net";
import { MessageType } from "../protoType/MessageType";
import { pro } from "../protoType/pro";

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
 * 奖励事件
 */
export enum AwardEvent
{
    acceptAward = 0,        //领取奖励响应
    listAwards,             //获取奖励列表响应
    awardAvaliableEve,      //可获得奖励事件
    awardAcceptedEve,       //领取奖励事件
    getAwardStatusRes,      //获取连赢和组合响应
}

/**
 * 奖励相关
 */
export class AwardModel extends EventManager
{
    private _listAwards: pro.ListAwardsResponse = null;//获取奖励列表响应
    private _awardAvaliable: pro.AwardAvaliableEvent = null;//可获得奖励事件
    private _awardAccepted: pro.AwardAcceptedEvent = null;//领取奖励事件
    private _awardStatus: pro.GetAwardStatusResponse = null;//连赢和组合响应

    public get listAwards() { return this._listAwards; }
    public get awardAvaliable() { return this._awardAvaliable; }
    public get awardAccepted() { return this._awardAccepted; }
    public get awardStatus() { return this._awardStatus; }

    public init()
    {        
        Net.wsEvent.addListener(MessageType.AcceptAwardRequest, this.acceptAwardResponse.bind(this));//领取奖励响应
        Net.wsEvent.addListener(MessageType.ListAwardsResponse, this.listAwardsResponse.bind(this));//获取奖励列表响应
        Net.wsEvent.addListener(MessageType.AwardAvaliableEvent, this.awardAvaliableEvent.bind(this));//可获得奖励事件
        Net.wsEvent.addListener(MessageType.AwardAcceptedEvent, this.awardAcceptedEvent.bind(this));//领取奖励事件
        Net.wsEvent.addListener(MessageType.GetAwardStatusResponse, this.getAwardStatusResponse.bind(this));//获取连赢和组合响应
    }

    //领取奖励
    public acceptAwardRequest(id: number)
    {
        let award = new pro.AcceptAwardRequest();
        award.id = id;//奖励编号
        Net.wsSendBody(MessageType.AcceptAwardRequest, award);
    }

    //获取奖励列表
    public listAwardsRequest()
    {
        Net.wsSend(MessageType.ListAwardsRequest);
    }

    //获取连赢和组合请求
    public getAwardStatusRequest()
    {
        Net.wsSend(MessageType.GetAwardStatusRequest);
    }

    //领取奖励响应
    private acceptAwardResponse(res: pro.AcceptAwardResponse, code: pro.ErrorCode)
    {
        this.dispatchEvent(AwardEvent.acceptAward);
    }

    //获取奖励列表响应
    private listAwardsResponse(res: pro.ListAwardsResponse, code: pro.ErrorCode)
    {
        this._listAwards = res;
        this.dispatchEvent(AwardEvent.listAwards);
    }

    //可获得奖励事件
    private awardAvaliableEvent(res: pro.AwardAvaliableEvent, code: pro.ErrorCode)
    {
        this._awardAvaliable = res;
        this.dispatchEvent(AwardEvent.awardAvaliableEve);
    }

    //领取奖励事件
    private awardAcceptedEvent(res: pro.AwardAcceptedEvent, code: pro.ErrorCode)
    {
        this._awardAccepted = res;
        this.dispatchEvent(AwardEvent.awardAcceptedEve);
    }

    //获取连赢和组合响应
    private getAwardStatusResponse(res: pro.GetAwardStatusResponse, code: pro.ErrorCode)
    {
        this._awardStatus = res;
        this.dispatchEvent(AwardEvent.getAwardStatusRes);
    }

}
