
import WorldModel from "../../../WorldModel";
import WorldCore, { WorldScene } from "../../../WorldCore";
import UiCtrl from "../../../../framework/ui/UiCtrl";
import UserModel, { UserEvent } from "../../../model/user/UserModel";
import { ConnectModel } from "../../../model/connect/ConnectModel";
import { BrnnModel } from "../../../model/brnn/BrnnModel";

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
 * 百人牛牛，游戏界面ui
 */
@ccclass
export default class BrnnUiCtrl extends UiCtrl
{

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    private user: UserModel = null;     //用户模型
    private conn: ConnectModel = null;  //ws连接
    private brnn: BrnnModel = null;     //百人牛牛

    onLoad()
    { 
        this.user = WorldModel.user;
        this.conn = WorldModel.connect;
        this.brnn = WorldModel.brnn;
    }    

    //第一次会在load之后，start之前调用
    onEnable()
    {
        //注册事件
        this.user.addListener(UserEvent.getMyUserInfo, this.getMyInfoEvent.bind(this), this.classId);
    }

    start()
    {
        this.user.getMyUserInfo();//取我的用户信息
        this.conn.connect();    //开始连接scoket
    }

    onDisable()
    {
        //删除本ui所有事件监听
        this.user.removeListener(this.classId);
    }

    // update (dt) {}

    //获取自己数据成功
    private getMyInfoEvent()
    {
        let info = this.user.myUserInfo;
        if (null == info) return;

    }

    //确定下注
    public onBet()
    {
        this.user.getMyUserInfo();//取我的用户信息
    }

    //转到平台中心
    public onGotoCenter()
    {
        this.brnn.exitGameRequest();    //退出游戏
        WorldCore.change(WorldScene.center);
    }
}
