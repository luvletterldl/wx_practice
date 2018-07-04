// pages/todo/addCom/addCom.js
let index = 0
Page({
  /**
   * 页面的初始数据
   */
  data: {
    str:{
      Title:"Todo List",
      finishedTitle:"Finished",
      placeHolder:"接下来要做什么",
      inputValue:''
    },
    items: [],
    animation: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('addCpm loaded', "index: " + index,"当前位置: "+wx.getLocation({
      altitude: true,
      success: function(res) {
        console.log(JSON.stringify(res))
      },
    }))
    console.log('SystemInfo: ',wx.getSystemInfo({
      success: function(res) {
        console.log(JSON.stringify(res))
      },
    }))
    // wx.scanCode({
    //   success: (e) => {
    //     console.log(e)
    //   }
    // })
  },
  inputEvent: function (e){
    this.setData({
      inputValue: e.detail.value
    })
  },
  // checkbox-group 的change事件
  groupChange: function (e) {
    let itemsl = this.data.items
    for(let i = 0; i < itemsl.length; i++){
      if (itemsl[i].value == e.detail.value) {
        itemsl[i].checked = true
        this.setData({
         items : this.data.items
        })
      }
    }
    wx.setStorageSync('items', this.data.items)
    console.log(this.data.items)
  },
  addEvent: function () {
    console.log('input:' + this.data.inputValue, this.data.items)
    var itemsTem = this.data.items
    itemsTem.push({ "index": index++,"value": this.data.inputValue, "checked": false})
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