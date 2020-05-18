//index.js
//获取应用实例
const app = getApp()

Page({
  // 小程序放置数据的地方
  //   <view>
  //  <text>外文名：</text><text>{{ waiwenming }}</text>
  // </view>
  // <view>
  //  <text>别名：</text><text>{{ nickName }}</text>
  // </view>
  // <view>
  //  <text>国籍：</text><text>{{ nationion }}</text>
  // </view>
  // <view>
  //  <text>名族：</text><text>{{ mingzu }}</text>
  // </view>
  // <view>
  //  <text>星座：</text><text>{{ xingzuo }}</text>
  // </view>
 
  data: {
    name:"刘德华",
    waiwenming:"Andy lau",
    nickName:"华仔",
    nationion:"中国",
    mingzu:"汉族",
    xingzuo:"水瓶座",
    id:"01",
    condtion:true,
    isBoy:true,
    isGirl:false,
    a:1,
    b:2,
    c:3,
    length:5
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
