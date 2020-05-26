// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  pay(){
    wx.showModal({
      content: '支付接口暂时屏蔽',
      success:function(res){
        if(res.confirm){
            wx.switchTab({
              url: '/pages/my/my',
            })
        }
      }
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
    let address = wx.getStorageSync('address')||{}
    let carts = wx.getStorageSync('carts')||{}
    let totalPrice = 0
    for(let i=0;i<carts.length;i++){
      totalPrice +=carts[i].num * carts[i].data.price
    }
    this.setData({
      address,
      carts,
      totalPrice:totalPrice.toFixed(2),
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