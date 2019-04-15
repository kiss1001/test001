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
 * protobuf 消息类型
 */
export enum MessageType
{
    AcceptAwardRequest = 0x1001,    //领取奖励
    AcceptAwardResponse = 0x1002,   //领取奖励响应
    Award = 0x1003,                 //奖励信息
    AwardAcceptedEvent = 0x1004,
    AwardAvaliableEvent = 0x1005,
    AwardCanceledEvent = 0x1006,
    BankerCanceledEvent = 0x1007,
    BankerEvent = 0x1008,
    BankerRequest = 0x1009,
    BankerResponse = 0x100A,
    BeneficialBankerConfig = 0x100B,
    BetEvent = 0x100C,
    BetRecord = 0x100D,
    BetRequest = 0x100E,
    BetResponse = 0x100F,
    BroadcastEvent = 0x1010,
    BroadcastRequest = 0x1011,
    BroadcastResponse = 0x1012,
    CancelBankerRequest = 0x1013,
    CancelBankerRespose = 0x1014,
    CheckEvent = 0x1015,
    CheckRequest = 0x1016,
    CheckResponse = 0x1017,
    ConfigUpdatedEvent = 0x1018,
    ExitGameRequest = 0x1019,
    ExitGameResponse = 0x101A,
    ForcePlayerExitEvent = 0x101B,
    GameConfig = 0x101C,
    GameLimitsConfig = 0x101D,
    GameModeUpdatedEvent = 0x101E,
    GameRecord = 0x101F,
    GameResult = 0x1020,
    GameState = 0x1021,
    GameStateUpdatedEvent = 0x1022,
    GetAwardStatusRequest = 0x1023,
    GetAwardStatusResponse = 0x1024,
    ListAwardsRequest = 0x1025,
    ListAwardsResponse = 0x1026,
    ListGameRecordsRequest = 0x1027,
    ListGameRecordsResponse = 0x1028,
    LoginResponse = 0x1029,
    Message = 0x102A,
    Player = 0x102B,
    PlayerEnterEvent = 0x102C,
    PlayerExitEvent = 0x102D,
    RedPacket = 0x102E,
    RedPacketEvent = 0x102F,
    RequestMessage = 0x1030,
    ResponseMessage = 0x1031,
    Settlement = 0x1032,
    SettlementEvent = 0x1033,
    SpecialHandsAwardConfig = 0x1034,
    SpecialHandsStatus = 0x1035,
    StraightAwardConfig = 0x1036,
    StraightStatus = 0x1037,
    UserBalanceUpdatedEvent = 0x1038,
}
