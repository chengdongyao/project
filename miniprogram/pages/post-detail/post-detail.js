var postsData = require('../../data/posts-data.js')
var app = getApp();
Page({
    data: {
        isPlayingMusic: false
    },
    onLoad: function (option) {
      var postId = option.id;
      this.data.currentPostId = postId;
      var postData = postsData.postList[postId];
      this.setData({
        postData: postData
      });
      var postsCollected = wx.getStorageSync('posts_collected')
      var postCollected = postsCollected[postId];
      if (postsCollected) {
        if (postCollected) {
          this.setData({
            collected: postCollected
          })
        }
      }
      else {
        var postsCollected = {};
        postsCollected[postId] = false;
        wx.setStorageSync('posts_collected', postsCollected);
      }
    

        if (app.globalData.g_isPlayingMusic && app.globalData.g_currentMusicPostId
          === postId) {
          this.setData({
            isPlayingMusic: true
          })
        }
        this.setMusicMonitor();
    },

    setMusicMonitor: function () {
      
      var that = this;
      wx.onBackgroundAudioPlay(function (event) {
        var pages = getCurrentPages();
        var currentPage = pages[pages.length - 1];
        if (currentPage.data.currentPostId === that.data.currentPostId) {
          
          if (app.globalData.g_currentMusicPostId == that.data.currentPostId) {
           
            that.setData({
              isPlayingMusic: true
            })
          }
          
        }
        app.globalData.g_isPlayingMusic = true;

      });
      
      wx.onBackgroundAudioStop(function () {
        that.setData({
          isPlayingMusic: false
        })
        app.globalData.g_isPlayingMusic = false;
        
      });
    },

   
    showToast: function (postsCollected, postCollected) {
        
        wx.setStorageSync('posts_collected', postsCollected);
        
        this.setData({
            collected: postCollected
        })
        wx.showToast({
            title: postCollected ? "收藏成功" : "取消成功",
            duration: 1000,
            icon: "success"
        })
    },

   
    onMusicTap: function (event) {
        var currentPostId = this.data.currentPostId;
        var postData = postsData.postList[currentPostId];
        var isPlayingMusic = this.data.isPlayingMusic;
       
            wx.playBackgroundAudio({
              dataUrl: postData.music.shipin(),
                title: postData.music.title,
                coverImgUrl: postData.music.coverImg,
            })
            this.setData({
                isPlayingMusic: true
            })
            app.globalData.g_currentMusicPostId = this.data.currentPostId;
            app.globalData.g_isPlayingMusic = true;
        
    },

    onShareAppMessage: function (event) {
        return {
            title: '离思五首·其四',
            desc: '曾经沧海难为水，除却巫山不是云',
            path: '/pages/post-detail/post-detail?id=0'
        }
    }

})