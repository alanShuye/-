// pages/third/index.js

var app = getApp();

Page({

  onUpload:function(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        app.globalData.uploadData = res;
        wx.redirectTo({
          url: '/pages/second/index',
        })
      },
    })
  }

})