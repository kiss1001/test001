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
 * 时间处理类
 */
export default class Time 
{
    /**
     * 时间搓转为 yyyy-MM-dd HH:mm:ss 格式
     * @param time 
     */
    static getYMD_hms(time: number): string
    {
        let date = new Date(time);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let strM = m < 10 ? ('0' + m) : m;
        let d = date.getDate();
        let strD = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        let strH = h < 10 ? ('0' + h) : h;
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let strMinute = minute < 10 ? ('0' + minute) : minute;
        let strSecond = second < 10 ? ('0' + second) : second;
        return y + '-' + strM + '-' + strD + ' ' + strH + ':' + strMinute + ':' + strSecond;
    }

}
