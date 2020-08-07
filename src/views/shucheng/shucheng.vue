<template>
    <div>
        <div class="add-1">
            <div style="width:80%;margin: 0 auto">
            <!-- <van-tabs v-model="active" animated swipeable>
                <van-tab title="精选"></van-tab>
                <van-tab title="男生">内容 2</van-tab>
                <van-tab title="女生">内容 3</van-tab>
                <van-tab title="出版">内容 4</van-tab>
            </van-tabs> -->
            <van-row>
                <van-col span="6">  <router-link  to="/shucheng/jingxuan" class="hot_item active">精选</router-link></van-col>
                <van-col span="6"> <router-link  to="/shucheng/men" class="hot_item active">男生</router-link></van-col>
                <van-col span="6"> <router-link  to="/shucheng/wumen" class="hot_item active">女生</router-link></van-col>
                <van-col span="6"> <router-link  to="/shucheng/chuban" class="hot_item active">出版</router-link></van-col>
              </van-row>
        </div>
      
        <div>
            <router-link  to="/search" class="searchs"><van-icon  class="searchs" color="white" name="search" /></router-link>  
        </div>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <TabBar></TabBar>
    </div>
</template>

<script>
import TabBar from "../../components/tabBar/tabBar"

export default {
     name:'shucheng',
    components:{TabBar},
      data() {
    return {
      active: 0,
    };
  },
}
</script>

<style scoped>
    .add-1{
        display: flex;
    background: rgba(255, 255, 255, 0);
    position: relative;
    z-index: 1;
    top: 0.2rem;
    }
    .add-2{
        margin-top: -0.73333rem;    
    }
    .van-tab{
        font-size:0.38667rem
    }
    .searchs{
       float: left;
    position: absolute;
    right: 0.1rem !important;
    font-size: 0.8rem;

    }
    a{
    text-align: center;
    font-size: 0.5rem;
    color: white;
    }
    .van-col--6{
        font-size: 0.4rem;
    }
</style>