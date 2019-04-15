import IState from "./common/IState";
import WorldUi from "./WorldUi";
import { EnumUiScene } from "./config/EnumUiScene";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

//世界场景枚举
export enum WorldScene
{
    login = 0,      //玩家处于登录场景(在登录场景说明玩家还未登录)
    game,           //处于操作游戏状态
    center,         //处于操作用户中心状态
}
/**
 * 世界总逻辑
 */
export default class WorldCore
{
    private static _state = null;   //当前场景

    /**
     * 显示开始场景
     */
    public static begin()
    {        
        //第一场景是登录场景
        this.change(WorldScene.login);
    }
    /**
     * 切换场景
     * @param scene 
     */
    public static change(scene: WorldScene)
    {
        //相同场景不用切换
        if (this._state == scene) return;

        this._state = scene;
        switch (scene)
        {
            case WorldScene.login://跳转到登录场景                
                return WorldUi.toScene(EnumUiScene.login);

            case WorldScene.center://跳转到用户中心场景
                return WorldUi.toScene(EnumUiScene.center);

            case WorldScene.game://跳转到游戏场景
                return WorldUi.toScene(EnumUiScene.brnn);

        }
    }
}
