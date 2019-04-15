import UiMgr, { UiType } from "./UiMgr";
import Str from "../util/Str";
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

/**
 * 界面Ctrl的的基类，任何uiviewCtrl类都要继承此类
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class UiCtrl extends cc.Component
{    
    //窗口类型，默认内容层
    @property
    uiType: UiType = 0;//UiType.CONTENT;

    //当前窗口ui节点
    //@property
    //uiNode: cc.Node = new cc.Node();
    private uiName: string = null;  //窗口名

    //是否有遮罩
    @property
    hasMask: boolean = true;

    //是否点击外部关闭窗口
    @property
    touchOutClose: boolean = false;

    private _classId: string = null;    //类的id，用来唯一标识一个类

    constructor()
    {
        super();
        this._classId = Str.getRandStr(32);//生成随机值
    }

    //返回类id标识
    public get classId() { return this._classId; }

    //进入窗口堆栈时执行
    public onAddToStack(): void { }

    //从窗口堆栈删除时执行
    public onRemoveFromStack(): void { }    
    
    /**
     * 设置窗口名称
     * @param fullName 窗口完整名称
     */
    public setName(fullName: string)
    {
        this.uiName = UiTool.getUiNameByFullName(fullName);//设置窗口名        
    }

    //初始化窗口数据，可以访问到窗体内任何元素，无法访问到父节点
    public init() {}

    //播放窗口显示动画
    public onPlayShowAni(): void 
    {              
        let widget = this.node.getComponent(cc.Widget);
        if (widget) widget.updateAlignment();               //窗口大小自适应
        let act = UiTool.getShowActive(this.node.scale);    //显示动画
        this.node.scale = 0;                                //节点先不可见        
        this.node.stopAllActions();                         //停止所有动画
        this.node.runAction(act);                           //播放新动画        
    }    

    //播放窗口隐藏动画
    public onPlayHideAni(): void { }

    //关闭窗口
    public onCloseUi()
    {
        UiMgr.getInstance().closeUi(this.uiName);
    }

    //设置Ui窗口名称
    public setUiName(name: string): void
    {
        this.uiName = name;
    }

    //返回Ui窗口名称
    public getUiName(): string
    {
        return this.uiName;
    }      


}
