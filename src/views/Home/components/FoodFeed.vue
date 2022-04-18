<template>
  <div class="feed">
    <div class="feed__item" v-for="(item,index) in foods" :key="index">
      <div class="feed__item__img">
        <lazy-component>
        <van-image
          :src="item.cover"
          class="feed__item__img"
          lazy-load
        ></van-image>
        </lazy-component>
      </div>
      <div class="feed__item__text">
        <div class="feed__item__text__title">
          <span class="feed__item__text__hot" v-if="item.isHot">HOT</span>
          {{item.name}}
        </div>
        <div class="feed__item__text__price">
          <span class="feed__item__price_icon">￥</span>
          <span class="feed__item__price_num">{{ item.price }}</span>
          <span class="feed__item__price_peo">{{ item.sales }}人+付款</span>
        </div>
        <div class="feed__item__text__activity">
          <div class="feed__item__text__activity__left"></div>
          <div class="feed__item__text__activity__right">...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  props:{
    foods:{
      type:Array,
      default:null
    }
  },
  created(){
  },
  methods: {
    
  },
};
</script>

<style lang="less">
.feed{
  width: 100%;
  border-radius: 24px 24px 0px 0px;
  padding: 24px 24px 0px 24px;
  box-sizing: border-box;
  background: #F0F0F0;
  margin-top: 23px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .feed__item{
    width: 344px;
    height: 558px;
    background: #FFFFFF;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 14px;
    .feed__item__img{
      width: 344px;
      height: 344px;
    }
    .feed__item__text{
      width: 344px;
      height: 214px;
      padding: 11px 21px 36px 21px;
      box-sizing: border-box;
      .feed__item__text__title{
        width: 321px;
        min-height: 84px;
        font-family: PingFangSC-Regular;
        font-size: 30px;
        color: #0B0B0B;
        letter-spacing: 0;
        line-height: 34px;
        font-weight: 400;
      }
      .feed__item__text__hot{
        width: 56px;
        height: 28px;
        background: #FE6026;
        border-radius: 4px;
        font-family: PingFangSC-Light;
        font-size: 22px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 24px;
        font-weight: 200;
      }
      .feed__item__text__price{
        .feed__item__price_icon{
          width: 20px;
          height: 28px;
          font-family: PingFangSC-Regular;
          font-size: 20px;
          color: #FF540F;
          letter-spacing: 0;
          font-weight: 400;
        }
        .feed__item__price_num{
          width: 62px;
          height: 48px;
          font-family: PingFangSC-Regular;
          font-size: 34px;
          color: #FF540F;
          letter-spacing: 0;
          font-weight: 400;
          margin: 0 13px 0 1px;
        }
        .feed__item__price_peo{
          width: 115px;
          height: 30px;
          font-family: PingFangSC-Regular;
          font-size: 22px;
          color: #9B9B9B;
          letter-spacing: 0;
          font-weight: 400;
        }
      }
      .feed__item__text__activity{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .feed__item__text__activity__right{
          color: #C4D1C1;
        }
        
      }
    }
  }
}
</style>