<template>
  <article class="home-wrapper">
    <Topbar :messList='topbarList' @changeTopbar="changebar"></Topbar>
    <div class="home-container">
      <ul>
        <li v-for="item in news">
          <div class="item-box" v-if="item.images.length === 0">
            <h4>{{item.title}}</h4>
              <!-- <p class="wes-3">{{item.intro}}</p> -->
                <div class="small-box">
                  <span>{{item.source}}</span>
                  <span>评论：{{item.comment}}</span>
                  <span>{{item.time}}</span>
                </div>
          </div>
          <div class="item-box" v-else-if="item.images.length === 1 || item.images.length === 2">
            <div class="item-left">
              <h4>{{item.title}}</h4>
                <!-- <p class="wes-2">{{item.intro}}</p> -->
 
                <div class="small-box">
                  <span>{{item.source}}</span>
                  <span>评论：{{item.comment}}</span>
                </div>
            </div>
            <div class="item-right">
              <img :src="item.images[0]" alt="">
            </div>
          </div>
          <div class="item-box" v-else>
            <!-- <div class="item-t"> -->
              <h4>{{item.title}}</h4>
              <!-- <p class="wes-1">{{item.intro}}</p> -->
            <!-- </div> -->
            <div class="item-image">
              <img :src="img" :alt="img" :style="{width: item.images.length === 3 ? '30%':'25%'}" v-for="img in item.images">
            </div>
        
              <div class="small-box">
                <span>{{item.source}}</span>
                <span>评论：{{item.comment}}</span>
              </div>
            
          </div>
        </li>
      </ul>
    </div>
  </article>
  
</template>
<script>
  import Topbar from '../../components/topbar/Topbar'
  export default {
    components: {
      Topbar,
    },
    data() {
      return {
        topbarList:['关注','推荐','热点','南昌','视频','新时代','小视频','图片','问答'],
        selectTopbar: null,
        list: [],
        news:{},
      }
    },
    methods:{
      changebar(index) {
        this.selectTopbar = index;
        console.log(index)
      }
    },
    beforeCreate() {
      this.$axios.get('https://www.easy-mock.com/mock/5a97f7de41bb370817801652/jinritoutiao/home/list')
      .then((response) => {
        console.log(response);
        this.list = response.data.data;
        this.$nextTick(() => {
        this.news = this.list[this.topbarList[this.selectTopbar]];
        console.log(this.news)
        })
      })
      .catch((error) => {
        console.log(error)
      })
      
    },
    watch: {
      selectTopbar(newVal, oldVal) {
        this.news = this.list[this.topbarList[newVal]]
      }
    }
    
  }
</script>
<style scoped>
.home-wrapper {
  overflow-y: scroll;
}
/* .home-container{
  position: relative;
} */
.home-container, .home-container ul {
  width: 100%;
  margin: 0;
  padding: 0;
}
.home-container {
  margin-bottom: 50px;
}
.home-container ul li{
  padding: 0 16px;
  list-style: none;

}
.item-box {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #e8e8e8;
  position: relative;
}
.item-box h4{
  margin: 10px auto;
}
.item-box .item-left {
  width: 250px;
}
.item-box .item-right {
  width: 80px;
  height: 70px;
  position: absolute;
  top: 0;
  right: 0;
}
.item-box .item-right img{
  width: 100%;
  height: 100%;
}
.small-box {
  color: #999999;
  font-size: 10px;
  margin-bottom: 10px;
}
.item-image{
  width: 100%;
  height: 70px;
  margin-bottom: 10px
}
.item-image img {
  height: 70px;
  width: 80px;
}
.item-image :nth-child(2){
  margin: 0 10px;
}

</style>
