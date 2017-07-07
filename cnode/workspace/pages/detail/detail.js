// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    hidden: false,
    modalHidden: true,
    title: "话题详情",
    collectText: "收藏",
    // is_collect: false,
  },
  collect: function(){
    var accesstoken = wx.getStorageSync('CuserInfo').accesstoken;
    if(!accesstoken){
      this.setData({
        modalHidden: false
      });
    }
    this.setData({
      modalHidden: false
    });
  },
  cancelChange: function(){
    this.setData({
      modalHidden : true
    });
  },
  confirmChange: function(){
    this.setData({
      modalHidden: true,
    });
      wx.navigateTo({
        url: '/pages/login/login'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    console.log(id);
    this.fetchData(id);
    // var WxParse = require('../../wxParse/wxParse.js');
    // /*** 传值* 1. 类型type->'md/html'* 2. 介些内容data* 3. 指向对象-> page*/
    // var that = this;
    // WxParse.wxParse('html',html,that);
  },
  //获取详情页数据
  fetchData: function (id) {
    var url = "https://cnodejs.org/api/v1/topic";
    var that = this;
    url += '/' + id +'?mdrendenr=false';
    wx.request({
      url: url,
      method: "GET",
      success: function (res) {
        setTimeout(function(){
          that.setData({
            detail: res.data.data,
            hidden: true
          });
          console.log(that.data.detail.content);
          var WxParse = require('../../wxParse/wxParse.js');
          /*** 传值* 1. 类型type->'md/html'* 2. 介些内容data* 3. 指向对象-> page*/
          WxParse.wxParse('article','html',res.data.data.content,that);
        },1000);
      }
    });
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
});
