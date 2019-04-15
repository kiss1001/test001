import UiCtrl from "../../../../framework/ui/UiCtrl";
import Str from "../../../../framework/util/Str";

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
 * 充值界面ui
 */
@ccclass
export default class RechargeMain extends UiCtrl
{
    @property(cc.EditBox)
    edtMoney: cc.EditBox = null;            //充值金额

    @property(cc.Label)
    labGetGold: (cc.Label) = null;          //奖励金币提示

    @property(cc.Label)
    labMinMoney: (cc.Label) = null;         //最小充值提示

    @property(cc.Node)
    nodeWyDesc: (cc.Node) = null;           //网银充值显示信息

    @property(cc.Node)
    nodeRgczDesc: (cc.Node) = null;         //人工充值显示信息
 
    //充值金额
    private listMoney: { [key: number]: number} = { 0:100, 1:500, 2:1000, 3:2000, 4:3000, 5:5000}
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start()
    {
        this.hideAll();
    }

    // update (dt) {}

    //隐藏所有不需要的节点
    private hideAll()
    {
        this.nodeWyDesc.active = false;
        this.nodeRgczDesc.active = false;
    }

    //网银充值需要显示的节点
    private showWangYin()
    {
        this.nodeWyDesc.active = true;
    }

    //人工充值需要显示的节点
    private showRgcz()
    {
        this.nodeRgczDesc.active = true;
    }

    //点击上方微信充值
    public onWeiXin()
    {
        this.hideAll();
    }

    //点击上方支付宝充值
    public onZfb()
    {
        this.hideAll();
    }

    //点击上方网银充值
    public onWangYin()
    {
        this.hideAll();
        this.showWangYin();
    }

    //点击上方人工充值
    public onRgcz()
    {
        this.hideAll();
        this.showRgcz();
    }

    //金额清零
    public onClearMoney()
    {
        this.edtMoney.string = "0";
    }

    //点击6个金额按钮
    public onMoneyClick(hander: cc.Button, index: number)
    {
        //let money = this.listMoney[index];      //选中金额
        //this.edtMoney.string = money.toString();//显示金额

        let money = hander.target.getComponentInChildren(cc.Label).string; //选中金额
        this.edtMoney.string = Str.decimal(money, 0);//显示金额
    }
}
