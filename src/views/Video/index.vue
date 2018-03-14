<template>
  <div>
    <Topbar :messList="topbarList" :selected="selectTopbar" @changeTopbar="changebar"></Topbar>
    <article class="video-wrapper">
        <div class="video-container">
            <section class="item" v-for="(item, index) in news" :key="index">
                <div class="video">
                    <video :src="item.video"></video>
                    <div class="canvas-video bg-cover" :style="{backgroundImage: `url(${item.images})`}">
                        <canvas @click="pause(index, item)"></canvas>
                    </div>

                    <div class="title" v-show="!item.playBol">
                        <h4>{{item.title}}</h4>
                        <small>{{item.video_num}}次播放</small>
                    </div>
                    <div class="play" @click="play(index, item)" v-show="!item.playBol">
                        <img src="../../assets/images/play.png" alt="">
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
                                <img src="../../assets/images/focus.png" alt="">
                                 <span>关注</span> 
                            </div>
                        </div>
                        <div>
                            <img src="../../assets/images/comment.png" alt="">
                            <span>{{item.comment_num || '评论'}}</span>
                        </div>
                        <div>
                            <img src="../../assets/images/more.png" alt="">
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
      news:{},
    }
  },
  computed: mapGetters({
      newsList: 'videoList'
    }),
    created () {
      this.$store.dispatch('getVideoList');
    },
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
          console.log(newList)
        this.news = newList[this.topbarList[this.selectTopbar]]
        console.log(this.news)
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
</style>
<style lang="less" scoped>

.video-wrapper {
  width: 100%;
  overflow-y: scroll;
  .video-container {
    width: 100%;
    .video{
      width: 100%;
      height: 220px;
      background-color: #000;
      position: relative;
      video {
        width: 100%;
        display: none;
        height: 100%;
      }
      .canvas-video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        canvas {
          width: 100%;
          height: 100%;
        }
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
        h4{
          padding: 0; 
          margin: 0;
        }
        small {
          font-size: 12px;
        }
      }
      .play {
        position: absolute;
        left: 50%;top: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, .3);
        border-radius: 50%;
        z-index: 3;
        img{
          width: 50px;
          height: 50px;
        }
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
    }
    .intro {
      margin: 8px; 
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: space-between; 
      color: #222222;
      .source {
        font-style: 12px;
      }
      .box {
        display: flex;
        align-items: center;
        justify-content: center;
        div {
          margin-right: 12px;
        }
        img {
        width: 15px;
        height: 15px;
        } 
      }
    }
  }
}

/* .video-wrapper {
  width: 100%;
  overflow-y: scroll;
}
.video-container {
  width: 100%;
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
.intro {
  margin: 8px; 
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  color: #222222;
}
.source {
  font-style: 12px;
}
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box div {
  margin-right: 12px;
}
.box img {
  width: 15px;
  height: 15px;
} */
</style>


