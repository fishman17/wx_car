import testDrive from '../../modules/test-drive';
console.log(testDrive);
const app = getApp();
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slides: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  testDrive,

  readMore : (event)=>{
    console.log(event);
    let id  = event.target.dataset.id;
    wx.navigateTo({
      // queryString 查询字符串 ?
      url: `/pages/vehicles/show?id=${id}&qq=${12345}`,
    });
  },
  onLoad: function (options) {
    // 全局的数据 globalData 

    this.setData({
      slides: app.globalData.slides,

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