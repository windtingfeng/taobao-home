<template>
  <div class="layout">
    <div class="layout__loading" v-if="isloading">
        <van-loading size="20px" text-size="20px">拼命加载中...</van-loading>
    </div>
    <div class="layout__error" v-else-if="error">
        <error></error>
    </div>
    <div class="layout__nomal" v-else>
        <slot name="nomal"></slot>
    </div>
  </div>
</template>

<script>
import error from '@/components/Error'
export default {
    name:'Layout',
    data(){
        return{
        }
    },
    props:{
        isloading:{
            type:Boolean,
            default:true
        },
        error:{
            type:Boolean,
            default:false
        }
    },
    components:{
        error
    }
};
</script>

<style lang="less" scoped>
.layout{
    width: 100%;
    height: 100%;
    .layout__loading{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .layout__error{
        width: 100%;
        height: 100%;
    }
    .layout__nomal{
        background: url('../../assets/bg.png') no-repeat;
        background-size: 100% 100%;
    }
}
</style>
