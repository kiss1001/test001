import Str from "../../framework/util/Str";
import { HttpResult } from "./HttpResult";
import Json from "../../framework/util/Json";

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
 * 常用工具类
 */
export default class Tool
{
    //返回token随机值,24位
    public static getTokenRand(): string
    {
        return Str.getRandStr(24);
    }

    /**
     * 取http返回信息的result数据
     * @param str 原始http返回数据，json结构字符串
     */
    public static getHttpResult(str: string): any
    {
        let res: HttpResult = Json.Str2Obj<HttpResult>(str);
        return res.result;
    }

    public static getHttpRes(str: string): HttpResult
    {
        return Json.Str2Obj<HttpResult>(str);
    }
}
