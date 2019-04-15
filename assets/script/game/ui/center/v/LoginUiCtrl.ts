import Str from "../../../../framework/util/Str";
import Tool from "../../../common/Tool";
import UiCtrl from "../../../../framework/ui/UiCtrl";
import WorldUi from "../../../WorldUi";
import { EnumUi } from "../../../config/EnumUi";
import WorldModel from "../../../WorldModel";
import DialogCtrl from "../../prefabs/common/DialogCtrl";
import { ConstTxt } from "../../../config/ConstTxt";
import WorldCore, { WorldScene } from "../../../WorldCore";
import Log from "../../../../framework/log/Log";
import UserModel, { UserEvent } from "../../../model/user/UserModel";
import { InUserRegister } from "../../../model/user/UserData";
import CodeModel from "../../../model/connect/CodeModel";
import { pro } from "../../../model/protoType/pro";


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
 * 登录界面Ui管理器
 */
@ccclass
export default class LoginUiCtrl extends UiCtrl
{
    @property(cc.Node)
    uiRoot: cc.Node = null;         //场景根节点

    @property(cc.EditBox)
    edtAccount: cc.EditBox = null;  //用户名

    @property(cc.EditBox)
    edtPwd: cc.EditBox = null;      //密码

    @property(cc.EditBox)
    edtCode: cc.EditBox = null;     //验证码

    @property(cc.Sprite)
    imgCode: cc.Sprite = null;      //验证码图片

    private tokenCode: string = null;   //验证码对应的token

    private code:  CodeModel   = null;     //验证码model
    private user:  UserModel   = null;     //用户model
    private dialog:     DialogCtrl  = null;     //模式对话框    

    onLoad()
    { 
        WorldUi.setRoot(this.uiRoot);       //设置Ui窗口父节点    
        this.code = WorldModel.code;        //验证码模块
        this.user = WorldModel.user;        //用户信息模块
        this.dialog = WorldUi.dialog;       //模式对话框ui
    }

    start()
    {
        this.onChangeCode();
    }

    onEnable()
    {
        //添加监听事件
        this.user.addListener(UserEvent.userLogin, this.onLoginEvent.bind(this), this.classId);
    }

    onDisable()
    {
        //删除监听事件
        this.user.removeListener(this.classId);
    }

    // update (dt) {}

    //更新验证码
    public onChangeCode()
    {
        this.tokenCode = Tool.getTokenRand(); //随机token
        //显示验证码
        this.code.getCodeImg(this.imgCode, this.tokenCode);
    }

    //跳转到注册
    public onRegister()
    {
        WorldUi.showUi(EnumUi.register);//显示注册窗口
    }

    //登录
    public onLogin()
    {
        let token      = this.tokenCode;                          //token
        let txtAccount = Str.delSpace(this.edtAccount.string);    //账户
        let pwd        = Str.delSpace(this.edtPwd.string);        //密码
        let code       = Str.delSpace(this.edtCode.string);       //验证码
        if (Str.isEmpty(txtAccount))
            return this.dialog.showError(ConstTxt.mustWriteAccount);//请输入账号

        if (Str.isEmpty(pwd))
            return this.dialog.showError(ConstTxt.mustWritePwd);//请输入密码

        if (Str.isEmpty(code))
            return this.dialog.showError(ConstTxt.mustWriteCode);//请输入验证码
     
        let data = new InUserRegister();
        data.accountName    = txtAccount;      //账号
        data.password       = pwd;             //密码
        this.user.userLogin(token, code, data);
    }

    //登录结果返回
    private onLoginEvent()
    {
        let res = this.user.loginInfo;   //登录结果
        if (null != res)//注册成功
        {
            //跳转到游戏界面
            WorldCore.change(WorldScene.game);
        }
    }

    private testProto()
    {
        let a = new pro.Award();
        a.amount = 100;
        let buffer  = pro.Award.encode(a).finish();
        let decoded = pro.Award.decode(buffer);

        Log.warn(buffer);
        Log.warn(decoded);

        let k = new pro.ResponseMessage();
        k.messageType = 1111;
        let b = new pro.LoginResponse();
        let p = new pro.Player();
        p.accountName = "小";
        p.name = "大";
        b.player = p;
        k.body = pro.LoginResponse.encode(b).finish();

        let k1 = pro.ResponseMessage.encode(k).finish();
        Log.error(k1);
        let k2 = pro.ResponseMessage.decode(k1);
        Log.error(k2);

    }

}
