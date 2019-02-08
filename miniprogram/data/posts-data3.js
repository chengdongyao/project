var local_database = [
  {

    title: "跑步机和动感单车",
    imgSrc: "/image/p.jpg",

    content: "跑步机是家庭及健身房常备的健身器材，而且是当今家庭健身器材中最简单的一种，是家庭健身器的最佳选择。1965年北欧芬兰唐特力诞生了全球第一台家用的跑步机，设计师根据传速带的原理改变而成。",

    headImgSrc: "/image/p.jpg",


    postId: 0,
    music: {
      shipin: function () {
        wx.redirectTo({
          url: "/pages/literature/literature"
        })

      }
    }

  },
  {
    title: "卧推架",
    content: "平板卧推（Bench Press）是练就强壮胸肌的一种主打动作。卧推是一个复合动作，既涉及到多个关节的动作，参与运动的有肩关节和肘关节。",
    imgSrc: "/image/w.jpg",


    headImgSrc: "/image/w.jpg",



    postId: 1,
    music: {
      shipin: function () {
        wx.redirectTo({
          url: "/pages/literature/literature1"
        })

      }
    }
  },
  {

    title: "哑铃",
    content: "举重和健身练习的一种辅助器材。有固定重量的和可调节重量的两种。①固定重量哑铃。用生铁铸成，中间是铁棒，两端为实心的圆球练习。②可调节哑铃 。类似缩小的杠铃，在短铁棒两端套上重量不等的圆形铁片，长约40～45厘米，举重或健身练习时可以增减重量。",

    imgSrc: "/image/yl.jpg",
    headImgSrc: "/image/yl.jpg",




    postId: 2,
    music: {
      shipin: function () {
        wx.redirectTo({
          url: "/pages/literature/literature2"
        })

      }
    }
  },
  {
    title: "椭圆机",
    content: "椭圆机的运动型态类似越野滑雪(cross-country skiing)的动作，因此椭圆机的英文名称也称为elliptical cross-trainer。椭圆机被设计出来的时间虽短，但是由于受到大众的喜爱，因此发展也相当的迅速。可惜，到目前为止，在运动生理学的专业书籍中，介绍这个新运动工具的运动生理反应资讯还不多。",
    imgSrc: "/image/t.jpg",

    headImgSrc: "/image/t.jpg",


    postId: 3,
    music: {
      shipin: function () {
        wx.redirectTo({
          url: "/pages/literature/literature3"
        })

      }
    }
  },
  {
    title: "卧式磁控健身车",
    content: "磁控健身车是指产生阻力的金属飞轮外围（或内围）有磁铁挨近，通过人力旋钮拉线方式，调节磁铁与金属飞轮的远近调节阻力大小来实现不同运动强度的要求。磁控健身车可以有效的防止高血压，防止发胖、血管硬化，并使骨骼强健。",
    imgSrc: "/image/ws.jpg",

    headImgSrc: "/image/ws.jpg",


    postId: 4,
    music: {
      shipin: function () {
        wx.redirectTo({
          url: "/pages/literature/literature4"
        })

      }
    }
  },
  {
    title: "坐式双向推胸训练器",
    content: "坐姿推胸器是健身房专用力量型健身器材，主要锻炼胸肌肩三角肌肱三头肌，适合初入健身房人群，增强肩关节、肘关节和腕关节的力量，为日后进行大强度的卧推练习打下坚实的基础。",
    imgSrc: "/image/zz.jpg",

    headImgSrc: "/image/zz.jpg",



    postId: 5,
    music: {
      shipin: function () {
        wx.redirectTo({
          url: "/pages/literature/literature5"
        })

      }
    }
  },
]

module.exports = {
  postList: local_database
}