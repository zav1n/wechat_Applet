// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:[],
    selectIndex:0,//默认情况下 选中第一个元素
    rightContent:{}// 分类页 右边的内容

  },
  // 处理菜单 点击的函数
  handleMenuChange:function(e){
    console.log(e);
    console.log(e.currentTarget.dataset.index);
    // 当前菜单的下标值
    let index = e.currentTarget.dataset.index;
    // 获取当前 激活的菜单
    // 赋值 右边 内容项
    this.setData({
      rightContent: this.data.category[index],
      selectIndex: e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1. 获取分类菜单的数据源 
    let category = require("../../data/cate-detail.js");
    //let rightContent = category[0]; // selectIndex  默认是0 
    let rightContent = category[this.data.selectIndex];
    // 2. 将数据放到 data 
    this.setData({
     // category: category
      category, rightContent
    })
    console.log(category);
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