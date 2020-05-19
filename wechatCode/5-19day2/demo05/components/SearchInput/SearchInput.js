// components/SearchInput/SearchInput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick:function(e){
      console.log("点击事件发生了，开始向父组件传值");
      // 传 123 给父组件
      // this.triggerEvent 触发事件 
      // 第一个是事件名  第二个参数是 要传的参数
      this.triggerEvent("myEvent",[123,456])
    }
  }
})
