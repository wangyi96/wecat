const douban = require('../../utils/douban.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasMore:true,
    start:0,
    movies:[],
    type:"",
    title:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ type: options.type})
    this.getMovies()
  },
  getMovies:function(){
    wx.showLoading({ title: '加载中...' })
    var msg = this.data.movies;
    douban.getcityMovie(this.data.type, 10,this.data.start).then(res => {
      this.setData({ movies: msg.concat(res.subjects),title: res.title })
      wx.hideLoading()
      wx.setNavigationBarTitle({ title: this.data.title })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var num = this.data.start
    num+=10;
    this.setData({start:num})
    this.getMovies()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})