import WorldUi from "../../../WorldUi";
import { EnumUi } from "../../../config/EnumUi";

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
 * 用户注册
 */
export default class RegisterCtrl
{
    private static singleInstance: RegisterCtrl = null;    

    private constructor() {}   //私有构造函数
    public init(){}            //初始化 

    //显示注册界面
    public show()
    {
        WorldUi.showUi(EnumUi.register);
    }
}
