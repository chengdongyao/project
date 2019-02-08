var local_database = [
  {

    title: "头部创伤",
    

    content: "头外伤多由锐器或钝器致伤。裂口大小，深度不一，创缘整齐或不整齐，有时伴有皮肤挫伤或缺损，由于头皮血管丰富，血管破裂后不易自行闭合，即使伤口小出血也较严重，甚至因此发生休克。",

    


    postId: 0,
    music: {
      shipin: function () {
        wx.redirectTo({
          url: "/pages/way/way"
        })

      }
    }

  },
  {
    title: "骨折",
    content: "骨折是指骨结构的连续性完全或部分断裂。多见于儿童及老年人，中青年人也时有发生。病人常为—个部位骨折，少数为多发性骨折。经及时恰当处理，多数病人能恢复原来的功能，少数病人可遗留有不同程度的后遗症。",
    



    postId: 1,
    music: {
      shipin: function () {
        wx.redirectTo({
          url: "/pages/way/way1"
        })

      }
    }
  },
  {

    title: "休克",
    content: "休克（shock）是机体遭受强烈的致病因素侵袭后，由于有效循环血量锐减，组织血流灌注广泛、持续、显著减少，致全身微循环功能不良，生命重要器官严重障碍的综合症候群。",

    



    postId: 2,
    music: {
      shipin: function () {
        wx.redirectTo({
          url: "/pages/way/way2"
        })

      }
    }
  },
  {
    title: "触电",
    content: "触电是电击伤的俗称，通常是指人体直接触及电源或高压电经过空气或其他导电介质传递电流通过人体时引起的组织损伤和功能障碍，重者发生心跳和呼吸骤停。超过1000V（伏）的高压电还可引起灼伤。闪电损伤（雷击）属于高压电损伤范畴。",
    


    postId: 3,
    music: {
      shipin: function () {
        wx.redirectTo({
          url: "/pages/way/way3"
        })

      }
    }
  },
  {
    title: "窒息",
    content: "窒息（asphyxia）：人体的呼吸过程由于某种原因受阻或异常，所产生的全身各器官组织缺氧，二氧化碳潴留而引起的组织细胞代谢障碍、功能紊乱和形态结构损伤的病理状态称为窒息。",
   

    postId: 4,
    music: {
      shipin: function () {
        wx.redirectTo({
          url: "/pages/way/way4"
        })

      }
    }
  },
  {
    title: "肌肉抽筋",
    content: "肌肉痉挛（俗称抽筋），是一种肌肉自发的强直性收缩。发生在小腿和脚趾的肌肉痉挛最常见，发作时疼痛难忍，可持续几秒到数十秒钟之久。尤其是半夜抽筋时往往把人痛醒。",
   


    postId: 5,
    music: {
      shipin: function () {
        wx.redirectTo({
          url: "/pages/way/way5"
        })

      }
    }
  },
]

module.exports = {
  postList: local_database
}