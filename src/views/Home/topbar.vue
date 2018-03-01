<template>
    <div class="home-topbar-wrapper">
        <div class="top-menu-bar">
             <span v-for="(topbar, index) in messList" :class="{'active': topIndex === index}" @click="selectTopbar(index)">{{topbar}}</span>
        </div>
        <div class="top-menu-more-btn" href="javascript:void(0)" @click="isTopBarBox=true"><img src="../../assets/images/menu.png" alt=""><span class="cross"></span></div>

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
      topIndex: 1,
      isTopBarBox: false
    }
  },
  props:[
    'messList',
    // 'topbarIndex'
  ],
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    selectTopbar(index) {
      console.log(index);
      this.topIndex = index;
      this.$emit("changeTopbar", index)
    }
  },
  // afterCreated(){
  //   this.topIndex = topbarIndex;
  // }
  created() {
    console.log(this.topIndex);
    this.$emit("changeTopbar", this.topIndex)
  }
}
</script>
<style scoped>
.home-topbar-wrapper {
    height: 40px;
    line-height: 40px;
    color: #222222;
    font-size: 16px;
    text-align: center;
    position: relative;
     background: #ffffff; 
     border-bottom: 1px solid #e8e8e8;
}
.top-menu-bar{
    height: 100%;
    width: 340px;
    white-space: nowrap;
    overflow: hidden; 
    overflow-x: scroll;
    
}
.top-menu-bar span{
    padding: 0 10px;
}
.top-menu-bar .active {
    color: #f85959;
    font-weight: 700;
}
.top-menu-more-btn {
    position: absolute;
    right: 8px;
    top: 6px;
    height: 30px;
    width: 30px;
}
.top-menu-more-btn img{
    height: 100%;
    width: 100%;
}

</style>

