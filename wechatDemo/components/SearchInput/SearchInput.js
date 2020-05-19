// components/myHeader/SearInput.js
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
    searchBtnArg(e){
      console.log("点击事件发生了，开始向父组件传值吗？");
      //this.triggerEvent(e,t,n)    this.triggerEvent("事件名"，[值,arg,...],)
      console.log(this.triggerEvent)
      this.triggerEvent("searchBtnEvent","这个是子组件SearchInput的button的参数")
    }
  }
})
