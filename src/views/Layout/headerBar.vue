<template>
  <div class="header-wrapper">
    <div class="scan">
      <img src="../../assets/images/user.png" alt="">
      <span class="txt">未登录</span>
    </div>
    <div class="search" @click="skipSearch">
      <img src="../../assets/images/search.png" alt="">
      <span>运动集锦 | 假期结束</span>
    </div>
    <div class="notice">
      <img src="../../assets/images/release.png" alt="">
      <span class="txt">发布</span>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    skipSearch() {
      this.router.push('/search');
    }
  }
}
</script>
<style scoped>

    .header-wrapper{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 54px;
        /* padding-top: 10px; */
        display:flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        z-index: 101;
        background-color: #d43d3d;
        opacity: .99;
        /* line-height: 50px; */
    }
    
    .scan,.notice{
        height: 50px;
        width: 56px;
        text-align: center;
        color:#fff; 
        font-weight: 300;  
    }
    /* img,.txt,.search{
         text-align: center;  
        
          
    } */
    img{
      display: block;
      padding-left: 16px;
      padding-top: 6px;
      height: 24px;
      width: 24px;
      
    }
    /* .ic{
        font-size: 16px;
    } */
    .txt{
      font-size: 4px;
      padding-top: 0;
      /* margin-bottom: -10px; */
      /* padding-bottom: 10px; */
    }
    .search {
        /* flex: 1; */
        height: 36px;
        width: 66%;
        font-size: 13px;
        line-height:36px; 
        margin: auto;
        background-color: #fff;
        border-radius: 8px;
        white-space: nowrap;
        float: left;
        position: relative;
    }
    .search img{
      display: block;
      margin-right: 10px;
    }
    .search span{
      font-size: 16px;
      color: #707070;
      position: absolute;
      left: 44px;
      top: 0;
    }

</style>

