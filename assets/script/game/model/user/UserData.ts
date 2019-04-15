// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

//用户注册，发送消息
export class InUserRegister
{
    accountName:    string;    //手机号码
    password:       string;    //密码
}

//用户注册，返回消息
export class OutUserRegister
{
    accountName:    string;    //手机号码
    id:             string;    //用户ID
}

//用户登录，返回消息
export class OutUserLogin
{
    userId:  string;           //用户id
    token:   string;           //用户令牌，用于访问用户其他信息的令牌
}

//获取用户信息，返回消息
export class OutUserInfo
{
    id:                     string;     //用户id
    role: { id: string; };
    accountName:            string;     //手机号码
    avatar:                 string;
    nickName:               string;     //昵称
    balance:                number;
    savingBalance:          number;
    email:                  string;
    phone:                  string;
    promotionCode:          string;
    status:                 number;
    hasSubAccounts:         boolean;
    createTimestamp:        number;
    passwordLastSet:        number;
    createTime:             string;
    passwordLastSetTime:    string;
}

//密保问题
export class Question
{
    id:         number;
    question:   string;
}

//密保问题列表
export class OutQuestionList
{
    list: [Question];
}

//修改用户银行信息
export class InBankAccount
{
    accountName: string;    //开户名
    bankName: string;       //银行
    accountNumber: string;  //银行账户
    province: string;       //开户所在市
    city: string;           //开户所在区
}


//获取用户银行信息，返回
export class OutBankAccount
{
    userId: number;         //用户id
    accountName: string;    //开户名
    bankName: string;       //银行
    accountNumber: string;  //银行账户
    province: string;       //开户所在市
    city: string;           //开户所在区
}

export class test1
{
    type: number;
}