import UiCtrl from "./UiCtrl";
import ResTool from "../res/ResTool";
import { Fun_n_node } from "../util/Func";

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

export class IndexItem
{
    index: number;      //第几个格子，0开始
    item:  cc.Node;     //格子
}

/**
 * 自动复用格子列表，纵向滚动
 */
@ccclass
export default class ListViewVReuse extends UiCtrl
{
    @property(cc.ScrollView)
    scrollView: cc.ScrollView = null;        //滚动列表

    @property(cc.Prefab)
    itemTemplate: cc.Prefab = null;          //格子模板

    protected totalcount: number    = 0;     //格子总数
    protected itemCount: number     = 0;     //实际创建格子数
    protected itemHeight: number    = 0;     //格子高度
    protected space: number         = 0;     //格子间间隙
    protected resetDis: number      = 0;     //超过此距离(相对于中心原点)，格子会被移动复用
    private updateInterval: number  = 0.3;   //更新频率0.3秒一次
    private updateTimer: number     = 0;     //最后一次刷新时间
    private updateDataFunc: Fun_n_node = null;//刷新一个格子数据函数，参数(格子index, 格子Prefab)
    private items: IndexItem[]      = null;  //存放创建的格子
    private lastContentPosY: number = 0;     //最后一次content移动后y轴位置

    /**
     * 设置更新格子数据时的回调函数
     * @param func 更新格子显示数据的回调函数
     * @param height 格子高度     
     * @param space 格子间间隔
     */
    public setItemFunc(func: Fun_n_node, height: number = 0, space: number = 0)
    {
        this.updateDataFunc = func;
        let item0           = ResTool.instanPrefab(this.itemTemplate);
        this.itemHeight     = height != 0 ? height : item0.height;      //保存格子高度
        this.space          = space;                                    //间隔
        let totalH          = this.scrollView.node.height;              //可见显示高度
        this.resetDis       = totalH / 2;                               //超过此距离，格子会被移动复用
        let count           = totalH / (this.itemHeight + space) + 2;   //创建格子总数
        this.items          = [];
        let cellSp          = this.itemHeight + this.space;             //格子总间隔
        for (let i = 0; i < count; ++i)
        {
            let item        = (i == 0) ? item0 : 
                            ResTool.instanPrefab(this.itemTemplate);    //复制格子
            item.active     = false;                                    //不可见
            item.y          = -((cellSp / 2) + (cellSp * i));
            this.scrollView.content.addChild(item);                     //添加     

            let indexItem   = new IndexItem(); 
            indexItem.index = i;                                        //第几个格子
            indexItem.item  = item;
            this.items.push(indexItem);
        }
    }

    /**
     * 设置格子总数
     * @param count 
     */
    public setCount(count: number)
    {
        //滚动列表总高度
        this.scrollView.content.height = count * (this.itemHeight + this.space);
        for (let i = 0; i < count && i < this.items.length; ++i)
        {
            this.items[i].item.active = true;
            this.updateDataFunc(i, this.items[i].item);//更新数据
        }
    }

    update(dt) 
    {
        //return;
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return;                 //不用每帧刷新
        this.updateTimer = 0;

        let items = this.items;
        let resetDis    = this.resetDis;
        let isDown      = this.scrollView.content.y < this.lastContentPosY; //是否下移
        let offset      = (this.itemHeight + this.space) * items.length;    //每次偏移距离
        for (let i = 0; i < items.length; ++i)
        {
            let cell = items[i];
            let viewPos = this.getPositionInView(cell.item);
            if (isDown)
            {
                //格子下移时超过显示的范围，并且还没滚到顶。的格子重现设置位置和显示数据
                if (viewPos.y < -resetDis && cell.item.y + offset < 0)
                {
                    cell.item.y = cell.item.y + offset;         //列表往下滚动，格子就要上移
                    cell.index  = cell.index - items.length;    //更新格子index
                    this.updateDataFunc(cell.index, cell.item); //更新格子显示的数据
                }
            } else
            {
                //格子上移时超过显示的范围，并且还没滚到底。的格子重现设置位置和显示数据
                if (viewPos.y > resetDis && cell.item.y - offset > -this.scrollView.content.height)
                {
                    cell.item.y = cell.item.y - offset;         //列表往上滚动，格子就要下移
                    cell.index  = cell.index + items.length;    //更新格子index
                    this.updateDataFunc(cell.index, cell.item); //更新格子显示的数据
                }
            }
        }
        //保存最后位置
        this.lastContentPosY = this.scrollView.content.y;
    }

    //返回格子在scrollView中的位置
    getPositionInView(item: cc.Node): cc.Vec2
    {
        let worldPos = item.parent.convertToWorldSpaceAR(item.position);
        return this.scrollView.node.convertToNodeSpaceAR(worldPos);
    }
}
