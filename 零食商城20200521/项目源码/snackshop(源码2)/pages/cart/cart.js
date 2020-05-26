// pages/cart/cart.js
import { asyncShowModal } from "../../asyncUtil/asyncUtil.js"
console.log(asyncShowModal);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],
    totalPrice: 0,//商品总价
    allCheck:true //默认 表示 商品全部被选中
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  },
  // 全选事件
  handleAllCheck:function(e){
    // 获取 购物小车的 数据
    let carts = this.data.carts;
    // 遍历数组 将 商品项选为 true
    carts.map(function(v,i){
      if(!v.checked) // !false===true
        v.checked = !v.checked
    })
    this.saveCart(carts);
  },

  // 购物小车 项 勾选事件
  handleItemCheck: function(e) {
    console.log(e.currentTarget.dataset.index);
    // 点击项 所在的位置
    let index = e.currentTarget.dataset.index;
    // 获取 购物小车的 数据
    let carts = this.data.carts;
    // 修改小车 项 中  checked 原先值 取反
    carts[index].checked = !carts[index].checked; // !true !false
    this.saveCart(carts);
  },
  // 购物小车的 逻辑
  saveCart(carts) {
    // 1. 计算总价
    let totalPrice = 0;
    carts.forEach(function (v, i) {
      if (v.checked) {
        totalPrice += v.num * v.data.price;
      }
    })
    // 2. 保存到data中
    this.setData({
      carts,totalPrice
    })
    //3. 保存到 localStorage 里面
    wx.setStorageSync("carts", carts)
  },
  // 添加数量
  add(e){
    // 获取当前点击的项
    let index = e.currentTarget.dataset.index;
    // 获取小车的数据
    let carts = this.data.carts;
    // 该 商品 数量 + 1
    // ++carts[index].num;
    // carts[index].num++;
    carts[index].num = carts[index].num + 1;
    // 保存小车数据
    this.saveCart(carts);
  },
  // 减少商品数量
  sub:async function(e){
    // 获取当前点击的项
    let index = e.currentTarget.dataset.index;
    // 获取小车的数据
    let carts = this.data.carts;
    // 如果 减一 之后 商品数量数量为0 那么就要从小车 删除该商品
    if(carts[index].num-1 == 0){
      // showModal https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html
      // 通过 回调实现 开始
      // let that = this;
      // wx.showModal({
      //   content: '你确认要删除该商品吗？',
      //   success:function(res){
      //     // 确认删除
      //     if(res.confirm){
      //       carts.splice(index,1);
      //       // 保存小车数据
      //       that.saveCart(carts);
      //     }else{
      //       // 否则什么都不做
      //       return;
      //     }
      //   }
      // })
      // 通过回调实现结束 
      // 通过promise实现开始
      let res = await asyncShowModal("您确定要删除该商品吗?");
      if(res.confirm){
        carts.splice(index, 1);
      }
      // 通过promise实现结束
    }else{
      carts[index].num--;
    }
    // 保存小车数据
    this.saveCart(carts);
  },
  // 移除商品项目
  removeItem(e){
    // 获取当前点击的项
    let index = e.currentTarget.dataset.index;
    // 获取小车的数据
    let carts = this.data.carts;
    // 移除该商品项
    carts.splice(index,1);
    this.saveCart(carts);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // 1. 从本地缓存中 加载 购物小车数据
    let carts = wx.getStorageSync("carts") || [];
    // 2. 计算总价
    let totalPrice = 0;
    carts.forEach(function(v,i){
      if(v.checked){
        totalPrice += v.num * v.data.price;
      }
    })

    //3. 设置 到 data 中
    this.setData({
      // carts: carts
      carts, totalPrice
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})