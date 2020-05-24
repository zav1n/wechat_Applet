// pages/theme/theme.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 主题的数据
    pageData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   * options 可以接受页面 传过来的参数
   */
  onLoad: function (options) {
    console.log(options);
    // 负责加载主题的数据 options.id 等于我们加载
    // 数据的文件的名称
    let pageData = require("../../data/"+options.id+".js");
    // 将数据 设置在 data 中
    this.setData({
      pageData
    })
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