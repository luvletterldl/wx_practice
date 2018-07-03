//index.js
//获取应用实例
const app = getApp()
console.log(app.globalData)
Page({
  data: {
    motto: 'Hello ldl',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  longtap: function () {
    console.warn('触发长按事件')
  },
  viewTap: (e) => {
    wx.navigateTo({
      url: '../rpage/newPage.wxml',
    })
    console.log(getCurrentPages(),e)
  },
  redirect: () => {
    console.log('123')
    wx.switchTab({
      url: '../logs/logs',
    })
  },
  onHide: function () {
    console.log('Hide')
  },
  onShow: function () {
    console.log('Show')
  },
  onReachBottom: function () {
    console.log('ReachBottom')
  },
  onPullDownRefresh: function () {
    console.log('pullDown')
  },
  onShareAppMessage: function () {
    console.log('Share')
    return {
      title: 'diy share title',
      path: '../logs/logs'
    }
  },
  onReady: function () {
    console.log('onReady',this.route)
  },
  onPageScroll: function () {
    console.log('pageScroll')
  },
  onLoad: function () {
    console.log('onLoad')
    console.log(getApp(),getCurrentPages(),"123")
    console.log(app,"456")
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
