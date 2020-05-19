// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    condition:false,
    btn_condition:true,
    userhead:'',
    username:"",
  },
  getUserInfo(e){
    //获取到头像
    console.log(e.detail.userInfo.nickName);
    console.log(e.detail.userInfo.avatarUrl);
    let username = e.detail.userInfo.nickName;
    let userhead = e.detail.userInfo.avatarUrl;
    let condition,btn_condition;
    if(e.detail.userInfo.avatarUrl){
      condition=true;
      btn_condition=false;
    }
    this.setData({
      condition,
      btn_condition,
      userhead,
      username,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})