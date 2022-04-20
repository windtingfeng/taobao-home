<template>
  <layout :isloading="isloading" :error="error">
    <template slot="nomal">
      <tab @getfood="getfood">
        <grid />
        <seaview></seaview>
        <banner></banner>
        <banner-right></banner-right>
        <div style="clear: both"></div>
        <!-- <feed :foods="foods"></feed> -->
        <waterfall :foods="foods"></waterfall>
        <van-loading class="loading" size="24px" v-if="!loaded"
          >马上逛到你心水的商品...</van-loading
        >
        <div class="loading" v-else>
          <span>已加载全部商品</span>
        </div>
      </tab>
    </template>
  </layout>
</template>

<script>
import layout from "@/components/Layout";
import tab from "./components/Tab.vue";
import Grid from "./components/Grid.vue";
import { getHomeData, getToken, getFoodData } from "@/api/apis";
import Seaview from "./components/Seaview.vue";
import Banner from "./components/Banner.vue";
import BannerRight from "./components/BannerRight.vue";
import cookie from "@/utils/cookie";
import feed from "./components/FoodFeed.vue";
import Waterfall from "./components/Waterfall.vue"
export default {
  name: "Home",
  components: {
    layout,
    tab,
    Grid,
    Seaview,
    Banner,
    BannerRight,
    Waterfall
  },
  data() {
    return {
      isloading: true,
      error: false,
      foods: [],
      page: 0,
      loaded: false,
    };
  },
  created() {
    const formData = new FormData();
    const msg = {
      grant_type: "password",
      username: "admin",
      password: "123456",
      client_id: "goods",
      client_secret: "secret",
    };
    for (const key in msg) {
      formData.append(key, msg[key]);
    }
    getToken(formData)
      .then((res) => {
        if (res.data.access_token) {
          this.$store.commit("SET_TOKEN", res.data.access_token);
          cookie.setCookie("token", res.data.access_token);
          this.getfood();
        }
      })
      .catch((err) => {
        console.log("接口获取失败，失败信息：", err.message);
      });
    getHomeData()
      .then((res) => {
        const { data } = res;
        this.isloading = false;
        this.error = false;
        this.$store.commit("SET_HOME", data);
      })
      .catch((err) => {
        this.isloading = false;
        this.error = true;
      });
  },
  mounted() {},
  methods: {
    //封装获取商品信息
    getfood() {
      this.page++;
      if (!this.loaded) {
        getFoodData({ pageIndex: this.page, pageSize: 10 })
          .then((res) => {
            const { data } = res;
            if (this.page == 1) this.foods = data.result;
            else {
              for (var item in data.result) {
                this.foods.push(data.result[item]);
              }
              if (this.foods.length === data.totalCount) {
                this.loaded = true;
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style>
.loading {
  padding: 45px 0px;
  background: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #9a9a9a;
  letter-spacing: 0;
  font-weight: 400;
}
</style>