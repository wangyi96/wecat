var baidu = require('./utils/baidu.js')
var douban = require('./utils/douban.js')
//app.js
App({
  data:{
    latitude:"",
    longitude:"",
    currentCity:"上海"
  },
  onLaunch: function (options) {
    this.getLocation();
  },
  //获取经纬度
  getLocation: function () {
    var wecat = new Promise((res,rej)=>{
      wx.getLocation({
        success: res
      })
    })

    wecat.then(res=>{
      const { latitude, longitude } = res
      return baidu.getcityName(latitude, longitude)
    }).then(res=>{
      
      this.data.currentCity = res
    })
  },
  globalData: {
    userInfo: null
  },
  onShareAppMessage: function () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  }
})