import Log from "../../../../framework/log/Log";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

/**
 * 平台中心底部prefabs
 */
@ccclass
export default class CenterDownCtrl extends cc.Component
{

    //点击充值
    public onCharge()
    {
        Log.info("充值");
    }

    //点击兑奖
    public onRewards()
    {

    }

    //点击我
    public onMy()
    {

    }

    //点击业绩查询
    public onReport()
    {

    }

    //点击分享
    public onShare()
    {

    }
}
