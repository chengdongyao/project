//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  
  },
  
  onLoad: function () {
   
  },
  formSubmit: function (e) {
    e.detail.value.video_id = 'c0500ekuu23';
    var videoId = e.detail.value.video_id;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.navigateTo({
      url: '../video/video?vid=' + videoId,
    })
  }
})
