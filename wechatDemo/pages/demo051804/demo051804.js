// pages/demo051804/demo051804.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_url:"/images/b1.jpg",
    msg:"传参，点击会替换这段文字"
  },
  handleClick:function(e){
    this.setData({
      image_url:
      this.data.image_url == "/images/b3.jpg" ? "/images/b1.jpg" : "/images/b3.jpg"
    })
  },
  arg:function(e){
    // console.log(e)
    // console.log("id:"+e.currentTarget.dataset.id)
    // console.log("num:"+e.currentTarget.dataset.num)
    // console.log("number:"+e.currentTarget.dataset.number)
    this.setData({
      msg:
      //三目转换
      // this.data.msg == "传参，点击会替换这段文字" ? "改变了，点击就改回来":"传参，点击会替换这段文字"
      //也可以获取html中设置的data-*的值来改变msg的值       
      e.currentTarget.dataset.id

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