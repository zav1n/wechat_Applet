// pages/demo051902/demo051902.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    texts:['第一条信息,','第2条信息,','第3条信息,','第4条信息,','第5条信息',"..."],
    text:"",
    index:0,
  },
  addMsg:function(e){
    //1.定义 获取data中已有的文本值
    // console.log(this)
    // console.log(this.data)
    let text = this.data.text;
    //2. 追加内容到文本中  判断内容食肉已经加完
    if(this.data.index<this.data.texts.length)
    text += this.data.texts[this.data.index++]
    // 3. 将text 设置到 this.data.texts
    this.setData({
      //可以简写成一个 text
      text:text
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