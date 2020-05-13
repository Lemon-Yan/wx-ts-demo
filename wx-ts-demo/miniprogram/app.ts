// app.ts
App<IAppOption>({
  globalData: {
    aa: "hello world",
    bb: 101
  },
  onLaunch() {
    console.log(this.globalData.aa);
    console.log(this.globalData.bb);
    this.login();
  },
  //登录获取code 
  login: function () {
    wx.login({
      success: function (res) {
        console.log(res.code);
      }
    })
  },
})