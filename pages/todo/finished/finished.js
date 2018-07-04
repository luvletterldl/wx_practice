// pages/todo/finished/finished.js
const appInstance = getApp()
let index = appInstance.globalData.initData.index
Page({
  /**
   * 页面的初始数据
   */
  data: {
    str: {
      Title: "Finished List",
      inputValue: ''
    },
    items: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('addCpm loaded', "index: " + index, "当前位置: " + wx.getLocation({
      altitude: true,
      success: function (res) {
        console.log(JSON.stringify(res))
      },
    }))
    console.log('SystemInfo: ', wx.getSystemInfo({
      success: function (res) {
        console.log(JSON.stringify(res))
      },
    }))
    // wx.scanCode({
    //   success: (e) => {
    //     console.log(e)
    //   }
    // })
  },
  inputEvent: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  addEvent: function () {
    console.log('input:' + this.data.inputValue, this.data.items)
    var itemsTem = this.data.items
    itemsTem.push({ "index": index++, "value": this.data.inputValue })
    this.setData({
      items: itemsTem,
      inputValue: ''
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