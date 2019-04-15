import Log from "../log/Log";
import Singleton from "../util/Singleton";

/**
 * http请求
 */
export default class HttpManager extends Singleton
{
    public _get(url, path, params, callback: (error: any, ret: string) => void)
    {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 5000;
        var requestURL = url + path;
        if (params)
        {
            requestURL = requestURL + "?" + params;
        }

        xhr.open("GET", requestURL, true);
        if (cc.sys.isNative)
        {
            xhr.setRequestHeader("Accept", "text/html");
            xhr.setRequestHeader("Accept-Charset", "utf-8");
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }

        xhr.onreadystatechange = function ()
        {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300))
            {
                console.log("http res(" + xhr.responseText.length + "):" + xhr.responseText);
                try
                {
                    var ret = xhr.responseText;
                    if (callback !== null)
                    {
                        callback(null, ret);
                    }
                    return;
                } catch (e)
                {
                    callback(e, null);
                }
            }
            else
            {
                callback(xhr.readyState + ":" + xhr.status, null);
            }
        };

        xhr.send();
        return xhr;
    }

    /**
     * 进行get请求
     * @param url 请求基础路径
     * @param callback 回调
     * @param path 子路径
     * @param params get发送参数
     * @param head 附加头信息
     */
    public get(url, callback: (error: any, ret: string) => void, path = null, params = null, head: Array<string> = null)
    {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 5000;
        var requestURL = url;
        //加子路径
        if (path) requestURL += path;
        //加参数
        if (params) requestURL = requestURL + "?" + params;

        xhr.open("GET", requestURL, true);        

        if (head)
        {
            xhr.setRequestHeader(head[0], head[1]);//附加外部请求头信息
        }

        xhr.onreadystatechange = function ()
        {
            if (xhr.readyState === 4)
            {
                try
                {
                    var ret = xhr.responseText;
                    if (callback !== null)
                    {
                        callback(xhr.status, ret);
                        Log.info(ret);
                    }
                    return;          
                } catch (e)
                {
                    callback(e, null);
                }
            }
        };
        xhr.send();
        return xhr;
    }

    /**
     * 发送post数据
     * @param url 基础连接
     * @param path 子路径
     * @param params get数据
     * @param body post数据
     * @param callback 回调函数
     */
    public post(url, path, params, body, callback: (error: any, ret: string) => void, head: Array<string> = null)
    {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 5000;
        var requestURL = url + path;
        if (params)
        {
            requestURL = requestURL + "?" + params;
        }
        xhr.open("POST", requestURL, true);        

        // if (cc.sys.isNative)
        // {
        //     xhr.setRequestHeader("Accept", "text/html");
        //     xhr.setRequestHeader("Accept-Charset", "utf-8");
        //     xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        // }

        if (body)
        {
            //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Content-Type", "application/json");
            //xhr.setRequestHeader("Content-Length", body.length);
        }

        if (head)
        {
            xhr.setRequestHeader(head[0], head[1]);//附加外部请求头信息
        }

        xhr.onreadystatechange = function ()
        {
            if (xhr.readyState === 4)
            {
                try
                {
                    var ret = xhr.responseText;
                    if (callback !== null)
                    {
                        callback(xhr.status, ret);
                        Log.info(ret);
                    }
                    return;          
                } catch (e)
                {
                    callback(e, null);
                }
            }
        };
        if (body)
        {
            xhr.send(body);
        }
        return xhr;
    }

    public download(url, path, params, callback)
    {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 5000;
        var requestURL = url + path;
        if (params)
        {
            requestURL = requestURL + "?" + params;
        }

        xhr.responseType = "arraybuffer";
        xhr.open("GET", requestURL, true);
        if (cc.sys.isNative)
        {
            xhr.setRequestHeader("Accept", "text/html");
            xhr.setRequestHeader("Accept-Charset", "utf-8");
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }

        xhr.onreadystatechange = function ()
        {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300))
            {
                var buffer = xhr.response;
                var dataview = new DataView(buffer);
                var ints = new Uint8Array(buffer.byteLength);
                for (var i = 0; i < ints.length; i++)
                {
                    ints[i] = dataview.getUint8(i);
                }
                callback(null, ints);
            }
            else
            {
                callback(xhr.readyState + ":" + xhr.status, null);
            }
        };
        xhr.send();
        return xhr;
    }
}