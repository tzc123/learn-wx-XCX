//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    latitude: 28.698505,
    longitude: 115.855414,
    markers:[{
      id: 0,
      title: "去这里",
      iconPath: "/images/markers.png",
      latitude: 28.638555,
      longitude: 115.864387,
      width: 45,
      height: 50
    }],
    scale: 18
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindregionchange:function (e) {
    if (e.type == "begin") {
      console.log("begin");
    } else if (e.type == "end") {
      console.log("end");
    }
  },
  movetoPosition:function(){
    this.mapCtx.moveToLocation();
  },
  bindcontroltap:function(e){
    switch(e.controlId){
      case 1:this.movetoPosition();
      break;
      case 2: wx.scanCode({
        success: (res) => {
          console.log(res);
        }
      })
      break;
    }
  },
  onShow: function () {
    this.mapCtx = wx.createMapContext("ofoMap");
    this.movetoPosition();
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    wx.getLocation({
      type: "gcj02",
      success: (res)=> {
        console.log(res);
         this.setData({
           longitude:res.longitude,
           latitude:res.latitude
         })
      },
    })
    wx.getSystemInfo({
      success: (res)=> {
        this.setData({
          controls: [{
            id: 1,
            iconPath: '/images/location.png',
            position: {
              left: 20,
              top: res.windowHeight - 80,
              width: 50,
              height: 50
            },
            clickable: true
          },
          {
            id: 2,
            iconPath: '/images/use.png',
            position: {
              left: res.windowWidth / 2 - 45,
              top: res.windowHeight - 100,
              width: 90,
              height: 90
            },
            clickable: true
          },
          {
            id: 3,
            iconPath: '/images/warn.png',
            position: {
              left: res.windowWidth - 70,
              top: res.windowHeight - 80,
              width: 50,
              height: 50
            },
            clickable: true
          },
          {
            id: 4,
            iconPath: '/images/marker.png',
            position: {
              left: res.windowWidth / 2 - 11,
              top: res.windowHeight / 2 - 45,
              width: 22,
              height: 45
            },
            clickable: true
          },
          {
            id: 5,
            iconPath: '/images/avatar.png',
            position: {
              left: res.windowWidth - 68,
              top: res.windowHeight - 155,
              width: 45,
              height: 45
            },
            clickable: true
          }]
        })
      },
    })
  }
})
