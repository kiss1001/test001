import EventManager from "../../../framework/event/EventManager";
import { EnumUrl } from "../../config/EnumUrl";
import ResTool from "../../../framework/res/ResTool";



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
 * 验证码
 */
export default class CodeModel extends EventManager
{
    /**
     * 获取验证码图片
     * @param sprite 验证码显示到此图片
     * @param token 验证码token
     */
    public getCodeImg(sprite: cc.Sprite, token: string)
    {
        let url = EnumUrl.baseUrl + EnumUrl.httpCode + token;
        ResTool.loadImgByUrl(sprite, url);  //请求验证码
    }

    //初始化
    public init() {}
    
}
