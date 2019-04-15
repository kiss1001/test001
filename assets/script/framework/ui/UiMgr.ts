import UiGroup from "./UiGroup";
import { EnumUiScene } from "../../game/config/EnumUiScene";
import UiLoader from "../res/UiLoader";
import HashMap from "../util/HashMap";
import Str from "../util/Str";
import UiCtrl from "./UiCtrl";
import { Fun1 } from "../util/Func";
import UiTool from "../util/UiTool";

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

//UI窗口类别枚举
export enum UiType
{
    SCENE = 0,      //场景层，场景层会铺满整个屏幕，其他层是弹窗层，不会铺满屏幕
    CONTENT,        //内容层，展示游戏相关信息界面
    TIPS,           //tips层，显示提示性信息界面，例如获得物品的浮窗，跑马灯等。
    GUIDE,          //新手引导层，主要显示新手引导的手指、新手提示文本框等。
    ALERT,          //主要显示系统级的信息、错误，例如断网、被踢下线。
    LOADING,        //显示加载动画
    COUNT,          //总数
}

/**
 * ui管理器，持有多个ui界面组
 */
@ccclass
export default class UiMgr
{
    private _root: cc.Node = null;

    //uiGroup数组
    private hashUiGroup: HashMap<UiType, UiGroup> = new HashMap<UiType, UiGroup>();

    //显示ui的根节点
    private rootNode: cc.Node = null;

    //ui管理器单列
    static s_singleInstance: UiMgr = null;

    //返回ui管理器单列
    public static getInstance(): UiMgr
    {
        if (UiMgr.s_singleInstance == null)
        {
            UiMgr.s_singleInstance = new UiMgr();            
        }
        return UiMgr.s_singleInstance;
    }

    //初始化ui
    public init()
    {
        //把ui放到场景中
        this.rootNode.parent = cc.director.getScene();
        cc.game.addPersistRootNode(this.rootNode);      //设置节点不释放
    }

    /**
     * 设置弹窗ui的根阶段
     * @param scene 所有ui的父节点
     */
    public setRoot(scene: cc.Node)
    {
        this.rootNode.removeFromParent(false);  //删除旧的节点
        scene.addChild(this.rootNode);          //添加到新的节点
        this._root = scene;
    }

    /**
     * 构造函数，私有
     */
    private constructor()
    {
        let rootNode = new cc.Node("rootNode");         //创建ui根节点
        let widget = rootNode.addComponent("cc.Widget");//创建自动对齐元件
        UiTool.setFullWidget(widget);                   //设置widget属性为对齐父节点100%
        this.rootNode = rootNode;                       //保存根节点

        //创建各种ui数组
        for (let i = 0; i < UiType.COUNT; ++i)
        {
            let groupNode    = new cc.Node("groupNode");      
            let widget = groupNode.addComponent(cc.Widget);  //排版控件
            UiTool.setFullWidget(widget);                    //设置widget属性为对齐父节点100%
            let mask = groupNode.addComponent(cc.Button);    //拦截事件，防止穿透到下面
            mask.enabled = false;                            //先关闭拦截
            this.rootNode.addChild(groupNode);               //添加到根节点

            let uiGroup = new UiGroup();
            uiGroup.setParent(groupNode);                    //设置窗口组父节点
            this.hashUiGroup.add(i, uiGroup);                //添加到窗口组
        }
    }

    /**
     * 显示窗口
     * @param name 窗口名称
     * @param completeCallback 加载完成后回调
     */
    public showUi(name: string, completeCallback: Fun1 = null)
    {
        //加载窗口
        UiLoader.loadUi(name, completeCallback);
    }

    /**
     * 关闭某个窗口
     * @param name 窗口名称
     */
    public closeUi(name: string)
    {
        for (let i = 0; i < UiType.COUNT; ++i)
        {
            let uiGroup = this.hashUiGroup.get(i);//ui
            if (uiGroup.hasName(name))
            {
                uiGroup.removeView(name);
            }
        }
    }

    /**
     * 关闭所有弹窗
     */
    public closeAllUi()
    {
        for (let i = 0; i < UiType.CONTENT; ++i)
        {
            let uiGroup = this.hashUiGroup.get(i);//ui
            uiGroup.removeAllViews();
        }
    }

    /**
     * 切换到某个场景，旧场景会被销毁
     * @param name 场景名称
     */
    public toScene(name: EnumUiScene)
    {
        cc.director.loadScene(name);
    }

    /**
     * 把ui加入ui管理器，加载ui资源完成后调用
     * @param fullName 窗口名称
     * @param ui prefabs窗口
     */
    public addUi(fullName: string, ui: cc.Node)
    {
        let uiName = UiTool.getUiNameByFullName(fullName);//ui窗口名称
        let uiCtrl = UiTool.getUiCtrl(ui, fullName);      //脚本基类
        uiCtrl.setName(fullName);                         //设置窗口名称
        uiCtrl.init();                                    //初始化脚本
        let uiType = uiCtrl.uiType;                       //ui类型       
        if (this.hashUiGroup.get(uiType).hasName(uiName)) 
        {
            //同时不能显示2个同样的ui，已经有显示就删除新的
            ui.removeFromParent(true);
            return;
        }
        this.hashUiGroup.get(uiType).pushView(uiCtrl);    //显示ui
    }


}
