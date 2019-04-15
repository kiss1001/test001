import UiCtrl from "../../../../framework/ui/UiCtrl";
import ListViewTxtCtrl from "../../prefabs/common/ListViewTxtCtrl";
import WorldUi from "../../../WorldUi";
import itemTxt from "../../prefabs/common/ItemTxtUiCtrl";
import ListViewTxtUiCtrl from "../../prefabs/common/ListViewTxtUiCtrl";
import WorldModel from "../../../WorldModel";
import Time from "../../../../framework/util/Time";
import RecordModel, { RecordEvent } from "../../../model/user/RecordModel";

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
 * 用户中心-我 ui
 */
@ccclass
export default class MyMainUiCtrl extends UiCtrl
{

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    private listViewTxt: ListViewTxtCtrl    = null;    //纯文本列表框
    private recordModel: RecordModel        = null;    //数据模型

    // LIFE-CYCLE CALLBACKS:

    onLoad () 
    {
        this.listViewTxt = WorldUi.listViewTxt;
        this.recordModel = WorldModel.record;
    }

    onEnable()
    {
    
    }

    start()
    {

    }    

    onDisable()
    {

    }

    // update (dt) {}

    //显示登录记录
    public onShowLoginLog()
    {
        //开始查询数据回调
        let selectFun = () =>
        {
            this.recordModel.getLoginLog();                 //查询登录记录
        }        

        //查询数据成功返回回调
        let completeFun = (ui: cc.Node) =>
        {
            let ctrl = ui.getComponent(ListViewTxtUiCtrl);  //脚本
            let data = this.recordModel.loginLog;           //显示数据
            if (data) ctrl.setCount(data.length);           //设置显示数据条数
        };

        //更新显示数据函数
        let itemFun = (i: number, item: cc.Node) =>
        {
            let ctrl = item.getComponent(itemTxt);
            let data = this.recordModel.loginLog;                           //显示数据
            ctrl.setData(data[i].ip, Time.getYMD_hms(data[i].timestamp));   //设置登录ip和时间
        }; 

        //设置显示数据
        this.listViewTxt.setView(this.recordModel, RecordEvent.loginLogs,
            selectFun, completeFun, itemFun, "登录记录", "登录IP", "登录时间");
    }

    
}
