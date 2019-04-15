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
 * 界面组，一个组里可以有多个uiArr
 */
const { ccclass, property } = cc._decorator;
import UiCtrl from "./UiCtrl";
import HashMap from "../util/HashMap";

@ccclass
export default class UiGroup
{
    //父节点
    private parentNode: cc.Node = null;
    //遮罩节点
    private maskLayer: cc.Node = null;
    //屏蔽下面ui事件节点
    private blockLayer: cc.Node = null;
    //所有弹窗ui，以ui名称为key
    private hashUiCtrl: HashMap<string, UiCtrl> = new HashMap<string, UiCtrl>();

    /**
     * 设置窗口组的父节点
     * @param parent 父节点
     */
    public setParent(parent: cc.Node): void
    {
        this.parentNode = parent;
    }

    /**
     * 添加ui，会触发窗口显示动画
     * @param ctrl 弹窗ui
     * @param hideOld 是否隐藏已经显示的旧弹窗ui，当上面的弹窗关闭时，被隐藏的旧弹窗会自动再显示出来
     */
    public pushView(ctrl: UiCtrl, hideOld: boolean = false): void 
    {
        this.parentNode.addChild(ctrl.node);                            //节点添加到场景中
        this.parentNode.getComponent(cc.Button).enabled = ctrl.hasMask; //设置是否拦截事件
        this.hashUiCtrl.add(ctrl.getUiName(), ctrl);                    //节点添加到ui脚本数组中
        ctrl.onAddToStack();                                            //执行入场事件
        ctrl.onPlayShowAni();                                           //执行入场动画
    }

    /**
     * 弹出ui，会触发窗口关闭动画
     * @param cleanup 是否释放弹出的ui资源
     */
    public popView(cleanup: boolean): void
    {
        let val = this.hashUiCtrl.getLast();      //取最后一个
        this.hashUiCtrl.remove(val.getUiName());  //删除
        val.onRemoveFromStack();
        val.onPlayShowAni();
    }

    /**
     * 添加ui进队列，不会触发显示动画
     * @param ctrl 显示ui
     */
    public insertView(ctrl: UiCtrl): void
    {
        this.hashUiCtrl.add(ctrl.name, ctrl);
        ctrl.onAddToStack();
    }

    /**
     * 把ui从队列中删除
     * @param name 要删除的ui名称
     * @param clear 是否释放ui资源
     */
    public removeView(name: string, clear: boolean = true): void
    {
        let val = this.hashUiCtrl.get(name);    //要删除的ui
        if (null != val)
        {
            val.node.parent.getComponent(cc.Button).enabled = false;//取消事件拦截
            val.onRemoveFromStack();                //执行删除事件   
            val.node.removeFromParent(clear);       //从场景中删除     
            this.hashUiCtrl.remove(name);           //从队列删除                   
        }         
    }

    /**
     * 添加多个ui进队列，会触发显示窗口动画
     * @param ctrls ui队列
     * @param hideOld 是否隐藏旧窗口，当上面的弹窗关闭时，被隐藏的旧弹窗会自动再显示出来
     */
    public pushViews(ctrls: Array<UiCtrl>, hideOld: boolean): void
    {
    }

    /**
     * 删除所有弹窗ui
     * @param clear 是否释放ui资源
     */
    public removeAllViews(clear: boolean = true): void
    {
        //先删除ui数据
        this.hashUiCtrl.forEach(
            (k, v)=>
            {
                v.onRemoveFromStack();          //执行删除事件   
                v.node.removeFromParent(clear); //从场景中删除     
            }
        );
        //清空队列
        this.hashUiCtrl.clear();
    }

    /**
     * 返回最上面的窗口
     */
    public lastView(): UiCtrl
    {
        return this.hashUiCtrl.getLast();
    }

    /**
     * 是否有某名称的窗口
     * @param name 
     */
    public hasName(name: string): boolean
    {
        return this.hashUiCtrl.has(name);
    }

    /**
     * 返回某名称的窗口
     * @param name 窗口名
     */
    public getViewByName(name: string): UiCtrl
    {
        return this.hashUiCtrl.get(name);
    }

    /**
     * 已有的ui窗口总数
     */
    public getViewCount(): number
    {
        return this.hashUiCtrl.length;
    }

    /**
     * 是否没有ui窗口
     */
    public isEmpty(): boolean
    {
        return this.hashUiCtrl.length == 0;
    }

    start()
    {

    }

    // update (dt) {}
}
