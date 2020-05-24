let goods_count = 1;
Page({

    /**
     * 页面的初始数据
     */

    data: {
        json: '',
        itemdata: '',
        currentData: 0,
        goods_count: 1
    },
    //选项卡开始
    bindchange: function(e) {
        const that = this;
        that.setData({
            currentData: e.detail.current
        })
    },
    checkCurrent: function(e) {
        const that = this;
        if (that.data.currentData === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentData: e.target.dataset.current
            })
        }
    },
    //选项卡结束

    //商品点击+号
    amountAdd() {
        goods_count++
        this.setData({
            goods_count
        })
    },
    //商品点击-号
    amountReduce() {
        goods_count--
        if (goods_count <= 1) goods_count = 1
        this.setData({
            goods_count
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        //这个是在js里面写navigaterTo方法
        const eventChannel = this.getOpenerEventChannel()
        let json = itemdata => this.setData({ itemdata })
        eventChannel.emit("fn", json)

        let itemdata = this.data.itemdata
        let goods = require("../../data/details-data.js");
        let pageData = goods[options.id];
        this.setData({
            pageData,
        })
        console.log(pageData)
        console.log(itemdata) 
        console.log(goods)

    },
    handleAddProduct(e){
        // 从localStorage 里面获取原有的该商品的 数据
        let carts = wx.getStorageSync("carts")||[];
        // 获取现在商品的id
        let id = this.data.itemdata.id;
        console.log(id);
        // 获取 该id 在 carts 中的位置
        let index = carts.findIndex(function(v,i){return v.id === id});
        console.log(index);
        console.log(this.data.numToCart);
        if(index===-1){
          // 如果该商品在本地缓存中 还没有存在
          let cartsItem = {
            id:id, // 商品的id
            num: goods_count, // 默认加到小车中的数量
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
          carts[index].num = carts[index].num + goods_count;
          this.setData({
            num: carts[index].num
          })
        }
        // 将数据存回本地缓存
        wx.setStorageSync("carts", carts)
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
        //当退出添加商品的页面时(selectgoods) 把数量重置为1
        goods_count = 1
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