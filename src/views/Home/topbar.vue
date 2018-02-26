<template>
    <div class="home-topbar-wrapper">
        <div class="top-menu-bar">
            <swiper>
                <swiper-slide v-for="(topbar, index) in topbarList" :class="{'active': homeNewsIndex === index}" @click.native="active(index)" :key="index">{{topbar}}</swiper-slide>
            </swiper>
        </div>
        <a class="top-menu-more-btn df-c" href="javascript:void(0)" @click="isTopBarBox=true"><i class="list-shadow"></i><span class="cross"></span></a>

        <TopBarBox :class="{'top-bar-active-active': isTopBarBox}" @close="isTopBarBox=false"></TopBarBox>
        
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import TopBarBox from '../../components/topbarbox'
export default {
  components: {
    swiper,
    swiperSlide,
    TopBarBox
  },
  data() {
    return {
      topbarList:['关注','热点','视频','头条','头条','头条','头条','头条'],
      homeNewsIndex: 2,
      isTopBarBox: false
    }
  }
}
</script>
<style scoped>
.home-topbar-wrapper {
    height: .4rem;
    line-height: .4rem;
    color: #363636;
    font-size: .16rem;
    text-align: center;
    position: relative;
    background: #f4f5f6;
}
</style>

