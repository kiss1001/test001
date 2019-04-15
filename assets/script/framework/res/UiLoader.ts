import HashMap from "../util/HashMap";
import ResLoader from "./ResLoader";
import UiGroup from "../ui/UiGroup";
import UiMgr, { UiType } from "../ui/UiMgr";
import UiCtrl from "../ui/UiCtrl";
import Log from "../log/Log";
import { Fun1 } from "../util/Func";

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
 * 加载UI资源，prefabs等
 */
@ccclass
export default class UiLoader
{

    //存放已经加载的prefab资源的键值对
    private static s_nodeMap: HashMap<string, cc.Prefab> = new HashMap<string, cc.Prefab>();

    /**
     * 加载ui窗口
     * @param name ui窗口路径名称
     * @param completeCallback 加载成功后回调
     */
    public static loadUi(name: string, completeCallback: Fun1 = null)
    {
        //已经有资源
        if (UiLoader.s_nodeMap.has(name))
        {
            let ui = cc.instantiate(UiLoader.s_nodeMap.get(name));
            UiMgr.getInstance().addUi(name, ui);      //显示Ui
            if (completeCallback) completeCallback(ui);//加载成功回调
            return;
        }

        //资源加载成功后回调函数
        let instantiatePrefab = function (error: Error, resource: any)
        {
            //资源加载失败
            if (error) 
            {
                Log.error(error);
                return;
            }

            let prefab = resource as cc.Prefab;
            if (!UiLoader.s_nodeMap.has(name))
            {
                //复制一份资源实例
                let resPrefab = cc.instantiate<cc.Prefab>(prefab);
                UiLoader.s_nodeMap.add(name, resPrefab);
            }

            let ui = cc.instantiate(prefab);
            UiMgr.getInstance().addUi(name, ui);        //显示Ui

            if (completeCallback) completeCallback(ui);//加载成功回调
        }

        //开始加载资源
        ResLoader.loadResTry(name, cc.Prefab, instantiatePrefab);
    }

}
