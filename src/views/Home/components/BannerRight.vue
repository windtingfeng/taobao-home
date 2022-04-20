<template>
  <div class="bannerright">
      <div class="bannerright__title">
          <van-image
            :src="require('@/assets/nianhuo.png')"
            class="bannerright__title__img"
          ></van-image>
      </div>
      <div class="bannerright__imgbox">
          <div class="bannerright__imgbox__item" v-for="(item,index) in bannerImg" :key="index">
              <van-image
                :src="item.imageUrl"
                class="bannerright__imgbox__item__img"
              ></van-image>
          </div>
      </div>
      <div class="bannerright__btn">
          <div class="bannerright__btn__text">
              国民年货钜惠
          </div>
          <div class="bannerright__btn__button">
              <van-button
                class="bannerright__btn__button__vanbtn"
              ><div class="bannerright__btn__button__text">主会场</div></van-button>
          </div>
      </div>
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
        this.bannerImg = this.$store.state.home.banner.right
    }
}
</script>

<style lang="less" scoped>
.bannerright{
    width: 342px;
    height: 468px;
    background: #F93D61;
    border-radius: 12px;
    float: right;
    margin: 18px 24px 0px 0px;
    position: relative;
    .bannerright__title{
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        overflow: hidden;
        width: 342px;
        height: 85.18px;
        .bannerright__title__img{
            width: 100%;
            height: 100%;
        }
    }
    .bannerright__imgbox{
        width: 100%;
        padding: 0 6px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .bannerright__imgbox__item{
            width: 162px;
            height: 172px;
            background: #FFFFFF;
            border-radius: 8px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 6px;
            .bannerright__imgbox__item__img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .bannerright__btn{
        width: 344px;
        height: 80px;
        border: 4px solid #FFE4B7;
        padding: 0 8px 0 27px;
        box-sizing: border-box;
        background-image: linear-gradient(0deg, #F7203B 0%, #FE3189 100%);
        border-radius: 46.5px;
        position: absolute;
        bottom: -30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .bannerright__btn__text{
            font-family: PingFangSC-Semibold;
            font-size: 30px;
            background: linear-gradient(to bottom, #FEF8A8, #FFFEF6);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            letter-spacing: 0;
            font-weight: 600;
        }
        .bannerright__btn__button{
            width: 112px;
            height: 64px;
            background-image: linear-gradient(0deg, #FEF7A7 0%, #FEF0DC 100%);
            border-radius: 46.5px;
            display: flex;
            justify-content: center;
            align-items: center;
            .bannerright__btn__button__vanbtn{
                background-color: transparent;
                border: none;
            }
            .bannerright__btn__button__text{
                font-family: PingFangSC-Semibold;
                font-size: 25px;
                color: #FF2B16;
                letter-spacing: 0;
                font-weight: 600;
            }
        }
    }
}
</style>