<template>
  <article class="home-wrapper">
    <Topbar :messList='topbarList' @changeTopbar="changebar"></Topbar>
    <div class="home-container">
      <ul>
        <li v-for="item in news.list">
          <div class="item-box" v-if="item.images.length === 0">
            <h4>{{item.title}}</h4>
              <!-- <p class="wes-3">{{item.intro}}</p> -->
                <div class="small-box">
                  <span>{{item.source}}</span>
                  <span>评论：{{item.comment}}</span>
                  <span>{{item.time}}</span>
                </div>
          </div>
          <div class="item-box" v-else-if="item.images.length === 1 || item.images.length === 2">
            <div class="item-left">
              <h4>{{item.title}}</h4>
                <!-- <p class="wes-2">{{item.intro}}</p> -->
 
                <div class="small-box">
                  <span>{{item.source}}</span>
                  <span>评论：{{item.comment}}</span>
                </div>
            </div>
            <div class="item-right">
              <img :src="item.images[0]" alt="">
            </div>
          </div>
          <div class="item-box" v-else>
            <div class="item-t">
              <h4>{{item.title}}</h4>
              <!-- <p class="wes-1">{{item.intro}}</p> -->
            </div>
            <div class="item-b df-sb">
              <img :src="img" :alt="img" :style="{width: item.images.length === 3 ? '30%':'25%'}" v-for="img in item.images">
            </div>
            <div class="df-sb">
              <div class="small-box">
                <span>{{item.source}}</span>
                <span>评论：{{item.comment}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </article>
  
</template>
<script>
  import Topbar from './topbar.vue'
  export default {
    components: {
      Topbar,
    },
    data() {
      return {
        topbarList:['关注','推荐','热点','南昌','视频','新时代','小视频','图片','问答'],
        selectTopbar: null,
        news:{
          "list": [
      {
        "id": 10000,
        "source": "央视网新闻",
        "name": "Barbara Lopez",
        "city": "西安市",
        "title": "路红满取必路红满取必路红满取必路红满取必",
        "intro": "但我很欣慰，因为我看到，在经历那么多年的计划生育教育之后，人们并没有被完全洗脑，而是对中国人口面临的危机有着非常清醒的认识。",
        "comment": 154,
        "time": "1996-12-24 18:38:50",
        "images": [
          "http://dummyimage.com/200x200/79a1f2",
          "http://dummyimage.com/200x200/c4f279"
        ]
      },
      {
        "id": 10001,
        "source": "北青网",
        "name": "Cynthia Jackson",
        "city": "天津市",
        "title": "林共近光该林共近光该林共近光该林共近光该林共近光该",
        "intro": "金刚山文化会馆海外网1月29日电据韩联社消息，朝鲜取消了原定在金刚山举行的联合文化演出。此前朝韩双方决定按已达成的协议，推进有关下个月初在金刚山文化会馆举行联合演出的方案。",
        "comment": 114,
        "time": "1983-01-21 19:37:58",
        "images": [
          "http://dummyimage.com/200x200/f279e7",
          "http://dummyimage.com/200x200/79f2d9"
        ]
      },
      {
        "id": 10002,
        "source": "央视网新闻",
        "name": "William Garcia",
        "city": "徐州市",
        "title": "表家片式花众和表家片式花众和表家片式花众和表家片式花众和",
        "intro": "1000位上榜富豪/富豪家族的总财富达到惊人的12.5万亿元人民币，上榜门槛30亿元。上海迪士尼澄清“天价插队费”：尊享导览服务非中国首创近日有媒体报道“上海迪士尼收取天价‘插队费’。",
        "comment": 22,
        "time": "1979-11-06 07:47:59",
        "images": [
          "http://dummyimage.com/200x200/f2b679",
          "http://dummyimage.com/200x200/9279f2",
          "http://dummyimage.com/200x200/82f279"
        ]
      },
      {
        "id": 10003,
        "source": "央视网新闻",
        "name": "Ruth Rodriguez",
        "city": "九龙",
        "title": "党张例些角党张例些角党张例些角党张例些角党张例些角",
        "intro": "金刚山文化会馆海外网1月29日电据韩联社消息，朝鲜取消了原定在金刚山举行的联合文化演出。此前朝韩双方决定按已达成的协议，推进有关下个月初在金刚山文化会馆举行联合演出的方案。",
        "comment": 162,
        "time": "2013-04-01 04:06:59",
        "images": [
          "http://dummyimage.com/200x200/f279a6"
        ]
      },
      {
        "id": 10004,
        "source": "央视网新闻",
        "name": "Dorothy Hernandez",
        "city": "石嘴山市",
        "title": "保适整保适整保适整保适整保适整保适整保适整",
        "intro": "联手打造线上线下融合的“新消费”，个别媒体将此解读为万达在互联网巨头“新零售”的竞争中“选边站队”。",
        "comment": 109,
        "time": "1973-05-21 17:57:10",
        "images": [
          "http://dummyimage.com/200x200/79c9f2",
          "http://dummyimage.com/200x200/ecf279"
        ]
      },
      {
        "id": 10005,
        "source": "海外网",
        "name": "Shirley Anderson",
        "city": "莆田市",
        "title": "党张例些角党张例些角党张例些角党张例些角党张例些角",
        "intro": "联手打造线上线下融合的“新消费”，个别媒体将此解读为万达在互联网巨头“新零售”的竞争中“选边站队”。",
        "comment": 16,
        "time": "1987-09-23 15:47:49",
        "images": [
          "http://dummyimage.com/200x200/d479f2",
          "http://dummyimage.com/200x200/79f2b0"
        ]
      },
      {
        "id": 10006,
        "source": "央视网新闻",
        "name": "Robert Clark",
        "city": "三沙市",
        "title": "林共近光该林共近光该林共近光该林共近光该林共近光该林共近光该",
        "intro": "1000位上榜富豪/富豪家族的总财富达到惊人的12.5万亿元人民币，上榜门槛30亿元。上海迪士尼澄清“天价插队费”：尊享导览服务非中国首创近日有媒体报道“上海迪士尼收取天价‘插队费’。",
        "comment": 115,
        "time": "2004-06-14 03:24:26",
        "images": []
      },
      {
        "id": 10007,
        "source": "北青网",
        "name": "Carol Martinez",
        "city": "延边朝鲜族自治州",
        "title": "日来个场日来个场日来个场日来个场日来个场日来个场",
        "intro": "但我很欣慰，因为我看到，在经历那么多年的计划生育教育之后，人们并没有被完全洗脑，而是对中国人口面临的危机有着非常清醒的认识。",
        "comment": 84,
        "time": "2004-11-22 18:34:30",
        "images": []
      },
      {
        "id": 10008,
        "source": "海外网",
        "name": "Elizabeth Williams",
        "city": "大同市",
        "title": "表家片式花众和表家片式花众和表家片式花众和表家片式花众和表家片式花众和",
        "intro": "金刚山文化会馆海外网1月29日电据韩联社消息，朝鲜取消了原定在金刚山举行的联合文化演出。此前朝韩双方决定按已达成的协议，推进有关下个月初在金刚山文化会馆举行联合演出的方案。",
        "comment": 181,
        "time": "2015-02-09 01:52:39",
        "images": [
          "http://dummyimage.com/200x200/f28d79",
          "http://dummyimage.com/200x200/7988f2",
          "http://dummyimage.com/200x200/abf279"
        ]
      },
      {
        "id": 10009,
        "source": "北青网",
        "name": "Daniel Lewis",
        "city": "西安市",
        "title": "日来个场日来个场日来个场日来个场日来个场日来个场",
        "intro": "1000位上榜富豪/富豪家族的总财富达到惊人的12.5万亿元人民币，上榜门槛30亿元。上海迪士尼澄清“天价插队费”：尊享导览服务非中国首创近日有媒体报道“上海迪士尼收取天价‘插队费’。",
        "comment": 78,
        "time": "1971-06-29 01:53:20",
        "images": []
      }
    ]
  
        }
      }
    },
    methods:{
      changebar(index) {
        this.selectTopbar = index;
        console.log(index)
      }
    },
    created() {
      
    }
    
  }
</script>
<style scoped>
.home-wrapper {
  overflow-y: scroll;
}
/* .home-container{
  position: relative;
} */
.home-container, .home-container ul {
  width: 100%;
  margin: 0;
  padding: 0;
}
.home-container {
  margin-bottom: 50px;
}
.home-container ul li{
  padding: 0 16px;
  list-style: none;

}
.item-box {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #e8e8e8;
  position: relative;
}
.item-box h4{
  margin: 10px auto;
}
.item-box .item-left {
  width: 250px;
}
.item-box .item-right {
  width: 80px;
  height: 70px;
  position: absolute;
  top: 0;
  right: 0;
}
.item-box .item-right img{
  width: 100%;
  height: 100%;
}
.small-box {
  color: #999999;
  font-size: 10px;
  margin-bottom: 10px;
}

</style>
