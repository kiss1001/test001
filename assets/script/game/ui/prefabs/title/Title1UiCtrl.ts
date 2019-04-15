import UiCtrl from "../../../../framework/ui/UiCtrl";
import { BrnnModel, BrnnEvent } from "../../../model/brnn/BrnnModel";
import WorldModel from "../../../WorldModel";
import Str from "../../../../framework/util/Str";
import { ConstTxt } from "../../../config/ConstTxt";
import UserModel, { UserEvent } from "../../../model/user/UserModel";

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

@ccclass
export default class Title1UiCtrl extends UiCtrl
{

    @property(cc.Label)
    labBalance: cc.Label = null;    //余额

    @property(cc.Label)
    labNum: cc.Label = null;        //在线人数

    private brnn: BrnnModel = null; //百人牛牛
    private user: UserModel = null; //用户信息

    onLoad()
    { 
        this.labBalance.string = "";
        this.labNum.string = "";
        this.brnn = WorldModel.brnn;
        this.user = WorldModel.user;
    }    

    //第一次会在load之后，start之前调用
    onEnable()
    {
        //注册事件
        this.brnn.addListener(BrnnEvent.playerEnterEve, this.playerEnterEveFun.bind(this), this.classId);
        this.user.addListener(UserEvent.balanceEve, this.balanceEveFun.bind(this), this.classId);
    }

    start()
    {

    }

    onDisable()
    {
        //删除本ui所有事件监听
        this.brnn.removeListener(this.classId);
        this.user.removeListener(this.classId);
    }

    //玩家进入游戏事件回调
    private playerEnterEveFun()
    {
        let res = this.brnn.playEnter;  //取数据
        if (null == res) return;
        //设置在线人数
        this.labNum.string = Str.format(ConstTxt.peopleNum, res.onlineUsers);
    }

    //更新用户余额事件
    private balanceEveFun()
    {
        let res = this.user.balance;
        if (null == res) return;
        //设置用户余额
        this.labBalance.string = res.toString();
    }
}
