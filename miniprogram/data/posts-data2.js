var local_database = [
  {

    title: "鸡蛋—提供大量蛋白质",
    imgSrc: "/image/ji.jpg",

    content: "鸡蛋的烹调方式无非就是煎、炒、蒸、煮，由于鸡蛋本身含有较高的脂肪，再经过油脂的烹制，不仅大大降低了鸡蛋的营养价值，还使人们在食用的过程中增加了脂肪的摄入量，因此不建议过多食用煎、炒烹制的鸡蛋。",

    headImgSrc: "/image/ji.jpg",


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
    title: "蔬菜，提供维生素！",
    content: "一般而言蔬菜颜色越深，所含营养成分就越多。若按颜色区分，由深色至浅色排列，绿色菜营养成分高于红色和黄色蔬菜，红色和黄色蔬菜又高于白色蔬菜。例如红色蕃茄含的茄红素比黄色蕃茄高，绿色椰花菜含的维生素A比白花椰菜高，红皮蕃薯比白皮蕃薯的营养高，黑木耳含的多种维生素高于白木耳。",
    imgSrc: "/image/v.jpg",


    headImgSrc: "/image/v.jpg",



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

    title: "水果：抗癌利器",
    content: "研究表明，水果腐烂程度越高，链格孢毒素含量越高，离病斑越远的部分，含量则越低。所以，并不是所有烂水果都不能吃。如果机械损伤和冷害的水果，只要没长时间放置，滋生微生物的话，还是可以吃；而对于霉变腐烂的水果，如果霉变的部分不是很严重，挖去病斑外2cm处，剩余部分还可以食用，如果霉变超过水果三分之一甚至一半以上，就不宜食用了。",

    imgSrc: "/image/f.jpg",
    headImgSrc: "/image/f.jpg",




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
    title: "牛奶，蛋白质集中品",
    content: "根据人类当前的认知，喝牛奶能安眠这个问题并没有证据。而睡前喝牛奶，不仅会增加夜间上厕所的几率，还会增加消化负担，反而可能不利于睡眠。",
    imgSrc: "/image/m.jpg",

    headImgSrc: "/image/m.jpg",


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
    title: "鸡肉，提供丰富营养",
    content: "鸡肉（chicken），指鸡身上的肉，鸡的肉质细嫩，滋味鲜美，适合多种烹调方法，并富有营养，有滋补养身的作用。鸡肉不但适于热炒、炖汤，而且是比较适合冷食凉拌的肉类。但切忌吃过多的鸡翅等鸡肉类食品，以免引起肥胖。",
    imgSrc: "/image/j.jpg",

    headImgSrc: "/image/j.jpg",


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
    title: "米饭，养生之道",
    content: "米饭，是中国人日常饮食中的主角之一，中国南方主食。米饭可与五味调配，几乎可以供给全身所需营养。大米性平、味甘； 有补中益气、健脾养胃、益精强志、和五脏、通血脉、聪耳明目、止烦、止渴、止泻的功效。",
    imgSrc: "/image/rice.jpg",

    headImgSrc: "/image/rice.jpg",



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