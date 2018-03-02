<template>
  <div>
    <Topbar :messList="topbarList" @changeTopbar="changebar"></Topbar>
    <div>{{selectTopbar}}</div>
  </div>
</template>
<script>
import Topbar from '../../components/topbar/Topbar'
export default {
  components: {
    Topbar
  },
  data() {
    return {
      topbarList: ['推荐','音乐','搞笑','社会','小品','生活','电影','娱乐','呆萌','游戏','开眼','火山视频','广场舞'],
      selectTopbar: null,
      // list: [],
      // news:{},
    }
  },
  methods: {
    changebar(index) {
        this.selectTopbar = index
        // console.log(index)
      }
  },
  create() {
    this.selectTopbar = 1;
  },
  watch: {
      selectTopbar(newVal, oldVal) {
        // this.news = this.list[this.topbarList[newVal]]
      }
    }
}
</script>
<style scoped>
.topbar-wrapper >>> .top-menu-more-btn{display: none}
.topbar-wrapper >>> .top-menu-bar {width: 100%}
</style>

