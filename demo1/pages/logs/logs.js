Page({
  data: {
    imgUrls: [
      'https://i.loli.net/2019/03/12/5c87a3cf56763.jpg',
      'https://i.loli.net/2019/03/12/5c87a3050362c.jpg',
      'https://i.loli.net/2019/03/12/5c87a304257e3.jpg',
      'https://i.loli.net/2019/03/12/5c87a3032bc56.jpg',
      'https://i.loli.net/2019/03/12/5c87a2f3b3051.jpg',
      'https://i.loli.net/2019/03/12/5c87a2fe74dfc.jpg',
      'https://i.loli.net/2019/03/12/5c87a3031ad93.jpg',
      'https://i.loli.net/2019/03/12/5c87a3cf56763.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 2800,
    duration: 1100
  },
  
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
})