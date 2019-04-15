import UiCtrl from "../../../../framework/ui/UiCtrl";
import { EnumUi } from "../../../config/EnumUi";
import { UiType } from "../../../../framework/ui/UiMgr";
import Tool from "../../../common/Tool";
import WorldModel from "../../../WorldModel";
import Log from "../../../../framework/log/Log";
import WorldUi from "../../../WorldUi";
import { EnumUiScene } from "../../../config/EnumUiScene";
import { ConstTxt } from "../../../config/ConstTxt";
import Str from "../../../../framework/util/Str";
import DialogCtrl from "../common/DialogCtrl";
import WorldCore, { WorldScene } from "../../../WorldCore";
import UserModel, { UserEvent } from "../../../model/user/UserModel";
import { InUserRegister } from "../../../model/user/UserData";
import CodeModel from "../../../model/connect/CodeModel";

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
 * 用户注册ui
 */
@ccclass
export default class RegisterUiCtrl extends UiCtrl
{

    @property(cc.EditBox)
    edtAccount: cc.EditBox = null;    //用户名

    @property(cc.EditBox)
    edtPwd1: cc.EditBox = null;       //密码

    @property(cc.EditBox)
    edtPwd2: cc.EditBox = null;       //密码确认

    @property(cc.Label)
    labEncrypted: cc.Label = null;    //密保。未使用

    @property(cc.EditBox)
    labAnswer: cc.EditBox = null;     //密保答案。未使用

    @property(cc.EditBox)
    edtCode: cc.EditBox = null;       //验证码

    @property(cc.Sprite)
    imgCode: cc.Sprite = null;       //验证码图片

    private tokenCode: string = null;           //验证码对应的token

    private codeModel:  CodeModel   = null;     //验证码model
    private userModel:  UserModel   = null;     //用户model
    private dialog:     DialogCtrl  = null;     //模式对话框    

    // LIFE-CYCLE CALLBACKS:

    init()
    {
        this.uiType = UiType.SCENE; //场景层ui，必须铺满窗口        
    }

    onLoad()
    {
        this.codeModel = WorldModel.code;   //验证码模块
        this.userModel = WorldModel.user;   //用户信息模块
        this.dialog = WorldUi.dialog;       //模式对话框ui
    }

    onEnable()
    {
        //添加监听事件
        this.userModel.addListener(UserEvent.userRegister, this.onRegisterEvent.bind(this), this.classId);
    }

    onDisable()
    {
        //删除监听事件
        this.userModel.removeListener(this.classId);
    }

    start()
    {
        this.onChangeCode();
    }

    //更新验证码
    public onChangeCode()
    {
        this.tokenCode = Tool.getTokenRand(); //随机token
        this.codeModel.getCodeImg(this.imgCode, this.tokenCode);
    }

    //注册
    public onRegister()
    {
        let token      = this.tokenCode;                            //token
        let txtAccount = Str.delSpace(this.edtAccount.string);      //账户
        let pwd1       = Str.delSpace(this.edtPwd1.string);         //密码
        let pwd2       = Str.delSpace(this.edtPwd2.string);         //密码确认
        let code       = Str.delSpace(this.edtCode.string);         //验证码
        if (Str.isEmpty(txtAccount))
            return this.dialog.showError(ConstTxt.mustWriteAccount);//请输入账号
        
        if (Str.isEmpty(pwd1))
            return this.dialog.showError(ConstTxt.mustWritePwd);//请输入密码

        if (Str.isEmpty(pwd2))
            return this.dialog.showError(ConstTxt.mustWritePwd2);//请输入确认密码
        
        if (Str.isEmpty(code))
            return this.dialog.showError(ConstTxt.mustWriteCode);//请输入验证码
        
        if (pwd1 != pwd2)
            return this.dialog.showError(ConstTxt.pwdNotSmae);//两次输入密码不一致
        
        let data = new InUserRegister();
        data.accountName    = txtAccount;   //用户名
        data.password       = pwd1;         //密码
        this.userModel.userRegister(token, code, data);
    }

    //注册返回
    public onRegisterEvent()
    {
        let res = this.userModel.registerResult;   //注册结果
        if (null != res)//注册成功
        {
            this.dialog.showOk(ConstTxt.registerSuccess, ()=>
            {
                //跳转到游戏界面
                WorldCore.change(WorldScene.game);
            });
        }
    }
}
