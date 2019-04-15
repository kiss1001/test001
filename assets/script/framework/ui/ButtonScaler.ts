import AudioMgr from "../audio/audioMgr";

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

//按钮声音路径
const buttonMuisc: string = "musics/button";

/**
 * 按钮缩放
 */
@ccclass
export default class ButtonScaler extends cc.Component
{

    //按钮点击时缩放比例
    @property
    pressedScale: number = 0.85;

    //按钮缩放时，动做持续时间
    @property
    transDuration: number = 0.1;    

    // use this for initialization    
    public onLoad()
    {
        let initScale = this.node.scale;
        let scaleDownAction = cc.scaleTo(this.transDuration, this.pressedScale);
        let scaleUpAction = cc.scaleTo(this.transDuration, initScale);
        function onTouchDown(event)
        {
            this.stopAllActions();
            AudioMgr.getInstance().playEffectSync(buttonMuisc, true);
            this.runAction(scaleDownAction);
        }
        function onTouchUp(event)
        {
            this.stopAllActions();
            this.runAction(scaleUpAction);
        }
        this.node.on('touchstart', onTouchDown, this.node);
        this.node.on('touchend', onTouchUp, this.node);
        this.node.on('touchcancel', onTouchUp, this.node);
    }
}
