import { Fun0 } from "../../../../framework/util/Func";
import Singleton from "../../../../framework/util/Singleton";
import { EnumUi } from "../../../config/EnumUi";
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

/**
 * DialogUi显示数据
 */
class DialogUiData
{
    cap:            string; //标题
    desc:           string; //内容
    strBtnOk:       string; //ok按钮内容
    strBtnCancel:   string; //取消按钮内容
    funOk:          Fun0;  //ok按钮回调函数
    funCancel:      Fun0;  //取消按钮回调函数
}

const enum EnumDialog
{
    capHint         = "提示",       //对话框标题
    capError        = "错误",       //错误标题

    strBtnOk        = "确定",       //对话框按钮内容
    strBtnCancel    = "取消",       //对话框按钮内容
}

/**
 * 模式对话框ui管理器
 */
export default class DialogCtrl extends Singleton
{
    private _dialogUiData: DialogUiData = null;
    public get dialogUiData() {return this._dialogUiData;}

    /**
     * 显示单个按钮的提示对话框
     * @param desc 对话框内容
     * @param funcOk ok回调函数,null没有回调
     * @param cap 标题，为null显示：提示
     */
    public showOk(desc: string, funcOk: Fun0 = null, cap: string = null)
    {
        let param = new DialogUiData();
        param.cap = cap != null ? cap : EnumDialog.capHint; //标题
        param.desc = desc;                                  //内容
        param.strBtnOk = EnumDialog.strBtnOk;               //确认按钮文字
        //按钮回调，没有回调函数表示只是简单提示，要构造一个空回调以显示按钮
        param.funOk = funcOk != null ? funcOk : ()=>{};
        this.show(param);
    }

    /**
     * 显示单个按钮的错误提示
     * @param desc 提示内容
     * @param funcCancel 按钮回调函数，null没有回调函数
     * @param cap 标题，null默认显示 错误
     */
    public showError(desc: string, funcCancel: Fun0 = null, cap: string = null)
    {
        let param = new DialogUiData();
        param.cap = cap != null ? cap : EnumDialog.capError;//标题
        param.desc = desc;                                  //内容
        param.strBtnCancel = EnumDialog.strBtnOk;           //按钮文字
        //按钮回调，没有回调函数表示只是简单提示，要构造一个空回调以显示按钮
        param.funCancel = funcCancel != null ? funcCancel : ()=>{};
        this.show(param);
    }

    /**
     * 有一个确定按钮，一个取消按钮的提示对话框。确定按钮有回调，取消按钮没有回调
     * @param desc 提示对话框内容
     * @param funcOk 确定按钮回调函数
     * @param cap 标题，为null显示：提示
     */
    public showMsg2(desc: string, funcOk: Fun0, cap: string = null)
    {
        let param = new DialogUiData();
        param.cap = cap != null ? cap : EnumDialog.capHint; //标题
        param.desc = desc;                                  //内容
        param.strBtnOk = EnumDialog.strBtnOk;               //确认按钮文字   
        param.strBtnCancel = EnumDialog.strBtnCancel;       //取消按钮文字
        param.funOk = funcOk;                               //确认回调
        param.funCancel = ()=>{};                           //取消回调
        this.show(param);
    }

    /**
     * 显示模式对话框
     * @param param 对话框数据
     */
    public show(param: DialogUiData)
    {
        WorldUi.closeUi(EnumUi.dialog);     //关闭模式对话框
        this._dialogUiData = param;         //保存模式对话框显示数据
        WorldUi.showUi(EnumUi.dialog);      //显示模式对话框
    }
}
