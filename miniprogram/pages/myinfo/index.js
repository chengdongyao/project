Page({

  data: {
    avatar: '',
    name: '',
    sex: ['保密', '男', '女'],
    
  },

  onLoad: function () {
    this.setData({
      avatar: wx.getStorageSync('avatar') || '',
      name: wx.getStorageSync('name') || ''
    });
  },
  selectsex: function (e) {
    this.setData({
      'userInfo.gender': e.detail.value
    })
  },

  //未点完成失去焦点复原（change优先于blur触发）
  blurName: function (e) {
    this.setData({ name: wx.getStorageSync('name') });
  },

  changeName: function (e) {
    var name = e.detail.value.trim();

    if (name) {
      wx.setStorageSync('name', name);
    }

  },

  changeAvatar: function (e) {

    var that = this;

    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        wx.saveFile({
          tempFilePath: tempFilePaths[0],
          success: function (res) {
            var savedFilePath = res.savedFilePath;
            wx.setStorageSync('avatar', savedFilePath);
            that.setData({ avatar: savedFilePath });
          }
        });
      }
    })
  }
})