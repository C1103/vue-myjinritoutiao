<template>
 <div class="footer-wrapper">
   <m-tabbar v-model="select">
     <m-tabbar-item id="home">
       <img src="../../assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal">
       <img src="../../assets/images/ic_tab_home_active.png" alt="" slot="icon-active">
       首页
     </m-tabbar-item>
      <m-tabbar-item id="video">
       <img src="../../assets/images/ic_tab_video_normal.png" alt="" slot="icon-normal">
       <img src="../../assets/images/ic_tab_video_active.png" alt="" slot="icon-active">
       西瓜视频
     </m-tabbar-item>
      <m-tabbar-item id="headline">
       <img src="../../assets/images/ic_tab_headline_normal.png" alt="" slot="icon-normal">
       <img src="../../assets/images/ic_tab_headline_active.png" alt="" slot="icon-active">
       微头条
     </m-tabbar-item>
      <m-tabbar-item id="account">
       <img src="../../assets/images/ic_tab_account_normal.png" alt="" slot="icon-normal">
       <img src="../../assets/images/ic_tab_account_active.png" alt="" slot="icon-active">
       小视频
     </m-tabbar-item>
   </m-tabbar>
</div>  
</template>
<script>
  import mTabbar from '../../components/footerbar/tabbar.vue'
  import mTabbarItem from '../../components/footerbar/tabbar-item.vue'
export default {
  name: 'footertabbar',
  components: {
    mTabbar,
    mTabbarItem
  },
  data() {
    return {
      select: 'home'
    }
  },
  watch:{
    select(curVal,oldVal) {
      console.log(curVal,oldVal);
      this.$router.push('/' + curVal);
    }
  }
}
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
  
</script>
<style scoped>

</style>
 
