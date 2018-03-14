<template>
  <article class="home-wrapper">
    <Topbar :messList='topbarList' :selected='selectTopbar' @changeTopbar="changebar"></Topbar>
    <div class="home-container">
      <ul>
        <li v-for="item in news"  @click="skip($router, item.id)">
          <div class="item-box" v-if="item.images.length === 0">
            <h4>{{item.title}}</h4>
                <div class="small-box">
                  <span>{{item.source}}</span>
                  <span>评论：{{item.comment}}</span>
                  <span>{{item.time}}</span>
                </div>
          </div>
          <div class="item-box" v-else-if="item.images.length === 1 || item.images.length === 2">
            <div class="item-left">
              <h4>{{item.title}}</h4>
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
              <h4>{{item.title}}</h4>
            <div class="item-image">
              <img :src="img" :alt="img" :style="{width: item.images.length === 3 ? '31%':'25%'}" v-for="img in item.images">
            </div>
        
              <div class="small-box">
                <span>{{item.source}}</span>
                <span>评论：{{item.comment}}</span>
              </div>
            
          </div>
        </li>
      </ul>
    </div>
  </article>
  
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import Topbar from '../../components/topbar/Topbar'
  export default {
    components: {
      Topbar,
    },
    data() {
      return {
        topbarList:['关注','推荐','热点','南昌','视频','新时代','小视频','图片','问答'],
        selectTopbar: 1,
        news: {}
      }
    },
    methods:{
      changebar(index) {
        this.selectTopbar = index;
      }
    },
    computed: mapGetters({
      newsList: 'homeList'
    }),
    created () {
      this.$store.dispatch('getHomeList');
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
<style lang="less" scoped>
.home-wrapper {
  overflow-y: scroll;
  .home-container{
    width: 100%;
    margin: 0;
    padding: 0;
    margin-bottom: 50px;
    ul {
      width: 100%;
      margin: 0;
      padding: 0;
      li {
        padding: 0 16px;
        list-style: none;
        .item-box {
          width: 100%;
          height: 100%;
          border-bottom: 1px solid #e8e8e8;
          position: relative;
          h4 {
          margin: 10px auto;
          }
          .small-box {
                color: #999999;
                font-size: 10px;
                margin-bottom: 10px;
          }
          .item-left {
            width: 250px;
          }
          .item-right {
            width: 80px;
            height: 70px;
            position: absolute;
            top: 0;
            right: 0;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .item-image {
            width: 100%;
            height: 70px;
            margin-bottom: 10px;
            img {
            height: 70px;
            width: 90px;
            }
            :nth-child(2){
             margin: 0 10px;
            } 
          } 
        }
      }
    }
  }
} 
</style>
