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
 * json公共工具类
 */
export default class Json
{
    /**
     * 把类转换为json格式字符串
     * @param obj 需要转为json字符串的类
     */
    public static obj2Str(obj: any): string
    {
        return JSON.stringify(obj);
    }

    /**
     * 把json字符串转为类
     * @param jStr json字符串
     */
    public static Str2Obj<T>(jStr: string): T
    {
        return JSON.parse(jStr) as T;
    }
}
