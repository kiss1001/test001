import UiCtrl from "../ui/UiCtrl";
import Str from "./Str";

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
 * ui工具类
 */
@ccclass
export default class UiTool
{
    /**
     * 设置列表里元素只有一个是有效状态
     * @param list 列表元素
     * @param index 此下标的元素为有效状态，其它无效状态
     */
    public static setActiveByIndex(list: cc.Node[], index: number)
    {
        let leng = list.length;
        if (index< 0 || index >= leng) return;        
        for(let i = 0; i < leng; ++i)
        {
            //设置子节点显示、隐藏
            list[i].active =  i == index ? true : false;
        }
    }

    /**
     * 从prefabs节点上返回节点挂载的uiCtrl
     * @param ui 节点node
     * @param fullName prefabs完整路径名称
     */
    public static getUiCtrl(ui: cc.Node, fullName: string = null): UiCtrl
    {
        //uiCtrl脚本名称
        let ctrlName = fullName != null ? 
            UiTool.getCtrlNameByFullName(fullName) : 
            UiTool.getCtrlNameByFullName(ui.name);
        return UiTool.getUiCtrlByNode(ui, ctrlName);//脚本基类
    }

    /**
     * 根据node节点和uiCtrl名称，取出节点里的uictrl
     * @param node 节点
     * @param ctrlName uiCtrl名称
     */
    public static getUiCtrlByNode(node: cc.Node, ctrlName: string): UiCtrl
    {
        let uiCtrlBase = node.getComponent(ctrlName);//取脚本子类
        return uiCtrlBase as UiCtrl;                 //脚本基类
    }

    /**
     * 根据窗口名称，返回窗口的uiCtrl类名称
     * @param fullName 完整窗口名称
     */
    public static getCtrlNameByFullName(fullName: string): string
    {
        //ctrl类名称是窗口名+Ctrl
        return UiTool.getUiNameByFullName(fullName) + "UiCtrl";
    }

    /**
     * 根据窗口名称，返回窗口的ui名称
     * @param fullName 完整窗口名称
     */
    public static getUiNameByFullName(fullName: string): string
    {
        let arr = Str.split(fullName, "/");         //字符串切割
        return arr[arr.length - 1];                 //最后一个字符串
    } 

    /**
     * 设置widget属性为对齐父节点100%
     * @param widget 
     */
    public static setFullWidget(widget: cc.Widget)
    {
        widget.left             = 0;
        widget.isAlignLeft      = true;
        widget.right            = 0;
        widget.isAlignRight     = true;
        widget.top              = 0;
        widget.isAlignTop       = true;
        widget.bottom           = 0;    
        widget.isAlignBottom    = true;
        widget.enabled          = true;     
        widget.alignMode        = cc.Widget.AlignMode.ON_WINDOW_RESIZE;
    }

    /**
     * 返回放大到指定倍数的显示动画
     * @param scale 最后指定倍数
     */
    public static getShowActive(scale: number): cc.Action
    {
        let spTime = 0.1;                           //动画播放总时间
        let action = cc.scaleTo(spTime, scale);     //变成源大小
        action.easing(cc.easeOut(5));               //从快到慢
        let fadeOut = cc.fadeIn(spTime);            //逐渐显示
        let act = cc.spawn(fadeOut, action);        //2个动画一起播放
        return act;
    }

    /**
     * 判断pos位置是否在node节点的可见区域 true:在可见区域
     * @param node node节点
     * @param pos 要判断的位置，必须是世界坐标
     */
    public static nodeContains(node: cc.Node, pos: cc.Vec2): boolean
    {
        let rect = node.getBoundingBox();
        let v1 = new cc.Vec2(rect.x, rect.y);
        v1 = node.parent.convertToWorldSpaceAR(v1);
        let rectWorld = new cc.Rect(v1.x, v1.y, rect.width, rect.height);
        return rectWorld.contains(pos);
    }
    
}
