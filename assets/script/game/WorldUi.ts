import UiMgr from "../framework/ui/UiMgr";
import { EnumUiScene } from "./config/EnumUiScene";
import { EnumUi } from "./config/EnumUi";
import DialogCtrl from "./ui/prefabs/common/DialogCtrl";
import { Fun1 } from "../framework/util/Func";
import ListViewTxtCtrl from "./ui/prefabs/common/ListViewTxtCtrl";

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
 * 世界Ui,可以访问到所有ui及场景
 */
export default class WorldUi
{
    //初始化ui
    public static init()
    {

    }

    /**
     * 切换场景后必须重新设置弹窗ui的根节点
     * @param root 
     */
    public static setRoot(root: cc.Node)
    {
        UiMgr.getInstance().init();
    }

    /**
     * 切换到某个场景
     * @param scene 新场景
     */
    public static toScene(scene: EnumUiScene)
    {
        UiMgr.getInstance().toScene(scene);
    }

    /**
     * 显示某个ui
     * @param ui 显示的弹窗ui
     * @param completeCallback 加载完成回调
     */
    public static showUi(ui: EnumUi, completeCallback: Fun1 = null)
    {
        UiMgr.getInstance().showUi(ui, completeCallback);
    }

    /**
     * 关闭某个ui
     * @param ui 关闭的弹窗ui
     */
    public static closeUi(ui: EnumUi)
    {
        UiMgr.getInstance().closeUi(ui);
    }

    /**
     * 关闭所有ui
     */
    public static closeAllUi()
    {
        UiMgr.getInstance().closeAllUi();
    }

    //模式对话框
    public static get dialog(): DialogCtrl {return DialogCtrl.getInstance(DialogCtrl);}

    //纯文本列表框
    public static get listViewTxt(): ListViewTxtCtrl {return ListViewTxtCtrl.getInstance(ListViewTxtCtrl);}
}
