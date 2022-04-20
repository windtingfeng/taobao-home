<template>
      <van-tabs v-model="active" class="tab" line-height="0">
        <template slot="nav-left">
          <van-button class="tab__sign">
            <div class="tab__sign__box">
            <!-- <template slot="icon"> -->
              <van-image :src="require('../../../assets/hongbao.png')" class="tab__sign__box__icon" />
            <!-- </template> -->
              <div class="tab__sign__box__text">签到</div>
            </div>
          </van-button>
        </template>
        <!-- 订阅页面 -->
        <van-tab :title-class="['tab__subscribe',{'tab__active':active === 0}]">
          <template slot="title">
            <div class="tab__subscribe__box">
            <span>订阅</span>
            <van-button class="tab__subscribe__box__new"><span>上新</span></van-button>
            </div>
          </template>
          <span>订阅</span>
        </van-tab>
        <!-- 推荐页面 -->
        <van-tab title="推荐" :title-class="['tab__recommend',{'tab__active':active === 1}]">
          <template slot="title">
            <span class="tab__recommend__title">推荐</span>
          </template>
          <seach-bar class="seachbar"></seach-bar>
          <div class="tab__recommend__container" :style="{height:containerH + 'px'}">
            <slot></slot>
          </div>
        </van-tab>
        <template slot="nav-right">
          <van-button class="tab__code">
            <div class="tab__code__box">
              <van-image :src="require('../../../assets/qrcode.png')" class="tab__code__box__icon" />
              <div class="tab__code__box__text">会员码</div>
            </div>
          </van-button>
        </template>
        <bottom-bar class="bottombar"></bottom-bar>
      </van-tabs>
</template>

<script>
import SeachBar from './SeachBar.vue'
import BottomBar from './BottomBar.vue'
export default {
  data(){
    return{
      active:1,
      containerH:0,
      timer:null
    }
  },
  components:{
    SeachBar,
    BottomBar
  },
  watch:{
    
  },
  mounted(){
    this.$nextTick(() => {
      this.getContainerHeight()
      const container = document.querySelector('.tab__recommend__container')
      container.addEventListener('scroll',(e)=>{
        if(container.scrollHeight - container.clientHeight - container.scrollTop <= 1){
          if (this.timer) {
            return;
          }
          this.timer = setTimeout(() => {
            clearTimeout(this.timer);
            this.timer = null;
            this.$emit('getfood')
          }, 500);
        }
      })
    })
  },
  methods:{
    //获取container滚动高度
    getContainerHeight(){
      const totalH = window.innerHeight
      const tab = document.querySelector('.van-tabs__wrap')
      const seachbar = document.querySelector('.seachbar')
      const bottombar = document.querySelector('.bottombar')
      const tabH = tab.offsetHeight
      const seachbarH = seachbar.offsetHeight
      const seachbarMarginTop = Number(window.getComputedStyle(seachbar).marginTop.replace('px',''))
      const seachbarMarginBottom = Number(window.getComputedStyle(seachbar).marginBottom.replace('px',''))
      const bottombarH = bottombar.offsetHeight
      let containerH = totalH - tabH - seachbarH - bottombarH - seachbarMarginTop - seachbarMarginBottom
      this.containerH = containerH
    }
  }
}
</script>

<style lang="less">
.van-tab{
  padding: 0;
}
.tab{
    width: 100%;
    .tab__sign{
      width: 110px;
      height: 52px;
      background-image: linear-gradient(180deg, #FEEDE0 0%, #FEECE0 100%);
      box-shadow: 0px 2px 4px 0px rgba(103,0,8,0.15);
      border-radius: 26px;
      padding: 0;
      display: flex;
      align-items: center;
      .tab__sign__box{
        display: flex;
        justify-content: center;
        align-items: center;
        .tab__sign__box__icon{
          width: 44px;
          height: 44px;
          margin-right: 7px;
        }
        .tab__sign__box__text{
          font-family: PingFangSC-Medium;
          font-size: 22px;
          color: #FF5000;
          letter-spacing: 0;
          font-weight: 500;
        }
      }
    }
    .tab__subscribe{
      font-family: PingFangSC-Regular;
      font-size: 32px;
      color: #fff;
      letter-spacing: 0;
      font-weight: 400;
      margin-right: 26px;
      justify-content: flex-end;
      .tab__subscribe__box{
        position: relative;
        .tab__subscribe__box__new{
          position: absolute;
          top: -20px;
          right: -50px;
          width: 64px;
          height: 28px;
          background-image: linear-gradient(90deg, #29C942 0%, #07B53A 100%);
          border: 1px solid rgba(255,255,255,1);
          border-radius: 26px;
          padding: 0;
          span{
            height: 28px;
            font-family: PingFangSC-Regular;
            font-size: 20px;
            color: #FFFFFF;
            letter-spacing: 0;
            font-weight: 400;
          }
        }
      }
    }
      .tab__recommend__container{
        width: 100%;
        overflow: auto;
        // background-color: #BE122A;
      }
    .tab__recommend{
      font-family: PingFangSC-Medium;
      font-size: 32px;
      color: #fff;
      letter-spacing: 0;
      font-weight: 500;
      justify-content: flex-start;
      margin-left: 26px;
    }
    .tab__active{
      font-size: 38px;
    }
    .tab__code{
      width: 136px;
      height: 52px;
      background-image: linear-gradient(180deg, #FEEDE0 0%, #FEECE0 100%);
      box-shadow: 0px 2px 4px 0px rgba(103,0,8,0.15);
      border-radius: 26px;
      padding: 0;
      display: flex;
      .tab__code__box{
        display: flex;
        align-items: center;
        .tab__code__box__icon{
          width: 48px;
          height: 48px;
          margin-right: 7px;
        }
        .tab__code__box__text{
          font-family: PingFangSC-Medium;
          font-size: 22px;
          color: #FF5000;
          letter-spacing: 0;
          font-weight: 500;
        }
      }
    }
}
.van-tab__text--ellipsis{
  overflow:visible;
}
.van-tabs__wrap{
  padding: 22px 24px 22px 23px;
}
.van-tabs__nav{
  display: flex;
  align-items: center;
  background: transparent;
}
</style>