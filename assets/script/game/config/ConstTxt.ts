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
 * 字符串常量
 */
export const enum ConstTxt
{
    registerSuccess     = "注册成功",
    accountExist        = "账号已存在",
    registerError       = "账户或验证码错误，请核查",
    loginPwdError       = "用户名或密码错误",
    codeError           = "验证码错误",

    mustWriteAccount    = "请输入账号",
    mustWritePwd        = "请输入密码",
    mustWritePwd2       = "请输入确认密码",
    mustWriteCode       = "请输入验证码",
    pwdNotSmae          = "两次输入密码不一致",

    updateBankSuccess   = "银行信息修改成功",

    peopleNum           = "({0}人)",
}
