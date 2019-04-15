// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;


//没有参数和返回值的回调函数
export interface Fun0 { (): void; }

//有1个参数没有返回值的回调函数
export interface Fun1 { (param: any): void; }

//有2个参数没有返回值的回调函数
export interface Fun2 { (param1: any, param2: any): void; }

//有2个参数，第1个是number类型，第2个是Prefab类型。没有返回值
export interface Fun_n_node { (i: number, prefab: cc.Node): void; }

//有1个node参数，没有返回值的回调
export interface Fun_node { (param: cc.Node): void; }

//有1个number参数，number返回值的函数
export interface Fun_n_ret_n { (i: number): number; }

//有1个number参数，cc.Node返回值的函数
export interface Fun_n_ret_node { (i: number): cc.Node; }

//格子
export class TypeCell
{
    type:   number;         //格子类型
    index:  number;         //第几个格子，从0开始
    item:   cc.Node;        //格子
}

//有1个number参数，TypeCell返回值的函数
export interface Fun_n_ret_cell { (i: number): TypeCell; }