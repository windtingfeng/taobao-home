<template>
  <div class="error">
      <van-image
        width="220"
        height="215"
        :src="require('../../assets/error.png')"
        />
        <div class="error__title">网络竟然崩溃了</div>
        <div class="error__content">别紧张，试试看刷新页面~</div>
        <van-button class="error__refresh" @click="refresh">刷新</van-button>
  </div>
</template>

<script>
export default {
    methods:{
        //刷新
        refresh(){
            window.location.reload()
        }
    }
}
</script>

<style lang="less" scoped>
.error{
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .error__title{
        font-family: PingFangSC-Regular;
        font-size: 32px;
        color: #6C6C6C;
        letter-spacing: 0;
        font-weight: 400;
        margin-top: 47px;
    }
    .error__content{
        font-family: PingFangSC-Regular;
        font-size: 24px;
        color: #A5A5A5;
        letter-spacing: 0;
        font-weight: 400;
        margin-top: 9px;
    }
    .error__refresh{
        width: 132px;
        margin-top: 39px;
        height: 48px;
        border: 2px solid rgba(151,151,151,1);
        border-radius: 32px;
        color: #7E7E7E;
    }
}
</style>