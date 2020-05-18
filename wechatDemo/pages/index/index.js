//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    liudehua:[
    {name:"刘德华"},
    {foreign_name:"Andy Lau,Lau Tak Wah"},
    {other_name:"华仔，华Dee，华哥等"},
    {country:"中国"},
    {citizen:"汉族"},
    {xingzuo:"天秤座"},
    {blood:"AB型"},
    {tall:"174cm"},
    {weight:"63kg"},
    {born:"香港新界大浦镇泰亨村"},
    {birthday:"1961年9月27日"}
    ],
    condition:true,
    a:1,
    b:2,
    length:10
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
