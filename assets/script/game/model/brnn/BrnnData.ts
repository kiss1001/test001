import { IState } from "../../common/IState";
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

//百人牛牛，游戏状态枚举   BrnnModel.gameStateUpdated.state 值
export enum EnumBrnnState
{
    wait        = 0,    //0等待更多玩家状态
    ready       = 1,    //1准备开始
    robBank     = 2,    //2抢庄
    fixBank     = 3,    //3确定庄家
    bet         = 4,    //4开始下注
    stopBet     = 5,    //5停止下注
    robRedPack  = 6,    //6抢红包
    calc        = 7,    //7结算
}

//百人牛牛，状态机，基类
export class IBrnnState extends IState
{
    public ui: BrnnUiCtrl = null;

    //初始化
    constructor(ui: BrnnUiCtrl)
    {
        super();
        this.ui = ui;
    }
}

export class BrnnData
{


}
