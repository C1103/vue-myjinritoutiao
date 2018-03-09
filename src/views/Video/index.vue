<template>
  <div>
    <Topbar :messList="topbarList" :selected="selectTopbar" @changeTopbar="changebar"></Topbar>
    <article class="video-wrapper">
        <div class="video-container">
            <section class="item" v-for="(item, index) in news">
                <div class="video">
                    <video :src="item.video"></video>

                    <!-- canvas代替video播放 -->
                    <div class="canvas-video bg-cover" :style="{backgroundImage: `url(${item.images})`}">
                        <canvas @click="pause(index, item)"></canvas>
                    </div>

                    <div class="title" v-show="!item.playBol">
                        <h4>{{item.title}}</h4>
                        <small>{{item.video_num}}次播放</small>
                    </div>
                    <div class="play" @click="play(index, item)" v-show="!item.playBol">
                        <img src="../../assets/images/play.png" alt="">
                        <!-- <Icon name="play"></Icon> -->
                    </div>
                    <time v-show="!item.playBol">{{item.time}}</time>
                    <div class="avatar bg-cover-all" v-show="!item.playBol" :style="{backgroundImage: `url(${item.image})`}"></div>
                </div>
                <div class="intro">
                    <div class="source">{{item.source}}</div>
                    <div class="box">
                        <div @click="item.attention = !item.attention">
                            <div v-if="item.attention">已关注</div>
                            <div v-else>
                                <!-- <Icon name="attention"></Icon> -->
                                 <span>关注</span> 
                            </div>
                        </div>
                        <div>
                            <!-- <Icon name="custom-comment"></Icon> -->
                            <span>{{item.comment_num || '评论'}}</span>
                        </div>
                        <div>
                            <!-- <Icon name="More"></Icon> -->
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </article>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Topbar from '../../components/topbar/Topbar'
export default {
  components: {
    Topbar
  },
  data() {
    return {
      topbarList: ['推荐','音乐','搞笑','社会','小品','生活','电影','娱乐','呆萌','游戏','开眼','火山视频','广场舞'],
      selectTopbar: 0,
    //   list: [],
      news:{},
    }
  },
  computed: mapGetters({
      newsList: 'videoList'
    }),
    created () {
      this.$store.dispatch('getVideoList');
    },
//   beforeCreate() {
//       this.$axios.get('https://www.easy-mock.com/mock/5a97f7de41bb370817801652/jinritoutiao/video/list')
//       .then((response) => {
//         console.log(response);
//         this.list = response.data.data;
//         this.$nextTick(() => {
//         this.news = this.list[this.topbarList[this.selectTopbar]];
//         console.log(this.news.length)
//         })
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//     },

  methods: {
    changebar(index) {
        this.selectTopbar = index
        // console.log(index)
    },
    play (index, item) {
                item.playBol = true;
                this.$set(this.news, index, item);
                this.dragVideo(index)
            },
            // 暂停
            pause (index, item) {
                document.querySelectorAll('video')[index].pause();
                item.playBol = false;
                this.$set(this.news, index, item)
            },
            // canvas 绘制
            dragVideo (index) {
                let video = document.querySelectorAll('video')[index],
                    ctx = document.querySelectorAll('canvas')[index].getContext('2d');
                video.play();
                let fps = 1000/30,
                    w = document.querySelectorAll('.video')[index].clientWidth,
                    h = document.querySelectorAll('.video')[index].clientHeight;

                video.addEventListener('play', () => {
                    setInterval( () => {
                        ctx.drawImage(video, 0, 0, 320, 176);
                    }, fps)
                })
            }
  },
    
  watch: {
      newsList(newList, oldList) {
        this.news = newList[this.topbarList[this.selectTopbar]]
      },
      selectTopbar(newVal, oldVal) {
        this.news = this.newsList[this.topbarList[newVal]]
      }
    }
}
</script>
<style scoped>
.topbar-wrapper >>> .top-menu-more-btn{display: none}
.topbar-wrapper >>> .top-menu-bar {width: 100%}

.video-wrapper {
  width: 100%;
  overflow-y: scroll;
}
.video-container {
  width: 100%;
}
.item {
  /* margin-top: -20px; */
}
.video{
  width: 100%;
  height: 220px;
  background-color: #000;
  position: relative;
}
.video video {
  width: 100%;
  display: none;
  height: 100%;
}
.video .canvas-video {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.video .canvas-video canvas {
  width: 100%;
  height: 100%;
}

.play {
  
  position: absolute;
  left: 50%;top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, .3);
  border-radius: 50%;
  z-index: 3;
                /* svg {
                    color: #fff;
                    font-size: 0.4rem;
                } */
}
.play img{
  width: 50px;
  height: 50px;
}
.title {
  position: absolute;
  left: 0;top: 0;
  font-size: 16px;
  width: 100%;
  color: #f4f4f4;
  padding: 10px 16px;
  background: linear-gradient(top , rgba(0, 0, 0, .45), rgba(0, 0, 0, 0) 100%);
  background: -webkit-linear-gradient(top , rgba(0, 0, 0, .45), rgba(0, 0, 0, 0) 100%);
}
.title h4{
   padding: 0; 
  margin: 0;
}
.title small {
  font-size: 12px;
}
time {
  position: absolute;
  right: 14px; 
  bottom: 18px;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, .5);
  color: #f4f4f4;
}
 /* .avatar {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  position: absolute;
  bottom: -0.1rem;
  left: 0.2rem;
}  */
.intro {
  height: 30px;
  line-height: 30px;
  /* float:left; */
  margin-top: 4px;
  padding: 0 10px;
  position: relative;
}
.source {
  position: absolute;
  left: 20px;
  font-style: 12px;
}
.box {
  position: absolute;
  right: 0;
  width: 60px;
  height: 100%;
  line-height: 100%;
}
.box span {
  margin-left: 12px;
  font-style: 10px;
  color: #f4f4f4
}
/* 
 .intro {
            margin-top: 0.1rem;
            padding: 0 0.1rem;
            .source {
                font-size: 0.14rem;
            }
            .box {
                >*{
                    margin-left: 0.14rem;
                    font-size: 0.12rem;
                    color: @font-gray;
                }
            }
        } */
</style>

