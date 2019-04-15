import UiCtrl from "../../../../framework/ui/UiCtrl";
import WorldCore, { WorldScene } from "../../../WorldCore";
import UiTool from "../../../../framework/util/UiTool";

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
 * 用户中心ui
 */
@ccclass
export default class CenterUiCtrl extends UiCtrl
{
    //充值、兑奖、我、业绩查询、分享赚钱 5个子界面节点
    @property(cc.Node)
    nodeList: cc.Node[] = [];

    onLoad()
    {
        //显示充值节点
        UiTool.setActiveByIndex(this.nodeList, 0);
    }

    /**
     * 显示某个子界面
     * @param index 子界面index
     */
    public showSubUi(tog: cc.Toggle, index: number)
    {
        //设置所子界面显示、隐藏
        UiTool.setActiveByIndex(this.nodeList, index);     
    }

    //关闭用户中心
    public closeUi()
    {
        //跳转到游戏界面
        WorldCore.change(WorldScene.game);
    }
}
