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
 * 错误日志等，上报接口
 */
export default class Log
{

    /**
     * 输出错误
     * @param msg 错误信息
     */
    public static error(msg: any)
    {
        cc.error(msg);
    }

    /**
     * 输出日志信息
     * @param msg 日志信息
     */
    public static info(msg: any)
    {
        cc.log(msg);
    }

    /**
     * 输出警告信息
     * @param msg 警告信息
     */
    public static warn(msg: any)
    {
        cc.warn(msg);
    }


}
