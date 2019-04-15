import UiCtrl from "../../../../framework/ui/UiCtrl";
import { Fun2 } from "../../../../framework/util/Func";

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
 * 下拉框列表item
 */
@ccclass
export default class DropItemUiCtrl extends UiCtrl
{

    @property(cc.Label)
    labDesc: cc.Label = null;       //显示内容

    private _key: string = null;    //数据key
    private _func: Fun2 = null;    //点击回调函数

    // onLoad () {}

    start()
    {

    }

    // update (dt) {}

    /**
     * 设置显示内容
     * @param key key
     * @param desc 显示内容
     * @param func 选中回调函数
     */
    public setData(key: string, desc: string, func: Fun2)
    {
        this._key = key;
        this.labDesc.string = desc;
        this._func = func;
    }

    //点击选中事件
    public onSelect()
    {
        if (this._func) 
            this._func(this._key, this.labDesc.string);
    }
}
