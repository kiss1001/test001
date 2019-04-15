import UiCtrl from "../../../../framework/ui/UiCtrl";
import ResTool from "../../../../framework/res/ResTool";
import ResLoader from "../../../../framework/res/ResLoader";
import DropItemUiCtrl from "./DropItemUiCtrl";

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

@ccclass
export default class DropListUiCtrl extends UiCtrl
{
    @property(cc.Node)
    content: cc.Node = null;    //内容父节点

    @property(cc.Prefab)
    item: cc.Prefab = null;     //格子

    private _count = 0;         //数据条数
    
    /**
     * 添加显示内容
     * @param key key
     * @param desc 显示内容
     */
    public addItem(key:string, desc:string)
    {
        let item = this.getItem();
        let ctrl: DropItemUiCtrl = ResTool.getUiCtrl(item);
        //ctrl.setData(key, desc, func);
    }

    //返回格子
    private getItem(): cc.Node
    {
        return ResTool.instanPrefab(this.item);
    }

    //
}
