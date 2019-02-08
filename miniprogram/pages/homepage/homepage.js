var postsData = require('../../data/posts-data.js')
Page({
  data: {
    
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },


  navBtn: function () {
    wx.navigateTo({
      url: '../community/community'
    })
  },
  navBtn1: function () {
    wx.navigateTo({
      url: '../healthyliving/healthyliving'
    })
  },
  navBtn2: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  navBtn3: function () {
    wx.navigateTo({
      url: '../local/local'
    })
  },
  navBtn4: function () {
    wx.navigateTo({
      url: '../food/food'
    })
  },
  navBtn5: function () {
    wx.navigateTo({
      url: '../air/air'
    })
  },
  navBtn6: function () {
    wx.navigateTo({
      url: '../qijie/qijie'
    })
  },
  navBtn7: function () {
    wx.navigateTo({
      url: '../aid/aid'
    })
  },
  navBtn8: function () {
    wx.navigateTo({
      url: '../form/form'
    })
  },
  

  onLoad: function () {
    this.setData({
      postList: postsData.postList
    });
  },
  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    // console.log("on post id is" + postId);
    wx.navigateTo({
      url: "/pages/post-detail/post-detail?id=" + postId
    })
  },

  onSwiperTap: function (event) {
    // target 和currentTarget
    // target指的是当前点击的组件 和currentTarget 指的是事件捕获的组件
    // target这里指的是image，而currentTarget指的是swiper
    var postId = event.target.dataset.postid;
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    })
  },

  

  
  search: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  }
})
