<template>
    <div class="app-wrapper">
        <headerBar></headerBar>
        <!-- main -->
        <router-view class="main-container"></router-view>
        <footerBar></footerBar>
    </div>
</template>
<script>
import { headerBar, footerBar } from './index'
export default {
  name: 'layout',
    components: {
        headerBar,
        footerBar
    }
}
</script>
<style lang="less" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  .main-container {
    width: 100%;
    height: 630px;
    position: absolute;
    top: 54px;
  }
}
// .app-wrapper {
//     width: 100%;
//     height: 100%;
// }
// .main-container {
//     width: 100%;
//     height: 630px;
//     position: absolute;
//     top:54px;
// }
    
</style>

