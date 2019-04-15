import Singleton from "../../../../framework/util/Singleton";
import WorldUi from "../../../WorldUi";
import { EnumUi } from "../../../config/EnumUi";
import UiCtrl from "../../../../framework/ui/UiCtrl";
import ListViewTxtUiCtrl from "./ListViewTxtUiCtrl";
import { Fun_n_node, Fun0, Fun1, Fun_node } from "../../../../framework/util/Func";
import EventManager from "../../../../framework/event/EventManager";
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
 * 显示纯文本(列数1-n)的滚动列表
 */
export default class ListViewTxtCtrl extends Singleton
{
    private listViewTxtUiCtrl: ListViewTxtUiCtrl = null;    //数据ctrl

    /**
     * 设置显示数据
     * @param model 监听数据模型
     * @param event 监听事件
     * @param selectFun 开始查询函数回调
     * @param completeFun 数据查询完成回调函数
     * @param itemFun 格子更新函数     
     * @param title 窗口标题
     * @param caps 列表标题，1-n列
     */
    public setView(model: EventManager, event: number, selectFun: Fun0,  
        completeFun: Fun_node, itemFun: Fun_n_node, title: string, ...params: string[])
    {        
        this.listViewTxtUiCtrl = null;
        WorldUi.showUi(EnumUi.listViewTxt, (ui: any) =>
        {
            this.listViewTxtUiCtrl = UiTool.getUiCtrl(ui) as ListViewTxtUiCtrl;
            this.listViewTxtUiCtrl.setView(model, event, selectFun, 
                completeFun, itemFun, title, ...params);
        });
    }

}
