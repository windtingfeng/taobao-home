<template>
  <div class="waterfall">
      <div class="waterfall__item" v-for="(item,index) in foods" :key="index">
        <div class="feed__item__img">
            <img
            class="feed__item__img"
            v-lazy="item.cover"
            />
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
    props:{
        foods:{
            type:Array,
            default:null
        },
        col:{
            type:Number,
            default:2
        }
    },
    watch:{
        foods(newfoods,oldfoods){
            // if(oldfoods.length === 0)return
            console.log('foods监听到了');
              this.waterfall()
        }
    },
    mounted(){
        // this.$nextTick(()=>{
        //     this.waterfall()
        // })
        // setTimeout(() => {
        //   this.waterfall()
        // }, 2000);
    },
    methods:{
        //封装瀑布流
        waterfall(){
          this.$nextTick().then(()=>{
            let arr = []
            const waterfall = document.querySelector('.waterfall') //瀑布流容器
            const waterfallW= waterfall.clientWidth  //容器宽度
            const waterfallItem = document.getElementsByClassName('waterfall__item')  //获取子元素DOM
            console.log(waterfallItem);
            console.log(waterfallItem.length);
            const waterfallItemW = Math.round((waterfallW - 14 - 24)/this.col) //定义子元素宽度 总宽-间距除以this.col(列数)
            for(let i = 0; i<waterfallItem.length; i++){
                waterfallItem[i].style.width = waterfallItemW + 'px' //设置每个子元素宽度
                if(i < this.col){
                    waterfallItem[i].style.top = 24 + 'px'
                    waterfallItem[0].style.left = 14 + 'px'
                    waterfallItem[i].style.left = waterfallItem[0].clientWidth * i + waterfallItem[0].offsetLeft + 14  + 'px'  //处理第一行数据
                    arr.push(waterfallItem[i].clientHeight + 24)
                }else{
                    const minHeight = Math.min(...arr)
                    const index = arr.findIndex(item=>item === minHeight
                    )
                    waterfallItem[i].style.top = (arr[index] + 14) + 'px'
                    waterfallItem[i].style.left = waterfallItem[index].offsetLeft + 'px'
                    arr[index] += waterfallItem[i].clientHeight +14
                }
            }
            waterfall.style.height = Math.max(...arr) + 'px'

          })
        }
    }
}
</script>

<style lang="less" scoped>
.waterfall{
    position: relative;
    width: 100%;
    border-radius: 24px 24px 0px 0px;
    // padding: 17px 17px 0px 17px;
    box-sizing: border-box;
    background: #F0F0F0;
    margin-top: 23px;
    .waterfall__item{
    position: absolute;
    background: #FFFFFF;
    border-radius: 12px;
    overflow: hidden;
    .feed__item__img{
      width: 100%;
      height: 344px;
    }
    .feed__item__text{
      width: 100%;
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