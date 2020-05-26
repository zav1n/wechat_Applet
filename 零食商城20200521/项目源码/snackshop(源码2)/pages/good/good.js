// pages/good/good.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    pageData:{}, //页面详情数据
    activeTab:"detail", // 代表的激活的选项 detail 代表商品详情 parameter 产品参数 service 售后保障
    numToCart:1 //默认情况下 每次往小车 添加一个商品
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options);
    // 获取当前购物小车的数据  
    let num = 0;// 默认购物小车中的商品数量
    let carts = wx.getStorageSync("carts")||[];
    console.log(carts)
    // 查找 购物小车中 对应的商品信息 对应的位置
    let index = carts.findIndex(function(v,i){return v.id===options.id});
    // 找到对应数据 所在的索引
    if(index != -1){
      num = carts[index].num;
    }
      // 加载 全部 详情数据
    let goods = require("../../data/details-data.js");
    // 页面数据 options.id 相当于 guazi hongzao......
    let pageData = goods[options.id];
    // 存到 pageData,以及 num 存到 data 中
    this.setData({
      // pageData:pageData
      num,
      pageData
    })
      console.log(goods);
  },
  // 添加商品到小车中的逻辑
  // 购物小车的数据 是放在 localStorage  "carts" 中 
  // carts:[
  //     {
  //       id:"guazi",
  //       num:1,
  //       checked:true,
  //       data:{....} // 商品原有的数据
  //     },
 // {
  //       id:"baixiangguo",
  //       num:1,
  //       checked:true,
  //       data:{....} // 商品原有的数据
  //     }
  // ]

  handleAddProduct:function(e){
    // 从localStorage 里面获取原有的该商品的 数据
    let carts = wx.getStorageSync("carts")||[];
    // 获取现在商品的id
    let id = e.currentTarget.dataset.id;
    console.log(id);
    // 获取 该id 在 carts 中的位置
    let index = carts.findIndex(function(v,i){return v.id === id});
    if(index===-1){
      // 如果该商品在本地缓存中 还没有存在
      let cartsItem = {
        id:id, // 商品的id
        num: this.data.numToCart, // 默认加到小车中的数量
        checked:true, // 在购物小车中默认是 勾选上
        data:this.data.pageData // 该商品的详细数据
      }
      // 将商品数据 存到本地缓存中
      carts.push(cartsItem);
      this.setData({
        num: cartsItem.num
      })
    }else{
      //  缓存中现有的小车的数量+每次加到小车中的数量 
      carts[index].num = carts[index].num + this.data.numToCart;
      this.setData({
        num: carts[index].num
      })
    }
    // 将数据存回本地缓存
    wx.setStorageSync("carts", carts)
  },
  // 每次添加商品的 数量
  addNum:function(e){
    // 1. 获取每次添加的数量
    let numToCart = this.data.numToCart;
    // 2. 数量加1
    ++numToCart
    // 3. 将值设置 回 data 中
    this.setData({
      numToCart
    })
  },
  // 处理 tab 切换
  // handleTabChange:function(e){
  //   console.log("进入到tab的点击事件中");
  //  // console.log(e.currentTarget.dataset.tab);
  //   // 对应的 激活的 tab 项 赋值到 data 中
  //   this.setData({
  //     activeTab:e.currentTarget.dataset.tab
  //   })
  // },
 // 处理 tab 父元素事件
  handleNavsEvent:function(e){
    console.log(e);
    console.log("进入到nav的点击事件中");
    // 由于冒泡 target 才是被点击的元素 
    this.setData({
      activeTab: e.target.dataset.tab
    })
  },
  handleContentEvent:function(e){
    console.log("进入到content的点击事件中");
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