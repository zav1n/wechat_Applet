Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView:'guowei',
    curIndex:0,
    cateDetail:[],
    content:[],
    selectIndex:0
  },
  getnameId(e){
    let toView = e.currentTarget.dataset.id
    let curIndex = e.currentTarget.dataset.index
    this.setData({
      toView,
      curIndex,
      selectIndex: e.currentTarget.dataset.index,
      content:this.data.cateDetail[curIndex]
    })
    console.log(curIndex)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let cateDetail = require("./cate-detail.js")
    let content = cateDetail[this.data.selectIndex]
    // console.log("cateDetail",cateDetail)
    // console.log("content",content)
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