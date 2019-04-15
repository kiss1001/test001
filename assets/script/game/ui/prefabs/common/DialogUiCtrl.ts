import UiCtrl from "../../../../framework/ui/UiCtrl";
import { EnumImgType } from "../../../../framework/res/ResTool";
import { UiType } from "../../../../framework/ui/UiMgr";
import DialogCtrl from "./DialogCtrl";
import { Fun0 } from "../../../../framework/util/Func";
import WorldUi from "../../../WorldUi";

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
 * 带有：标题、显示内容、取消按钮、确定按钮 的模式对话框ui
 */
@ccclass
export default class DialogUiCtrl extends UiCtrl
{

    @property(cc.Label)
    labCap: cc.Label = null;        //标题

    @property(cc.Label)
    labDesc: cc.Label = null;       //内容

    @property(cc.Button)
    btnCancel: cc.Button = null;    //取消按钮

    @property(cc.Button)
    btnOk: cc.Button = null;        //确认按钮

    private funCancel: Fun0 = null;//取消按钮回调函数
    private funOk: Fun0 = null;    //确认按钮回调函数
    // LIFE-CYCLE CALLBACKS:

    //初始化
    public init()
    {
        this.uiType = UiType.ALERT;     //提示层ui
    } 

    start()
    {
        let param = WorldUi.dialog.dialogUiData;    //显示数据
        this.initUiData(param.cap, param.desc, param.strBtnOk, param.strBtnCancel);
        this.initUiFun(param.funOk, param.funCancel);
    }

    /**
     * 初始化对话框显示的数据
     * @param cap 对话框标题
     * @param desc 对话框显示内容
     * @param strBtnOk 对话框确认按钮显示内容
     * @param strBtnCancel 对话框取消按钮显示内容
     */
    private initUiData(cap: string, desc: string, strBtnOk: string, strBtnCancel: string = null)
    {
        this.labCap.string  = cap;
        this.labDesc.string = desc;
        if (strBtnOk) this.btnOk.getComponentInChildren(cc.Label).string = strBtnOk;
        if (strBtnCancel) this.btnCancel.getComponentInChildren(cc.Label).string = strBtnCancel;
        this.funCancel      = null; //清空回调函数
        this.funOk          = null;
    }

    /**
     * 设置界面回调函数
     * @param funOk 确认按钮回调函数
     * @param funCancel 取消按钮回调函数
     */
    private initUiFun(funOk: Fun0, funCancel: Fun0 = null)
    {
        this.funCancel = funCancel; //设置回调函数
        this.funOk     = funOk;
        this.initUi();              //更新ui界面
    }

    //取消按钮
    public onCancel()
    {
        super.onCloseUi();//关闭ui
        if (this.funCancel) this.funCancel();
    }

    //确认按钮
    public onOk()
    {
        super.onCloseUi();//关闭ui
        if (this.funOk) this.funOk();
    }

    //初始化界面
    private initUi()
    {
        this.btnOk.node.active      = (this.funOk != null);
        this.btnCancel.node.active  = (this.funCancel != null);
    }

    // update (dt) {}
}
