App({
  onLaunch (options) {
    console.log(options);

    //请求数据
    //中央管理思想
    wx.request({
      url : 'https://resources.ninghao.net/wxapp-case/db.json',
      success:(response)=>{
        Object.assign(this.globalData,response.data);
        // console.log(this.globalData);
      }
      
    })
  },
  onShow (options) {
  },
  onHide () {
  },
  onError (error) {
  },
  globalData: {
    slides: [],
  }
})
