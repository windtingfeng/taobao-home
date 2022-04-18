<template>
  <van-search
    show-action
    placeholder="夏季新品"
    class="seachbar"
  >
    <template slot="left-icon">
      <a class="seachbar__scan"
        ><van-image :src="require('../../../assets/scan.png')" class="seachbar__scan__img" />
      </a>
    </template>
    <template slot="right-icon">
      <a class="seachbar__camera"
        ><van-image :src="require('../../../assets/camera.png')" class="seachbar__camera__img" /></a>
    </template>
    <template slot="action">
      <van-button class="seachbar__seach">搜索</van-button>
    </template>
  </van-search>
</template>

<script>
export default {};
</script>

<style lang="less">
.seachbar {
  margin: 25px 24px 16px 26px;
  width: 700px;
  height: 64px;
  background: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.02);
  border-radius: 32px;
  display: flex;
  align-items: center;
  .van-search__content{
      height: 50px;
      background-color: #fff;
      font-size: 26px;
  }
  .seachbar__scan {
      padding-right: 11px;
      border-right: 1px solid #e9e9e9;
      display: block;
      display: flex;
      align-items: center;
    .seachbar__scan__img {
      width: 35px;
      height: 32px;
    }
  }
  .seachbar__input {
    height: 37px;
    border-left: 1px solid rgb(231, 231, 231);
    padding: 0px 10px;
    color: #ccc;
  }
  .seachbar__seach {
    width: 107px;
    height: 60px;
    // padding: 10px 25px 13px 30px;
    background-image: linear-gradient(90deg, #fe8b0d 0%, #ff5201 100%);
    border-radius: 32px;
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #fff;
    letter-spacing: 0;
    font-weight: 400;
  }
  .seachbar__camera{
      .seachbar__camera__img{
        margin-top: 6px;
          width: 40px;
height: 32px;
      }
  }
}
.van-field__body {
  width: 100%;
  height: 100%;
}
.van-field__control {
  width: 100%;
  height: 100%;
}
</style>