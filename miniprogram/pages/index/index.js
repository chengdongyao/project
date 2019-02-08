var weight
var height
Page({
  data:{
      result:'',
  },
  cal:function(){
    var result = (weight)/((height)*(height))
    console.log("weight/height*height ="+result)
    this.setData({
      result:result
    })
  },
getweight:function(e){
 weight=e.detail.value
 
},
getheight:function(e)
{
  height=e.detail.value
  

}
})