import UiCtrl from "../../../../framework/ui/UiCtrl";
import DialogCtrl from "../../prefabs/common/DialogCtrl";
import WorldUi from "../../../WorldUi";
import WorldModel from "../../../WorldModel";
import { UiType } from "../../../../framework/ui/UiMgr";
import { EnumUi } from "../../../config/EnumUi";
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
 * 兑奖ui
 */
@ccclass
export default class RewardsMain extends UiCtrl
{

    @property(cc.Label)
    labBankUser: cc.Label = null;       //银行户主

    @property(cc.Label)
    labProvince: cc.Label = null;       //省份

    @property(cc.Label)
    labCity: cc.Label = null;           //城市

    @property(cc.Label)
    labBank: cc.Label = null;           //银行

    @property(cc.Label)
    labCard: cc.Label = null;           //银行卡号

    @property(cc.EditBox)
    edtMoney: cc.EditBox = null;        //兑奖金额

    private user: UserModel = null;     //用户模型
    private dialog: DialogCtrl = null;  //对话框

    // LIFE-CYCLE CALLBACKS:

    init()
    {
        this.uiType = UiType.CONTENT;   //内容层
    }

    onLoad () 
    {
        this.user   = WorldModel.user;
        this.dialog = WorldUi.dialog;
        this.showBankAccount(); //显示银行信息
    }

    onEnable()
    {
        this.user.addListener(UserEvent.getBankAccount, this.showBankAccount.bind(this), this.classId);
    }

    start()
    {
        this.user.getBankAccount();//取银行信息
    }

    onDisable()
    {
        this.user.removeListener(this.classId);
    }

    //显示银行信息
    private showBankAccount()
    {
        let bank = this.user.bankAccount;
        if (null == bank) return;
        this.labBankUser.string     = bank.accountName;         //银行户主
        this.labProvince.string     = bank.province;            //省份
        this.labCity.string         = bank.city;                //城市
        this.labBank.string         = bank.bankName;            //银行
        this.labCard.string         = bank.accountNumber;       //卡号
    }

    //修改银行信息
    onUpdateBank()
    {
        WorldUi.showUi(EnumUi.updateBank);
    }

    //提交兑奖
    onRewards()
    {

    }

    // update (dt) {}
}
