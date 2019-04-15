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
 * 状态机接口
 */
export class IState
{    
    private _type:       number     = null;      //当前状态类型
    private _nextState:  IState     = null;      //下一状态
    private _endState:   IState     = null;      //结束状态

    /**
     * 设置状态类型
     */
    public set setType(type: number) { this._type = type; }

    /**
     * 返回状态类型
     */
    public get type(): number{ return this._type; }

    /**
     * 设置下一状态
     * @param state 
     */
    public setNext(state: IState) { this._nextState = state}

    /**
     * 设置结束状态
     * @param state 
     */
    public setEnd(state: IState) { this._endState = state}

    /**
     * 切换状态
     * @param state 状态类型
     */
    public onChange(state: IState) {}    

    /**
     * 切换到下一状态
     */
    public next() {}

    /**
     * 进入状态
     */
    public onEnter() {}

    /**
     * 退出状态
     */
    public onEnd() {}
}
