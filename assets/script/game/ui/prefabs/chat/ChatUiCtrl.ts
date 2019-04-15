import { ListViewReuse2 } from "../../../../framework/ui/ListViewReuse2";
import { TypeCell } from "../../../../framework/util/Func";
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

//聊天ui
@ccclass
export default class ChatUiCtrl extends ListViewReuse2
{
    @property(cc.Prefab)
    preCellChat: cc.Prefab = null;   //聊天格子

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad() 
    {
        //设置格子回调函数
        this.setCellFun(this.cellSize.bind(this), this.cellCreator.bind(this), this.setChatMsg.bind(this));
    }

    start()
    {
        this.setCellCount(100);//设置格子个数
    }

    // update (dt) {}

    //设置聊天数据
    private setChatMsg(i: number, prefab: cc.Node)
    {

    }

    //查询格子高度函数
    private cellSize(i: number): number
    {
        return 50;
    }

    //创建格子函数
    private cellCreator(i: number): TypeCell
    {
        let cell = this.popFreeCell(0);
        if (null == cell) 
        {
            cell = new TypeCell();  //格子
            cell.index = i;         //第几个格子
            cell.type = 0;          //格子类型
            cell.item = ResTool.instanPrefab(this.preCellChat);//复制格子
        }
        return cell;
    }

}
