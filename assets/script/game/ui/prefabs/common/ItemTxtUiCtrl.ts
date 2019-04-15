import UiCtrl from "../../../../framework/ui/UiCtrl";
import Str from "../../../../framework/util/Str";
import ResTool from "../../../../framework/res/ResTool";

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
 * 显示纯文本的格子，最多显示4列
 */
@ccclass
export default class itemTxt extends UiCtrl
{
    @property(cc.Label)
    labTxt: cc.Label = null;

    private labList: cc.Label[] = [];   //存放创建label

    onLoad()
    {
        this.labList.push(this.labTxt);
    }

    /**
     * 设置显示数据，最多不能超过4个
     * @param params 
     */
    public setData(...params: string[])
    {
        for (let i = 0; i < params.length; ++i)
        {
            //文本控件不足，创建控件
            if (i >= this.labList.length)
            {
                let lab = ResTool.instanNode(this.labTxt.node);
                this.labTxt.node.parent.addChild(lab);
                this.labList.push(lab.getComponent(cc.Label));
            }            
            //设置显示数据
            this.labList[i].string = !Str.isEmpty(params[i]) ? params[i] : "";
        }   
    }
    
}
