// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html


export interface KeyValue<K, V>
{
    key: K,
    value: V
}

/**
 * 键值对map实现
 */
export default class HashMap<K, V>
{
    //存储列表
    private _list: KeyValue<K, V>[];

    constructor()
    {
        this.clear();
    }

    //通过key获取索引
    private getIndexByKey(key: K): number
    {
        var count: number = this._list.length;
        for (let index = 0; index < count; index++)
        {
            const element: KeyValue<K, V> = this._list[index];
            if (element.key == key)
            {
                return index;
            }
        }
        return -1;
    }

    /**
     * 添加键值
     */
    public add(key: K, value: V): void
    {
        var data: KeyValue<K, V> = { key: key, value: value };
        var index: number = this.getIndexByKey(key);
        if (index != -1)
        {
            //已存在：刷新值
            this._list[index] = data;
        }
        else
        {
            //不存在：添加值
            this._list.push(data);
        }
    }

    /**
     * 删除键值
     */
    public remove(key: K): any
    {
        var index: number = this.getIndexByKey(key);
        if (index != -1)
        {
            var data: KeyValue<K, V> = this._list[index];
            this._list.splice(index, 1);
            return data;
        }
        return null;
    }

    /**
     * 是否存在键
     */
    public has(key: K): boolean
    {
        var index: number = this.getIndexByKey(key);
        return index != -1;
    }

    /**
     * 通过key获取键值value
     * @param key 
     */
    public get(key: K): V
    {
        var index: number = this.getIndexByKey(key);
        if (index != -1)
        {
            var data: KeyValue<K, V> = this._list[index];
            return data.value;
        }
        return null;
    }

    /**
     * 返回最后一个值
     */
    public getLast(): V
    {
        let length = this._list.length;
        let elem = this._list[length - 1];
        return elem.value;
    }

    /**
     * 获取数据个数
     */
    public get length(): number
    {
        return this._list.length;
    }


    /**
     * 遍历列表，回调(data:KeyValue<K, V>)
     */
    public forEachKeyValue(f: { (data: KeyValue<K, V>): void })
    {
        var count: number = this._list.length;
        for (let index = 0; index < count; index++)
        {
            const element: KeyValue<K, V> = this._list[index];
            f(element);
        }
    }

    /**
     * 遍历列表，回调(K,V)
     */
    public forEach(f: { (key: K, value: V): void })
    {
        var count: number = this._list.length;
        for (let index = 0; index < count; index++)
        {
            const element: KeyValue<K, V> = this._list[index];
            f(element.key, element.value);
        }
    }

    /**
     * 清空全部
     */
    public clear(): void
    {
        this._list = [];
    }
}

