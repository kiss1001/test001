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
 * http错误提示定义
 */
export const enum EnumErrorHttp
{
    success                     = "success",                    //API调用成功，对应response code 200-299
    invalid_data                = "invalid_data",               //无效的请求数据，对应response code 400
    object_not_found            = "object_not_found",           //所请求的对象不存在，对应response code 404
    dependency_failed           = "dependency_failed",          //API所依赖的第三方服务调用失败，对应response code 500
    object_conflict             = "object_conflict",            //所请求的对象与现有的对象冲突，对应response code 409
    more_data                   = "more_data",                  //需要更多的数据完成请求对象（具体API会具体说明需要什么数据），对应response code 200-299
    service_not_ready           = "service_not_ready",          //系统服务还没有就绪，可以重试，对应response code 503
    invalid_credentials         = "invalid_credentials",        //无效的用户令牌或者非法的用户信息，对应response code 401或者400
    password_change_required    = "password_change_required",   //需要修改密码（发生在登录API上），对应response code 200-299
    not_supported               = "not_supported",              //API不支持所请求的操作，请联系客服
    unknwn                      = "unknwn",                     //未知系统错误，对应response code 500
    challenge_failed            = "challenge_failed",           //用户密保问题答案中有无效的答案
    bank_account_required       = "bank_account_required",      //需要完善银行卡信息，该错误信息一般由申请兑奖时发生，对应response code 400
}

/**
 * web scoket错误提示定义
 */
export enum EnumErrorWs
{

}

/**
 * 错误类
 */
export class ErrorCore
{
    /**
     * 根据错误码，返回http错误提示具体信息
     * @param code http返回码
     */
    public static getErrorMsgHttp(code: number)
    {

    }

    /**
     * 根据错误码，返回web scoket错误提示具体信息
     * @param code 错误码
     */
    public static getErrorMsgWs(code: number)
    {

    }
}