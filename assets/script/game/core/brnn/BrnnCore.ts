import { IState } from "../../common/IState";
import { WaitState } from "./WaitState";
import { RobBankerState } from "./RobBankerState";
import { FixBankerState } from "./FixBankerState";
import { BetState } from "./BetState";
import { StopBetState } from "./StopBetState";
import { RobRedPackState } from "./RobRedPackState";
import { CalcState } from "./CalcState";
import { NnReadyState } from "./NnReadyState";
import { BrnnModel, BrnnEvent } from "../../model/brnn/BrnnModel";
import WorldModel from "../../WorldModel";
import { EnumBrnnState } from "../../model/brnn/BrnnData";
import BrnnUiCtrl from "../../ui/brnn/v/BrnnUiCtrl";

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
 * 百人牛牛；游戏主逻辑
 */
export default class BrnnCore
{
    private currentState: IState = null;    //当前游戏阶段

    private waitState: WaitState                = null;    //0等待更多玩家阶段
    private readyState: NnReadyState            = null;    //1准备开始
    private robBankerState: RobBankerState      = null;    //2抢庄
    private fixBankerState: FixBankerState      = null;    //3确定庄家
    private betState: BetState                  = null;    //4开始下注
    private stopBetState: StopBetState          = null;    //5停止下注
    private robRedPackState: RobRedPackState    = null;    //6抢红包
    private calcState: CalcState                = null;    //7结算

    private brnn: BrnnModel                     = null;    //百人牛牛model

    public init(ui: BrnnUiCtrl)
    {
        this.waitState          = new WaitState(ui);
        this.readyState         = new NnReadyState(ui);
        this.robBankerState     = new RobBankerState(ui);
        this.fixBankerState     = new FixBankerState(ui);
        this.betState           = new BetState(ui);
        this.stopBetState       = new StopBetState(ui);
        this.robRedPackState    = new RobRedPackState(ui);
        this.calcState          = new CalcState(ui);

        this.currentState = this.waitState; //当前为第0个阶段

        this.brnn = WorldModel.brnn;

        //监听，游戏状态更新事件
        this.brnn.addListener(BrnnEvent.gameStateUpdateEve, this.onStateChange.bind(this));
    }

    //切换状态
    private onStateChange()
    {
        let res = this.brnn.gameStateUpdated;
        if (null == res) return;
        let state = this.getStateByNumber(res.state);   //需要切换的状态
        this.stateChange(state);                        //切换状态
    }    

    //根据服务端状态数据参数，返回游戏状态
    private getStateByNumber(i: number): IState
    {
        switch (i)
        {
            case EnumBrnnState.wait:        return this.waitState;
            case EnumBrnnState.ready:       return this.readyState; 
            case EnumBrnnState.robBank:     return this.robBankerState;
            case EnumBrnnState.fixBank:     return this.fixBankerState;
            case EnumBrnnState.bet:         return this.betState;
            case EnumBrnnState.stopBet:     return this.stopBetState;
            case EnumBrnnState.robRedPack:  return this.robRedPackState;
            case EnumBrnnState.calc:        return this.calcState;          
        }
        return null;
    }

    //进行状态切换
    private stateChange(state: IState)
    {
        //状态一样就不切换
        if (this.currentState == state) return;

        this.currentState.onEnd();  //退出状态事件
        this.currentState = state;  //切换状态
        this.currentState.onEnter();//进入状态事件
    }
}
