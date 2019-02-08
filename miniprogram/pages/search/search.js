
//获取应用实例  
const app = getApp()
Page({
  /** 
   * 页面的初始数据 
   */
  data: {
    result: '',
    state: ''
  },
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value.id; 
    wx.request({
      url: 'http://21t041718c.imwork.net:44731/' + formData,
      data: formData,
      header: { 'Content-Type': 'text/html;charset=utf-8' },
      success: function (res) {
        console.log(res.data)
        that.setData({
          re: res.data,
        })
        wx.setStorage({
          key: 'info',
          data: res.data,
        })

        wx.showToast({
          title: '已提交',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  
  navbtn: function () {
    wx.navigateTo({
      url: '../content/content'
    })
  }, 
  
})  