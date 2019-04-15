import Singleton from "../util/Singleton";
import Log from "../log/Log";

/**
 * 事件类型
 */
interface IEvent
{
    type: number,               //事件类型
    priority: number,           //事件优先级，从0开始，值越大，优先级越高
    class_id: string,           //标识这个回调函数属于哪一个类(每个类都有一个唯一标识符)
    callback: (data, data2) => void    //触发函数
}

/**
 * 事件通知类，注意，如果有在事件循环中删除事件监听的情况，需要再扩展
 */
export default class EventManager extends Singleton
{
    private event_cache: { [key: number]: Array<IEvent> } = null;

    constructor()
    {
        super();
        this.event_cache = {};
    }   

    /**
     * 
     * @param {number} type 事件类型
     * @param {Function} callback 触发函数
     * @param {string} tag 标识这个回调函数属于哪一个类(每个类都有一个唯一标识符)
     * @param {number} priority 事件优先级
     */
    addListener(type: number, callback: any, class_id: string = "", priority: number = 0)
    {
        if (type < 0 || !callback)
        {
            return;
        }
        let sub_cache: Array<IEvent> = this.event_cache[type] || [];

        for (let i = 0; i < sub_cache.length; i++)
        {
            //不能重复注册
            if (sub_cache[i].callback === callback) return;
        }

        let ievent: IEvent = {
            type: type,
            class_id: class_id,
            priority: priority,
            callback: callback
        };
        if (priority > 0)
        {
            let isAdd = false;//新值还未添加进队列

            //从后往前循环，值越高，优先级越高，排前面
            for (let i = sub_cache.length - 1; i >= 0; i--)
            {
                //新值小于当前循环值，就把新值插入到循环位置后面
                if (sub_cache[i].priority > priority)
                {
                    sub_cache.splice(i + 1, 0, ievent);
                    isAdd = true;//新值已经添加进队列
                    break;
                }
            }

            //上一循环没有找到，新值就是最大值，放到第1个
            if (!isAdd) sub_cache.splice(0, 0, ievent);
            
        } else
        {
            //0值最小，是默认值，放到最后面
            sub_cache.push(ievent);
        }
        this.event_cache[type] = sub_cache;
    }

    /**
     * 事件分发
     * @param type 事件类型
     * @param params 参数
     * @param params2 参数
     */
    public dispatchEvent(type: number, params?: any, params2?: any)
    {
        if (type < 0)
        {
            return;
        }
        let sub_cache: Array<IEvent> = this.event_cache[type];
        if (!sub_cache)
        {
            return;
        }
        for (let i = 0; i < sub_cache.length; i++)
        {
            let ievent = sub_cache[i];          //事件类型
            ievent.callback(params, params2);   //通知
        }
    }

    /**
     * 删除某函数的事件监听，只有没有使用bind(this)绑定的函数才能使用此函数删除
     * @param type 事件类型
     * @param callback 要删除的监听函数
     */
    removeListenerFun(type: number, callback: any)
    {
        if (!type || !callback)
        {
            return;
        }
        let sub_cache: Array<IEvent> = this.event_cache[type];
        if (!sub_cache)
        {
            return;
        }
        for (let i = 0; i < sub_cache.length; i++)
        {
            if (sub_cache[i].callback === callback)
            {
                sub_cache.splice(i, 1);
                break;
            }
        }
        if (sub_cache.length == 0)
        {
            delete this.event_cache[type];
        }
    }

    /**
     * 删除某个类的所有监听函数
     * @param class_id 
     */
    removeListener(class_id: string)
    {
        for (let key in this.event_cache)
        {
            let sub_cache: Array<IEvent> = this.event_cache[key];
            if (!sub_cache)
            {
                continue;
            }
            for (let i = 0; i < sub_cache.length; i++)
            {
                if (sub_cache[i].class_id == class_id)
                {
                    sub_cache.splice(i, 1);//类id一样就删除
                }
            }
            if (sub_cache.length == 0)
            {
                delete this.event_cache[key];
            }
        }
    }
}
