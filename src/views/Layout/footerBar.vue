<template>
  <div class="wrapper">
        <router-link :to="'/home'" class="bar-item">
            <!-- <i class="iconfont">&#xe699;</i> -->
            <div class="bar-ic iconfont ">&#xe699;</div> 
            <div class="bar-txt">首页</div>
        </router-link>
        <router-link :to="'/video'" class="bar-item">
            <!-- <i class="iconfont">&#xe699;</i> -->
            <div class="bar-ic iconfont">&#xe629;</div> 
            <div class="bar-txt">专题</div>
        </router-link>
        <router-link :to="'/headline'" class="bar-item">
            <!-- <i class="iconfont">&#xe699;</i> -->
            <div class="bar-ic iconfont">&#xe609;</div> 
            <div class="bar-txt">分类</div>
        </router-link>
        <router-link :to="'/account'" class="bar-item">
            <!-- <i class="iconfont">&#xe699;</i> -->
            <div class="bar-ic iconfont">&#xe600;</div> 
            <div class="bar-txt">购物车</div>
        </router-link>
  </div>
</template>
<script>
export default {
// data() {
//     return {
//       footerBarList: [
//         {title: '首页', icon: 'home', path: '/home'},
//         {title: '西瓜视频', icon: 'video', path: '/video'},
//         {title: '微头条', icon: 'comment', path: '/headline'},
//         {title: '小视频', icon: 'small', path: '/account'}
//       ]
//     }
//   },
  methods: {
    tabTo (key) {
      console.log(key);
    }
  }
}
</script>
<style scoped>
@font-face {
  font-family: 'iconfont';  /* project id 571188 */
  src: url('//at.alicdn.com/t/font_571188_kem12gle7882rzfr.eot');
  src: url('//at.alicdn.com/t/font_571188_kem12gle7882rzfr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_571188_kem12gle7882rzfr.woff') format('woff'),
  url('//at.alicdn.com/t/font_571188_kem12gle7882rzfr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_571188_kem12gle7882rzfr.svg#iconfont') format('svg');
}
.iconfont{
     font-family:"iconfont" !important;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    font-size: 2rem;
    }
  /* .iconfont {
    font-family: iconfont;
  } */
   .wrapper {
    width: 100%;
    height:5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
  }

  .bar-item {
    flex: 1;
    text-decoration:none;
  }
  .bar-txt, .bar-ic {
    font-size: 1rem;
    color: #666;
    text-align: center;
  }
  .bar-active {
    color: #b4282d;
  }
   .bar-ic {
    padding-top: 0.5rem;
    font-size: 2rem;
  }
  .bar-txt {
    font-size: 1rem;
    padding-top: 0.5rem;
  }  
  /* .wrapper {
        position: absolute;
        left: 0;bottom: 0;
        width: 100%;
        height: 10%;
        font-size: 0.16rem;
        z-index: 99;
        background-color: #fff;
  }

        .bar-item {
            width: 25%;
            float: left;
            text-align: center;
            color: black;
        }
            .bar-ic {
                width: 0.22rem;
                height: 0.22rem;
            }
            .bar-txt {
                width: 100%;
                font-size: 0.12rem;
                margin-top: 0.06rem;
            }
 
        .active {
            color: red;
        }
     */
</style>
 
