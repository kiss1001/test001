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
 * 窗口UI枚举
 */
export enum EnumUi
{
    testUi      = "prefabs/testUi",                     //测试
    register    = "prefabs/login/Register",             //用户注册
    dialog      = "prefabs/common/Dialog",              //标题、内容、取消、确定。模式对话框

    updateBank  = "prefabs/center/UpdateBank",          //修改用户银行卡信息

    listViewTxt = "prefabs/common/ListViewTxt",         //显示纯文本的滚动列表
}
