
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subtitle: '请在此输入搜索内容',
    movies:[],
    hasMore:true,
    start: 0,
    search:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleSearch:function(e){
    
    if(!e.detail.value){
      return
    }

    this.setData({ search: e.detail.value})
    this.loadMore()
    
  },
  loadMore:function(){
    wx.showLoading({ title: '拼命加载中...' })

    wx.request({
      header: { 'Content-Type': 'json' },
      url: 'https://douban.uieee.com/v2/movie/search?start=' + this.data.start + '&count=20&q=' + this.data.search,
      success: (res) => {
        this.setData({ movies: this.data.movies.concat(res.data.subjects) })
        wx.hideLoading()
      }
    })
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
    num += 20;
    this.setData({ start: num })
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  }
})