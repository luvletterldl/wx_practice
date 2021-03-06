// pages/todo/finished/finished.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    str: {
      Title: "Finished List",
      inputValue: '',
      placeHolder: '已经完成的TODO'
    },
    items: []
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
    var items = wx.getStorageSync('items')
    this.setData({
      items: items
    })
    console.log('finished page onLoad', this.data.items)
  },
  emptyEvent: function () {
    wx.clearStorageSync()
    wx.removeStorageSync('items')
    console.log(this.data.items)
    this.onHide()
    this.onShow()
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