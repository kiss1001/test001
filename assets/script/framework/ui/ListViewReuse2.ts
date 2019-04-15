import UiCtrl from "./UiCtrl";
import HashMap from "../util/HashMap";
import { Fun_n_node, Fun_n_ret_n, Fun_n_ret_node, TypeCell, Fun_n_ret_cell } from "../util/Func";
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


//滚动方向
export enum RollDirection
{
    Vertical = 0,   //垂直滚动
    Horizontal,     //水平滚动
}

/**
 * 自动复用格子列表，支持多种格子类型，每个格子高度可以不同
 */
@ccclass
export class ListViewReuse2 extends UiCtrl
{
    @property(cc.ScrollView)
    scrollView: cc.ScrollView   = null;                     //滚动列表
    rollDir: RollDirection      = RollDirection.Vertical;   //默认垂直滚动

    private hashCellFree: HashMap<number, TypeCell[]> = new HashMap();//空闲的格子，key代表格子类型
    private listBusyCell: TypeCell[] = [];//已经使用的格子

    protected totalcount: number            = 0;        //格子总数
    protected cellSpace: number             = 0;        //格子间隙
    private updateInterval: number          = 0.2;      //更新频率0.3秒一次
    private updateTimer: number             = 0;        //最后一次刷新时间
    private funCellData: Fun_n_node         = null;     //刷新一个格子数据函数，参数(格子index, 格子Prefab)
    private funCellSize: Fun_n_ret_n        = null;     //查询格子高度的回调函数
    private funCellCreator: Fun_n_ret_cell  = null;     //创建格子函数
    private lastContentPos: number          = 0;        //最后一次content移动后y轴或者x轴位置


    /**
     * 设置创建格子需要回调函数
     * @param funSize 查询格子大小函数
     * @param funCreator 创建格子函数
     * @param funData 设置格子数据函数
     * @param space 格子间距
     */
    public setCellFun(funSize: Fun_n_ret_n, funCreator: Fun_n_ret_cell, 
        funData: Fun_n_node, space: number = 0)
    {
        this.funCellSize    = funSize;
        this.funCellCreator = funCreator;
        this.funCellData    = funData;
        this.cellSpace      = space;
    }

    /**
     * 设置格子总数
     * @param count 
     */
    public setCellCount(count: number)
    {
        this.totalcount = count;    //格子总数         
        this.initCell();            //初始化格子
    }

    /**
     * 弹出最后一个空闲格子，弹出后格子不在空闲列表内
     * @param type 格子类型
     */
    public popFreeCell(type: number): TypeCell
    {
        let listCell = this.hashCellFree.get(type);     //需要类型的格子
        if (null != listCell && listCell.length > 0)    
            return listCell.pop();                      //还存在剩余格子就返回
        return null;                                    //没有返回null
    }

    //初始化格子
    private initCell()
    {
        this.resetContent();    //重置滚动内容大小
        this.resetCell();       //重置格子
    }    

    //重新设置content大小
    private resetContent()
    {
        let heightAll = 0;                              //总高度
        for (let i = 0; i < this.totalcount; ++i)
        {
            heightAll += this.funCellSize(i);           //加上每个格子高度
            heightAll += this.cellSpace;                //加上间隔
        }
        this.scrollView.content.height = heightAll;     //设置滚动列表总高度
    }

    //重置格子
    private resetCell()
    {
        for (let i = 0; i < this.listBusyCell.length; ++i)
        {
            //添加格子到空闲列表
            this.pushFreeCell(this.listBusyCell[i]);
        }
        //清空使用列表
        this.listBusyCell = [];

        for (let i = 0; i < this.totalcount; ++i)
        {
            let y = this.funCellSize(i);                //格子高度
            let cell = this.funCellCreator(i);          //创建格子
            if (i == 0) y =  y / 2;                     //第一个格子只要移动一半的高度
            this.pushBackCell(cell, y);                 //添加格子到显示列表后面

            if (!this.isInScrollViewByItem(cell.item)) break; //超过显示区域就退出
        }
    }

    update(dt) 
    {
        //return;
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return;                 //不用每帧刷新
        this.updateTimer = 0;

        let move = this.scrollView.content.y - this.lastContentPos;         //移动距离
        if (move == 0) return;                                              //没有移动

        //循环列表，把不在显示区域内的格子放入空闲列表
        this.autoFreeCell();
        
        if (move > 0)           //列表向上移动或者向下移动时，设置空白区域显示新的格子
            this.autoCreatorCell_Up();
        else if (move < 0)      //列表向上移动或者向下移动时，设置空白区域显示新的格子
            this.autoCreatorCell_Down();

        //保存最后位置
        this.lastContentPos = this.scrollView.content.y;
    }

    //循环列表，把不在显示区域内的格子放入空闲列表，并且返回
    private autoFreeCell()
    {
        let listBusy = this.listBusyCell;               //已经使用的格子
        for (let i = 0; i < listBusy.length; ++i)
        {
            if (listBusy.length <= 1) break;            //最少要保持一个格子
            let cell = listBusy[i];
            if (!this.isInScrollViewByItem(cell.item))  //格子不在滚动列表可视区域  
            {
                let freeCell = listBusy.splice(i, 1);   //从已使用队列中删除
                this.pushFreeCell(freeCell[0]);         //添加到空闲列表
                --i;                                    //格子被移除，下次循环要减一
            }            
        }
    }

    //列表向上移动时，设置空白区域显示新的格子
    private autoCreatorCell_Up()
    {
        let length = this.listBusyCell.length;
        if (length <= 0) return;
        let lastCell  = this.listBusyCell[length - 1];          //标记最后一个格子
        let viewPos = this.getPositionInWorld(lastCell.item);   //最下面格子位置

        let index = lastCell.index + 1;                         //第几个格子
        let moveSp = this.funCellSize(index);                   //移动距离
        viewPos.y -= moveSp;                                    //往上移动，y轴减少
        let isAdd = false;                                      //还没有增加过一个格子
        while (this.totalcount > index)
        {
            if (this.isInScrollViewByPos(viewPos))
            {
                let newCell = this.funCellCreator(index);       //得到新的格子
                this.pushBackCell(newCell, moveSp);             //把格子加到可见列表的后面
                this.funCellData(index, newCell.item);          //格子显示数据            
            }
            else
            {
                //已经添加过格子，出现第一个不在范围的格子，之后的格子肯定不在可见范围
                if (isAdd) break;
            }
            index += 1;                                         //标记增加
            moveSp = this.funCellSize(index);                   //移动距离
            viewPos.y -= moveSp;                                //格子下移
        }
        
    }

    //列表向下移动时，设置空白区域显示新的格子
    private autoCreatorCell_Down()
    {
        let length = this.listBusyCell.length;
        if (length <= 0) return;
        let firstCell = this.listBusyCell[0];
        let viewPos = this.getPositionInWorld(firstCell.item);  //最上面格子位置

        let index = firstCell.index - 1;                        //第几个格子
        let moveSp = this.funCellSize(index);                   //每次移动距离
        viewPos.y += moveSp;                                    //往下移动，y轴增加
        let isAdd = false;                                      //还没有增加过一个格子
        while (index >= 0)
        {
            //更上面的格子要是有在显示区域内就要放入可见列表的前面
            if (this.isInScrollViewByPos(viewPos))
            {
                let newCell = this.funCellCreator(index);           //得到新的格子
                this.addFrontCell(newCell, moveSp);                 //把格子加到可见列表的前面
                this.funCellData(index, newCell.item);              //格子显示数据  
                isAdd = true;                                       //格子有增加过          
            }
            else
            {
                //已经添加过格子，出现第一个不在范围的格子，之后的格子肯定不在可见范围
                if (isAdd) break;
            }
            index -= 1;                                         //标记减少
            moveSp = this.funCellSize(index);                   //移动距离
            viewPos.y += moveSp;                                //格子上移
        }
        
    }

    /**
     * 添加一个格子到空闲列表
     * @param cell 格子
     */
    private pushFreeCell(cell: TypeCell)
    {
        cell.item.removeFromParent(false);               //格子从父节点移除
        let listCell = this.hashCellFree.get(cell.type); //以类型查询
        if (null == listCell) 
            this.hashCellFree.add(cell.type, [cell]);    //为空就添加新的
        else
            listCell.push(cell);                         //已有此类型格子就添加到最后        
    }

    //把格子加到可见列表的后面
    private pushBackCell(newCell: TypeCell, moveSp: number)
    {
        let y = 0;       //格子初始位置                           
        let index = -1;  //格子初始index      
        if (this.listBusyCell.length > 0)
        {
            let lastCell = this.listBusyCell[this.listBusyCell.length - 1]; //最后一个格子
            y = lastCell.item.y;
            index = lastCell.index;            
        }
        newCell.item.y = y - moveSp;                                    //设置格子位置
        newCell.index = index + 1;                                      //新格子index加1
        this.scrollView.content.addChild(newCell.item);                 //格子添加进父节点
        this.listBusyCell.push(newCell);                                //格子加入已使用队列最面
    }    

    //把格子加到可见列表的前面
    private addFrontCell(newCell: TypeCell, moveSp: number)
    {
        let lastCell = this.listBusyCell[0];                            //第一个格子
        let pos = lastCell.item.position;                               //位置
        pos.y += moveSp;                                                //新位置在第一个格子的上面
        newCell.item.position = pos;                                    //设置格子位置
        newCell.index = lastCell.index - 1;                             //新格子index减1
        this.scrollView.content.addChild(newCell.item);                 //格子添加进父节点
        this.listBusyCell.splice(0, 0, newCell);                        //格子加入已使用队列最前面
    }

    //格子是否在滚动列表可见区域
    private isInScrollViewByItem(item: cc.Node): boolean
    {
        let pos = this.getPositionInWorld(item);
        return this.isInScrollViewByPos(pos);
    }

    //某位置是否在scrollView可视区域，pos必须是世界坐标
    private isInScrollViewByPos(pos: cc.Vec2): boolean
    {
        return UiTool.nodeContains(this.scrollView.node, pos);
    }

    //返回格子在scrollView中的位置
    private getPositionInView(item: cc.Node): cc.Vec2
    {
        let worldPos = this.getPositionInWorld(item);
        return this.scrollView.node.convertToNodeSpaceAR(worldPos);
    }

    //返回格子在scrollView中的位置
    private getPositionInWorld(item: cc.Node): cc.Vec2
    {
        return item.parent.convertToWorldSpaceAR(item.position);
    }
}
