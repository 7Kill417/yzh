<template>
  <div id="shujia">
    <header>
      <router-link to="/search">
      <van-icon class="search" name="search" />
      </router-link>
      <span>书架</span>
    </header>
    <section>
      <div class="img">
        <img src="/images/shujia/add.png" alt width="100%" />
      </div>
      <h5 style="margin-left: 0.5rem">或许您也些许喜欢这些</h5>
      <van-row type="flex" style=" margin-top: 0.5rem;" justify="space-around">
        <van-col span="6">  <img src="/images/shujia/book1.png" alt width="100%" /><p class="bkname">斩龙</p></van-col>
        <van-col span="6"> <img src="/images/shujia/book2.png" alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
        <van-col span="6"> <img src="/images/shujia/book3.png" alt width="100%" /><p class="bkname">万古剑穷</p></van-col>
      </van-row>
       <van-row type="flex"  style=" margin-top: 0.5rem;" justify="space-around">
        <van-col span="6">  <img src="/images/shujia/book1.png" alt width="100%" /><p class="bkname">斩龙</p></van-col>
        <van-col span="6"> <img src="/images/shujia/book2.png" alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
        <van-col span="6"> <img src="/images/shujia/book3.png" alt width="100%" /><p class="bkname">万古剑穷</p></van-col>
      </van-row>
    </section>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from "../../components/tabBar/tabBar";
export default {
    name:'shujia',
    components:{TabBar}
};
</script>

<style>
* {
  margin: 0px;
  padding: 0;
}
html {
  background: #fafafa;
}
header {
  text-align: center;
  background: white;
  padding: 0.2rem;
  position: relative;
  box-shadow: 1px 1px 1px #e2e2e2;
}
.search {
  float: left;
  position: absolute;
  left: 0.5rem;
  font-size: 0.8rem;
}
.img {
  margin-top: 0.5rem;
}
.bkname{
    text-align: center;
    font-size: 0.2rem;
    color:#636363;
}
</style>