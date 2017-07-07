// pages/topics/topics.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postsList:[],
    navList: [
      {
        id: "all",
        title: "全部"
      },
      {
        id: "good",
        title: "精华"
      },
      {
        id: "share",
        title: "分享"
      },
      {
        id: "ask",
        title: "问答"
      },
      {
        id: "job",
        title: "招聘"
      },
    ],
    activeIndex: 0,
    hidden: false
  },
onTapTag: function(e) {
  this.setData({
    activeIndex: e.currentTarget.dataset.index
  });
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
       url: "https://www.easy-mock.com/project/595f3f0d9adc231f357b0599",
       method: "GET",
       success: function (res) {
        console.log(res);
      }
    });
    // setTimeout (() => {
    //   this.setData({
    //     hidden: true
    //   })
    // }, 3000)
    var api_url = "https://cnodejs.org/api/v1/topics";
    api_url += '?tab=all&page=0&limit=10';
    console.log(api_url);
    var that = this;
    wx.request({
      url: api_url,
      method: "GET",
      success: function (res) {
           console.log();
           that.setData({
             hidden: true,
             postsList: res.data.data

        });
      }
    });

  },
  lower:function () {
    console.log('滑动底部加载');
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
