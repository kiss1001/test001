import UiCtrl from "../ui/UiCtrl";
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

/**
 * 图片类型枚举
 */
export enum EnumImgType
{
    png = "png",    //png图片
    jpg = "jpg",    //jpg图片
}

/**
 * 加载资源工具类
 */
@ccclass
export default class ResTool
{

    /**
     * 加载远程图片
     * @param container 图片控件
     * @param url 远程图片连接
     */
    public static loadImgByUrl(container: cc.Sprite, url: string, type: EnumImgType = EnumImgType.png)
    {
        cc.loader.load({"url": url, "type": type}, function (err, texture) 
        {
            if (null != container)
            {
                let sprite = new cc.SpriteFrame(texture);   
                //sprite.retain();    
                //cc.loader.release(container.spriteFrame);//释放旧图片
                //container.spriteFrame = null;                
                container.spriteFrame = sprite;
            }            
        });
    }

    /**
     * 复制prefab
     * @param prefab 
     */
    public static instanPrefab(prefab: cc.Prefab): cc.Node
    {
        return cc.instantiate(prefab);
    }

    /**
     * 复制node节点
     * @param original 
     */
    public static instanNode<T>(original: T): T
    {
        return cc.instantiate<T>(original);
    }

    /**
     * 返回ui脚本
     * @param ui 
     */
    public static getUiCtrl<T extends UiCtrl>(ui: cc.Node): T
    {
        let name = ui.name;
        return UiTool.getUiCtrl(ui, name) as T;
    }

}
