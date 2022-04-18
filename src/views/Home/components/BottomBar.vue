<template>
  <div>
    <van-tabbar v-model="active" :border="false" class="bottombar">
      <van-tabbar-item v-for="(item,index) in bottombarImg" :key="index">
        <div class="bottombar__item">
          <van-image :class="['bottombar__item__img','bottombar__item__img'+index]" :src="active===index?item.activeImageUrl:item.imageUrl"></van-image>
          <span  class="bottombar__item__name" v-if="item.name">{{ item.name }}</span>
        </div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:0,
      bottombarImg:[]
    }
  },
  created(){
    this.bottombarImg = this.$store.state.home.bottomMenu
  }
}
</script>

<style lang="less">
.bottombar{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 108px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    .bottombar__item{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .bottombar__item__img{
        width: 48px;
        height: 48px;
        margin-bottom: 5px;
      }
      .bottombar__item__img0{
        width: 61.66px;
        height: 71px;
      }
      .bottombar__item__img1{
        width: 80px;
        height: 80px;
      }
      .bottombar__item__name{
        font-family: PingFangSC-Regular;
        font-size: 22px;
        color: #1A1919;
        letter-spacing: 0;
        font-weight: 400;
      }
    }
}
</style>