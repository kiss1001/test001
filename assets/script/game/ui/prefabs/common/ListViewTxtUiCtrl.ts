import UiCtrl from "../../../../framework/ui/UiCtrl";
import ListViewVReuse from "../../../../framework/ui/ListViewVReuse";
import ResTool from "../../../../framework/res/ResTool";
import { Fun_n_node, Fun_node, Fun0 } from "../../../../framework/util/Func";
import EventManager from "../../../../framework/event/EventManager";

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
 * 滚动列表，显示纯文字。最多显示4列。有标题栏
 */
@ccclass
export default class ListViewTxtUiCtrl extends ListViewVReuse
{
    @property(cc.Label)
    labTitle: cc.Label = null;

    @property(cc.Label)
    labCap: cc.Label = null;    

    @property(cc.Node)
    rootCap: cc.Node = null;                //标题父节点

    private _model: EventManager = null;    //数据模型
    private _completeFun: Fun_node = null; //数据查询完成回调函数

    onDisable()
    {
        //删除监听
        if (this._model) this._model.removeListener(this.classId);
    }

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
        completeFun: Fun_node, itemFun: Fun_n_node, title: string, ...caps: string[])
    {
        this._model         = model;        //保存模型
        this._completeFun   = completeFun;  //保存数据查询成功后回调事件
        this._model.addListener(event, this.dataEvent.bind(this), this.classId);

        this.labTitle.string = title;
        for (let i = 0; i < caps.length; ++i)
        {
            if (0 == i)
            {
                this.labCap.string = caps[i];
            }
            else
            {
                let lab = ResTool.instanNode(this.labCap.node);
                lab.getComponent(cc.Label).string = caps[i]; //设置显示内容
                lab.parent = this.rootCap;
            }            
        }   
        this.setItemFunc(itemFun);          //设置更新数据回调函数
        selectFun();                        //开始查询
    }

    //public setData()

    //数据返回时，执行的事件
    private dataEvent()
    {
        if (this._completeFun) this._completeFun(this.node);
    }
    
}
