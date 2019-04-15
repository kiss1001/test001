import UiCtrl from "../../../../framework/ui/UiCtrl";
import WorldModel from "../../../WorldModel";
import Str from "../../../../framework/util/Str";
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

/**
 * 平台中心顶部控件，显示用户名和余额
 */
@ccclass
export default class CenterTopUiCtrl extends UiCtrl
{

    @property(cc.Label)
    labAccount: cc.Label = null;     //用户名

    @property(cc.Label)
    labMoney: cc.Label = null;       //余额

    @property(cc.Label)
    labPlayerNum: cc.Label = null;   //在线人数
    
    private user: UserModel = null;

    onLoad () 
    {
        this.user = WorldModel.user;
    }

    //第一次会在load之后，start之前调用
    onEnable()
    {
        this.user.addListener(UserEvent.getMyUserInfo, this.showMyInfo.bind(this), this.classId);
    }

    start()
    {
        this.showMyInfo();//显示用户信息
    }

    onDisable()
    {
        this.user.removeListener(this.classId);
    }

    //显示用户信息
    private showMyInfo()
    {
        let info = this.user.myUserInfo;
        if (null == info) return;
        //用户名
        this.labAccount.string = info.accountName != null ? info.accountName : info.nickName;
        //余额
        this.labMoney.string = Str.decimal(info.balance);    
    }

    //获取在线人数
    private showPlayerNum()
    {

    }
}
