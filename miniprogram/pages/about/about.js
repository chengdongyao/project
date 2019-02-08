Page({

  /**
   * 页面的初始数据
   */
  data: {
   imagelist:[
       "https://xcx.codems.cn/Uploads/2018-06-17/5b25400d8ae06.png" ]
  },
  previewImage: function (e) {
           var current = e.target.dataset.src;
            wx.previewImage({
                  current: current, // 当前显示图片的http链接  
                  urls: this.data.imagelist // 需要预览的图片http链接列表  
        })
    
  }    
}) 


  
 
