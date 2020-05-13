/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    aa:string,
    bb:number,
    userInfo?: WechatMiniprogram.UserInfo,
  }
  login():void,
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}