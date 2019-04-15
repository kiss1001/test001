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

@ccclass
export default class Str 
{
    /**
     * 字符串format函数,abc{0}{1}{2} 中的0、1、2位置会按顺序放入paramArr参数内容
     * @param content 需要格式化的字符串
     * @param paramArr 放入content的可变参数
     */
    public static format(content: string, ...paramArr: Array<any>): string
    {                
        for (let i = 0; i < paramArr.length; ++i)
        {
            let reg = Str.getFormatReg(i)       //替换的正则表达式
            content = content.replace(reg, paramArr[i].toString());
        }
        return content;
    }

    //返回字符串全文替换的正则表达式
    private static getFormatReg(i: number): RegExp
    {
        switch (i)
        {
            case 0: return /\{0\}/g;
            case 1: return /\{1\}/g;
            case 2: return /\{2\}/g;
            case 3: return /\{3\}/g;
            case 4: return /\{4\}/g;
            case 5: return /\{5\}/g;
            case 6: return /\{6\}/g;
        }
        return null;
    }

    /**
     * 字符串分割成数组
     * @param str 字符串
     * @param sep 分割符
     */
    public static split(str: string, sep: string): string[]
    {
        return str.split(sep);
    }

    /**
     * 生成随机字符串
     * @param len 长度
     */
    public static getRandStr(len: number)
    {
        len = len || 32;
        var $chars = 'ABCDEFGHIJKLMNOPQRSTUCWXYZabcdefghijklmnopqrstuvwxyz12345678p';
        var maxPos = $chars.length;
        var pwd = '';
        for (let i = 0; i < len; i++)
        {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }

    /**
     * 字符串删除空格后是否为空 true:空字符串
     * @param param 判断字符串
     */
    public static isEmpty(param: string): boolean
    {
        if(typeof param == "undefined" || param == null) return true;
        
        param = Str.delSpace(param);//删除空格
        if (param == "") return true;

        return false;
    }

    /**
     * 删除字符串中所有空格
     * @param param 字符串
     */
    public static delSpace(param: string): string
    {
        return param.replace(/\s+/g,"");
    }

    /**
     * 删除字符串左右空格
     * @param param 字符串
     */
    public static delSpaceLr(param: string): string
    {
        return param.replace(/^\s+|\s+$/g,"");
    }

    /**
     * 返回显示的金额类型，默认显示2位小数
     * @param money 金额
     * @param num 显示小数点位数
     */
    public static decimal(money: string | number, num: number = 2): string
    {
        let param: number = typeof money == "string" ? parseFloat(money) : money;
        return param.toFixed(num);
    }
}
