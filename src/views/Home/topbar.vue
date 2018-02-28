<template>
    <div class="home-topbar-wrapper">
        <div class="top-menu-bar">
             <span v-for="(topbar, index) in topbarList" :class="{'active': topbarIndex === index}" @click="selectTopbar(index)">{{topbar}}</span>
        </div>
        <a class="top-menu-more-btn df-c" href="javascript:void(0)" @click="isTopBarBox=true"><i class="list-shadow"></i><span class="cross"></span></a>

        <TopBarBox :class="{'top-bar-active-active': isTopBarBox}" @close="isTopBarBox=false"></TopBarBox>
        
    </div>
</template>
<script>
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import TopBarBox from '../../components/topbarbox'
export default {
  components: {
    
    TopBarBox
  },
  data() {
    return {
        topbarIndex:2,
      topbarList:['关注','推荐','热点','南昌','视频','新时代','小视频','图片','问答'],
      homeNewsIndex: 2,
      isTopBarBox: false
    }
  },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      selectTopbar(index) {
          console.log(index);
          this.topbarIndex = index;
      }
    }
}
</script>
<style scoped>
.home-topbar-wrapper {
    height: 40px;
    line-height: 40px;
    color: #363636;
    font-size: 16px;
    text-align: center;
    position: relative;
     background: #f4f5f6; 
}
.top-menu-bar{
    height: 100%;
    width: 320px;
    white-space: nowrap;
    overflow: hidden; 
    overflow-x: scroll;
    
}
.top-menu-bar span{
    padding: 0 10px;
}
.top-menu-bar .active {
    color: red;
    font-weight: 400;
}

</style>

