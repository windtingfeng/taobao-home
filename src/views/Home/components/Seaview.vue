<template>
  <div class="seaview">
      <div class="seaview__item">
          <div class="seaview__item__title">
              <span class="seaview__item__title__red">年货节</span>
              <span class="seaview__item__title__nomal">聚划算</span>
          </div>
          <div class="seaview__item__imgbox">
              <van-image :src="seaviewImg[0].imageUrl" class="seaview__item__imgbox__img"></van-image>
              <van-image :src="seaviewImg[1].imageUrl" class="seaview__item__imgbox__img"></van-image>
          </div>
      </div>
      <div class="seaview__item">
          <div class="seaview__item__title">
              <span class="seaview__item__title__red">年货节</span>
              <span class="seaview__item__title__nomal"> 直播</span>
          </div>
          <div class="seaview__item__imgbox">
              <van-image :src="seaviewImg[2].imageUrl" class="seaview__item__imgbox__img"></van-image>
              <van-image :src="seaviewImg[3].imageUrl" class="seaview__item__imgbox__img"></van-image>
          </div>
      </div>
      <div class="seaview__item">
          <div class="seaview__item__title">
              <span class="seaview__item__title__red">年货节</span>
              <span class="seaview__item__title__nomal">有好货</span>
          </div>
          <div class="seaview__item__imgbox">
              <van-image :src="seaviewImg[4].imageUrl" class="seaview__item__imgbox__img"></van-image>
              <van-image :src="seaviewImg[5].imageUrl" class="seaview__item__imgbox__img"></van-image>
          </div>
      </div>
      <div class="seaview__item">
          <div class="seaview__item__title">
              <span class="seaview__item__title__red">年货节</span>
              <span class="seaview__item__title__nomal"> 菜菜</span>
          </div>
          <div class="seaview__item__imgbox">
              <van-image :src="seaviewImg[6].imageUrl" class="seaview__item__imgbox__img"></van-image>
              <van-image :src="seaviewImg[7].imageUrl" class="seaview__item__imgbox__img"></van-image>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            seaviewImg:[]
        }
    },
    created(){
        let sea =  this.$store.state.home.seascape
        this.seaviewImg = sea
    }
}
</script>

<style lang="less" scoped>
.seaview{
    width: 714px;
    height: 366px;
    background: #FFFFFF;
    border-radius: 24px;
    overflow: hidden;
    margin: 12px 18px 0px 18px;
    display: flex;
    flex-wrap: wrap;
    .seaview__item{
        width: 50%;
        height: 50%;
        padding: 4px 23px 9px 12px;
        box-sizing: border-box;
        .seaview__item__title{
            .seaview__item__title__red{
                color: red;
                font-size: 29px;
                font-weight: 600;
            }
            .seaview__item__title__nomal{
                font-family: PingFangSC-Medium;
                font-size: 28px;
                color: #545454;
                letter-spacing: 0;
                font-weight: 500;
            }
        }
        .seaview__item__imgbox{
            display: flex;
            .seaview__item__imgbox__img{
                width: 50%;
                height: 100%;
            }
        }
    }
}
</style>