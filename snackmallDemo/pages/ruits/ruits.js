// pages/guowei/guowei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateDetail:[],
    content:[],
  },
  navigateToThegood(e){
    wx.navigateTo({
      url: '/pages/selectgoods/selectgoods',
      events:{
        fn : pageData => pageData (e.currentTarget.dataset.item),
      }
    })
    console.log(e.currentTarget.dataset.item)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let cateDetail = require(`./${options.home}.js`)
    let content = cateDetail[this.data.selectIndex]
    this.setData({
      cateDetail,
      content
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