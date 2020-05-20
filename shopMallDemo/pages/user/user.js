// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    condition:false,
    btn_condition:true,
    userInfo:{},
    userhead:"",
    username:"",
  },
  getUserInfo(e){
    //把获取到的信息放到缓存  wx.setStorageSync('key', data)
    //记得去生命周期的onshow时获取一下有没有用户信息
    let userInfo = e.detail.userInfo;
    wx.setStorageSync('userInfo', userInfo)

    //1.获取用户信息
    //获取到名字
    let username = userInfo.nickName;
    //获取到头像
    let userhead = e.detail.userInfo.userInfo;
    let condition,btn_condition;

    //2.判断
    if(userInfo){
      console.log("进来判断了")
      condition=true;
      btn_condition=false;
    }

    //4.把获取到的值设置一下
    this.setData({
      condition,
      btn_condition,
      userhead,
      username,
      userInfo,
    })
  },
  //联系客服
  contactService(){
    wx.showModal({
      title: '联系客服',
      content: '请拨打电话：400-618-4000',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log(res)
        } else {//这里是点击了取消以后
          console.log('取消')
        }
      }
    })
  },
  //退出登录
  btnFbExit(){
    let userInfo = wx.getStorageSync('userInfo')
    let _this = this;
    let fn = () => {
      this.setData({
        condition:false,
        btn_condition:true
      })
    }
    if(!userInfo){
      wx.showToast({
        title: '未登录',
        icon: 'none',
        duration: 2000
      })
    }else{
        wx.showModal({
          content: '确定退出吗？',
          success: function (res) {
            if (res.confirm) {
              //这里是点击了确定以后
              wx.removeStorage({
                key: 'userInfo',
              })
              //点击退出成功
              wx.showToast({
                title: '退出成功',
                icon: 'success',
                duration: 2000
              })
              // fn()
              _this.setData({
                condition:false,
                btn_condition:true
              })
            } else {
              //这里是点击了取消以后
            }
          }
        })
      }
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
    let userInfo = wx.getStorageSync("userInfo");
    let condition,btn_condition;
    this.setData({
      userInfo
    })
    if(userInfo){
      console.log("进来判断了")
      condition=true;
      btn_condition=false;
    }
    this.setData({
      condition,
      btn_condition,
    })
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