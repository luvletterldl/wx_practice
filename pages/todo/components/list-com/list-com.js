// pages/todo/components/list-com/list-com.js
var lcBehavior = require('list-com-behavior')
const appInstance = getApp()
let index = appInstance.globalData.initData.index
Component({
  behaviors: [lcBehavior],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    items: []
  },
  inputEvent: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  checkedItem: function (e) {
    console.log(e, "checkedItem", this.data.items)
  },
  // checkbox-group 的change事件
  groupChange: function (e) {
    console.log(e.detail.value)
  },
  addEvent: function () {
    console.log('input:' + this.data.inputValue, this.data.items)
    var itemsTem = this.data.items
    itemsTem.push({ "index": index++, "value": this.data.inputValue, "checked": false })
    this.setData({
      items: itemsTem,
      inputValue: ''
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
