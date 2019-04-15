import UiMgr from "./framework/ui/UiMgr";
import { EnumUiScene } from "./game/config/EnumUiScene";
import WorldModel from "./game/WorldModel";
import WorldUi from "./game/WorldUi";
import WorldCore from "./game/WorldCore";
import Net from "./game/common/Net";

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
 * 项目的入口，负责项目的初始化。包括渠道包sdk，数据上报sdk设定，游戏初始化，
 * 游戏UI界面挂载处。
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class StartCtrl extends cc.Component
{
    onLoad()
    {
        WorldModel.init();                      //初始化全部model
        WorldUi.init();                         //初始化全部ui
        cc.game.addPersistRootNode(this.node);  //设置节点不释放
    }

    start()
    {
        WorldCore.begin();//显示第一个场景
    }


    // update (dt) {}
}
