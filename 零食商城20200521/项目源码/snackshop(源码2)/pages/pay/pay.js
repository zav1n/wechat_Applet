// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{},
    carts:[],
    totalPrice:0 //总价
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 支付函数
  pay:function(e){
    wx.showModal({
      content: '支付接口暂时屏蔽',
      success:function(res){
        if(res.confirm){
          // open-type switchTab
          // https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html
            wx.switchTab({
              url: '/pages/my/my',
            })
        }
      }
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
    // 从缓存中获取 address,carts 数据
    let address = wx.getStorageSync("address")||{};
    let carts = wx.getStorageSync("carts")||[];
    let totalPrice = 0;
    // 计算总价
    for(let i=0;i<carts.length;i++){
      totalPrice += carts[i].num * carts[i].data.price;
    }
    // 将地址信息、购物小车信息 存到 data 中
    this.setData({
      address,carts,totalPrice
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