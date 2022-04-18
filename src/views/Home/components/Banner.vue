<template>
  <div class="banner">
      <van-swipe class="banner__swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in bannerImg" :key="index">
            <van-image class="banner__swipe__img" :src="item.imageUrl"></van-image>
        </van-swipe-item>
      </van-swipe>
  </div>
</template>

<script>
export default {
    data(){
        return{
            bannerImg:[]
        }
    },
    created(){
        this.bannerImg = this.$store.state.home.banner.left
    }
}
</script>

<style lang="less" scoped>
.banner{
    width: 342px;
    height: 498px;
    margin: 18px 18px 0px 24px;
    border-radius: 5px;
    overflow: hidden;
    float: left;
    .banner__swipe{
        height: 100%;
        .banner__swipe__img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>