<template>
  <div class="gridcontainer">
    <div class="grid" id="grid">
      <div class="grid__box" :style="{width:gridwidth + 'px'}">
        <div 
        :class="['grid__box__item',{'grid__box__itempadding':index>0&&index%5!==0,'grid__box__itemfistend':index === 0 || index%5===0}]" 
        v-for="(item,index) in category" 
        :key="index"
        >
          <div class="grid__box__item__img"><van-image :src="item.imageUrl"></van-image></div>
          <div class="grid__box__item__text">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="grid__box__scoll">
      <div class="grid__box__scoll__color" id="grid__box__scoll"></div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            category:{},
            gridwidth:0
        }
    },
  created() {
        this.category = this.$store.state.home.category
  },
  mounted() {
      this.getGridBoxWidth()
    let grid = document.getElementById("grid");
    let scroll = document.getElementById("grid__box__scoll");
    grid.addEventListener("scroll", (e) => {
      scroll.style.marginLeft = grid.scrollLeft / 16.6 + "px";
    });
  },
  methods: {
      //获取金刚位换行宽度
      getGridBoxWidth(){
          const girditem = document.getElementsByClassName('grid__box__item')
          let girditemW = 0
          for(let i=0;i<10;i++){
              girditemW += 
              +girditem[i].offsetWidth
          }
          this.gridwidth = girditemW
      }
  },
};
</script>

<style lang="less">
.gridcontainer {
  position: relative;
  .grid__box__scoll {
    width: 86px;
    height: 6px;
    background: #d4d8dd;
    border-radius: 2px;
    position: absolute;
    bottom: 13px;
    left: 332px;
    .grid__box__scoll__color {
      width: 43px;
      height: 6px;
      background: #ff6d29;
      border-radius: 2px;
    }
  }
}
.grid {
  width: 714px;
  height: 294px;
  background: #fff;
  margin: 0px 18px;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 9px 0px 26px 0px;
  box-sizing: border-box;
  .grid__box {
    display: flex;
    flex-wrap: wrap;
    .grid__box__item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // margin: 0px 21px;
        .grid__box__item__img{
            width: 88px;
            height: 88px;
        }
        .grid__box__item__text{
            width: 104px;
            height: 37px;
            font-family: PingFangSC-Regular;
            font-size: 26px;
            color: #717171;
            letter-spacing: 0;
            text-align: center;
            font-weight: 400;
        }
    }
    .grid__box__itempadding{
        padding: 0px 21px;
    }
    .grid__box__itemfistend{
        padding: 0px 16px;
    }
  }
}
</style>