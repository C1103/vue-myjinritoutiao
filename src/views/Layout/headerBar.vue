<template>
  <div class="wrapper">
    <div class="scan">
      <img src="../../assets/images/user.png" alt="">
      <span class="txt">未登录</span>
    </div>
    <input class="search"></input>
    <div class="notice">
      <img src="../../assets/images/release.png" alt="">
      <span class="txt">发布</span>
    </div>
  </div>
</template>
<style scoped>

    .wrapper{
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
        background-color: red;
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
        flex: 1;
        height: 30px;
        width: 66%;
        font-size: 13px;

        margin: 8px auto;
        background-color: #fff;
        border-radius: 8px;
    }

</style>
<script>
export default {

}
</script>
