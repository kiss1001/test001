import UiCtrl from "../../../../framework/ui/UiCtrl";
import DialogCtrl from "../common/DialogCtrl";
import WorldModel from "../../../WorldModel";
import WorldUi from "../../../WorldUi";
import Str from "../../../../framework/util/Str";
import { ConstTxt } from "../../../config/ConstTxt";
import UserModel, { UserEvent } from "../../../model/user/UserModel";
import { InBankAccount } from "../../../model/user/UserData";


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
 * 修改用户银行ui
 */
@ccclass
export default class UpdateBank extends UiCtrl
{

    @property(cc.EditBox)
    edtBankUser: cc.EditBox = null;       //银行户主

    @property(cc.EditBox)
    edtProvince: cc.EditBox = null;       //省份

    @property(cc.EditBox)
    edtCity: cc.EditBox = null;           //城市

    @property(cc.EditBox)
    edtBank: cc.EditBox = null;           //银行

    @property(cc.EditBox)
    edtCard: cc.EditBox = null;           //银行卡号

    private user: UserModel = null;         //用户模型
    private dialog: DialogCtrl = null;      //对话框

    // LIFE-CYCLE CALLBACKS:

    onLoad ()
    {
        this.user = WorldModel.user;
        this.dialog = WorldUi.dialog;
    }    

    onEnable()
    {
        this.user.addListener(UserEvent.updateBankAccount, this.updateBankEvent.bind(this), this.classId);
    }

    start()
    {
        this.showBankAccount();
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
        this.edtBankUser.string     = bank.accountName;         //银行户主
        this.edtProvince.string     = bank.province;            //省份
        this.edtCity.string         = bank.city;                //城市
        this.edtBank.string         = bank.bankName;            //银行
        this.edtCard.string         = bank.accountNumber;       //卡号
    }

    // update (dt) {}

    //修改银行卡
    public onUpdateBank()
    {
        let bankUser    = this.edtBankUser.string;      //银行户主
        let province    = this.edtProvince.string;      //省份
        let city        = this.edtCity.string;          //城市
        let bank        = this.edtBank.string;          //银行
        let card        = this.edtCard.string;          //卡号

        if (Str.isEmpty(bankUser))
            return this.dialog.showError(this.edtBankUser.placeholder);
        if (Str.isEmpty(province))
            return this.dialog.showError(this.edtProvince.placeholder);
        if (Str.isEmpty(city))
            return this.dialog.showError(this.edtCity.placeholder);
        if (Str.isEmpty(bank))
            return this.dialog.showError(this.edtBank.placeholder);
        if (Str.isEmpty(card))
            return this.dialog.showError(this.edtCard.placeholder);

        this.dialog.showMsg2("您确定要修改银行卡信息吗？", ()=>
        {
            let param           = new InBankAccount();
            param.accountName   = bankUser;
            param.province      = province;
            param.city          = city;
            param.bankName      = bank;
            param.accountNumber = card;
            this.user.updateBankAccount(param);//更新银行信息
        });        
    }

    //修改银行信息，返回
    private updateBankEvent()
    {
        let bank = this.user.bankAccount;
        if (null != bank)//更新成功
        {
            //银行信息修改成功
            this.dialog.showOk(ConstTxt.updateBankSuccess, ()=>
            {
                this.onCloseUi();//关闭界面
            })
        }
    }
}
