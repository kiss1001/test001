import ResLoader from "../res/ResLoader";


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

/**
 * 音效管理
 */
@ccclass
export default class AudioMgr
{
    static singleInstance: AudioMgr = null;

    //返回音效管理单列
    static getInstance(): AudioMgr
    {
        if (AudioMgr.singleInstance == null)
        {
            AudioMgr.singleInstance = new AudioMgr();
        }
        return AudioMgr.singleInstance;
    }
    effects: Array<cc.AudioClip> = null;

    _currentMusicId: number = -1;
    _currentMusicCacheUrl: string = null;


    _currentEffectId: number = -1;
    _currentEffectCacheUrl: string = null;

    constructor()
    {
        this.effects = [];
    }

    /**
     * 设置音效大小
     * @param volume 大小
     */
    setEffectsVolume(volume: number)
    {
        cc.audioEngine.setEffectsVolume(volume);
        if (volume === 0)
        {
            this.stopEffect()
        }
    }

    /**
     * 设置背景音乐大小
     * @param volume 大小
     */
    setMusicVolume(volume: number)
    {
        cc.audioEngine.setMusicVolume(volume);
        if (volume === 0)
        {
            this.stopMusic();
        }
    }

    /**
     * 停止背景音乐
     */
    stopMusic()
    {
        cc.audioEngine.stopMusic();
    }

    /**
     * 停止音效
     */
    stopEffect()
    {
        if (this._currentEffectId < 0)
        {
            return;
        }
        cc.audioEngine.stopEffect(this._currentEffectId);
        this._currentEffectId = -1;
    }

    /**
     * 播放背景音乐
     * @param audioclip 音乐
     * @param loop 是否循环
     */
    playMusic(audioclip: cc.AudioClip, loop: boolean)
    {
        this._currentMusicCacheUrl = audioclip.nativeUrl;
        ResLoader.retatinRes(this._currentMusicCacheUrl);
        this._currentMusicId = cc.audioEngine.playMusic(audioclip, loop);
        cc.audioEngine.setFinishCallback(this._currentMusicId, () =>
        {
            ResLoader.releaseMusicRes(this._currentMusicCacheUrl);
            this._currentMusicCacheUrl = null;
            this._currentMusicId = -1;
        });
    }

    /**
     * 播放背景音乐
     * @param path 背景音乐路径
     * @param loop 是否循环
     */
    playMusicSync(path: string, loop: boolean)
    {
        ResLoader.loadAudioClip(path, function (audioclip)
        {
            this.playMusic(audioclip, loop, true)
        }.bind(this));
    }

    /**
     * 播放音效
     * @param audioclip 音效
     * @param immediately 是否立即释放
     * @param sync 是否同步播放
     */
    playEffect(audioclip: cc.AudioClip, immediately: boolean, sync: boolean)
    {
        if (immediately)
        {
            this._playEffect(audioclip, sync);
            return;
        }
        this.effects.push(audioclip);
        this._playEffect();
    }

    /**
     * 同步播放音效
     * @param path 音效路径
     * @param immediately 是否立即播放
     */
    playEffectSync(path: string, immediately: boolean, )
    {
        ResLoader.loadAudioClip(path, function (audioclip)
        {
            this.playEffect(audioclip, immediately, true);
        }.bind(this));
    }

    _playEffect(audioclip: cc.AudioClip = null, sync: boolean = false)
    {
        if (audioclip)
        {
            this._play(audioclip);
            return;
        }
        let audioclipObject = this.effects.shift();
        if (!audioclipObject)
        {
            return;
        }
        this._play(audioclipObject);
    }

    _play(audioclip: cc.AudioClip)
    {
        this._currentEffectCacheUrl = audioclip.nativeUrl;
        ResLoader.retatinRes(this._currentEffectCacheUrl);
        this._currentEffectId = cc.audioEngine.playEffect(audioclip, false);
        cc.audioEngine.setFinishCallback(this._currentEffectId, () =>
        {
            ResLoader.releaseMusicRes(this._currentEffectCacheUrl);
            this._currentEffectId = -1;
            this._currentEffectCacheUrl = null;
            this._playEffect();
        });
    }

}