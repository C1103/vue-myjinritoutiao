<template>
  <div class="header-wrapper">
    <div class="scan">
      <img src="../../../assets/images/headline_find.png" alt="">
      <span class="txt">找人</span>
    </div>
    <div class="head">微头条</div>
    <div class="scan">
      <img src="../../../assets/images/headline_release.png" alt="">
      <span class="txt">发布</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'headlineHeader'
}
</script>
<style lang="less" scoped>
.header-wrapper{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 54px;
  display:flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  z-index: 101;
  background-color: #ffffff;
  opacity: .99;
  .scan{
    height: 50px;
    width: 56px;
    text-align: center;
    color:#222222; 
    font-weight: 300;  
    img {
      display: block;
      padding-left: 16px;
      padding-top: 6px;
      height: 24px;
      width: 24px;   
    }
    .txt{
      font-size: 4px;
      padding-top: 0;
    }
  }
  .head{
    text-align: center;
    font-size: 22px;
    margin: auto 70px;
  }
  
}
</style>

