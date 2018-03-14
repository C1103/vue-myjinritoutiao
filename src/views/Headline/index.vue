<template>
  <div class="headline-wrapper">
    <Header></Header>
    <div class="header-container">
            <div class="header-box">
                <section class="item border-half-top" v-for="item in headlineList" @click="skip($router, item.id)">
                    <div class="item-t df-sb">
                        <div class="item-t-l">
                            <div class="avatar bg-cover-all" :style="{backgroundImage: `url(${item.avatar})`}"></div>
                            <div class="info">
                                <div class="name">{{item.name}}</div>
                                <div class="info-box">
                                    <time>{{item.time}}小时以前</time> ·
                                    <span>{{item.tag}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="item-t-r" @click.stop="item.attention = !item.attention">
                            <span v-if="item.attention" class="like-y">已关注</span>
                            <span v-else class="like-n">关注</span>
                        </div>
                    </div>
                    <div class="item-m">
                        <p>{{item.intro}}</p>
                        <div class="images">
                            <img :src="img" :class="item.images.length > 2 ? 'three':item.images.length === 2 ? 'two':'one'" v-for="img in item.images">
                        </div>
                        <span>{{item.read_num}}阅读</span>
                    </div>
                    <div class="item-b df-c">
                        <div class="item-b-icon df-c" @click.stop="$alert('暂不支持！')">
                             <img src="../../assets/images/headline_transmit.png"/> 
                            <span>{{item.opinion_num}}</span>
                        </div>
                        <div class="item-b-icon df-c" @click.stop="$alert('暂不支持！')">
                            <img src="../../assets/images/headline_comment.png"/> 
                            <span>{{item.comment_num}}</span>
                        </div>
                        <div class="item-b-icon df-c" :class="{'item-b-icon-active': item.islike}" @click.stop="likeNum(item)">
                            <img v-show="!item.islike" src="../../assets/images/headline_good.png"/> 
                            <img v-show="item.islike" src="../../assets/images/headline_good_active.png"/> 
                            <span>{{item.like_num}}</span>
                        </div>
                    </div>
                </section>
            </div>
            
        </div>
    <footerBar></footerBar>
  </div>    
</template>
<script>
import { mapGetters } from 'vuex'
import { footerBar } from '../Layout/index'
import Header from './component/Header'
export default {
  components: {
    footerBar,
    Header
  },
  created() {
    this.$store.dispatch('getHeadlineList');
  },
   computed: mapGetters({
      headlineList: 'headlineList'
    }),
  methods: {
      likeNum (item) {
        item.islike = !item.islike
        if (item.islike) {
            item.like_num ++
        }else{
            item.like_num --
        } 
    }
  }
}
</script>
<style lang="less" scoped>
.headline-wrapper {
    background-color: #eaeaea;
}
.header-container {
    overflow-y: scroll;
    position: relative;
    width: 100%;
    margin:50px 0;
}
.item {
    margin-bottom: 10px;
    background-color: #fff;
    padding-top: 10px;
}
.item-t, .item-m {
    padding: 0 9px;
} 
.item-t {
    position: relative;
    .item-t-l{
        >* {
            display: inline-block;
            vertical-align: middle;
        } 
        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 2px;
        }
       .name {
        color: #111;
        font-size: 18px
        }  
        .info-box {
            color: #b9b9b9;
            font-size: 2px;
        }
    }
    .item-t-r {
        position: absolute;
        right: 24px;
        top: 16px;
        font-size: 16px;
        .like-y {
            color: gray;
        }
        .like-n {
            color: red;
        }
    }
}
.item-m {
    padding-bottom: 6px;
    p {
        line-height: 24px;
        margin: 14px 0 10px 0;
    }
    .images {
        display: flex;
        align-items: flex-start;
        flex-wrap:wrap;
        img {
            margin-top: 6px;
        }
        .one {
            width: 50%;
        }
        .two {
            width: 40%;
            margin-right: 10%;
        }
        .three {
            width: 30%;
            margin-right: 3%;
        }
    }
    span {
        font-size: 8px;
        color: #b9b9b9;
    }
}
.item-b {
    border-top: 1px solid #cecece;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 40px;
    .item-b-icon {
        flex: 1;
        line-height: 100%;
        text-align: center;
        font-size: 14px;
        color: gray;
        img {
            width: 16px;
            height: 16px;
        }
        span {
            margin-left: 2px;
        }
    }
    .item-b-icon-active {
        color: #f85959;
    }
}
</style>