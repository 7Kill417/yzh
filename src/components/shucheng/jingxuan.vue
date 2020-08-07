<template>
    <div class="add-2">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item><img src="/images/shucheng/lbbook.png" alt width="100%" /></van-swipe-item>
          <van-swipe-item><img src="/images/shucheng/lbbook.png" alt width="100%" /></van-swipe-item>
          <van-swipe-item><img src="/images/shucheng/lbbook.png" alt width="100%" /></van-swipe-item>
          <van-swipe-item><img src="/images/shucheng/lbbook.png" alt width="100%" /></van-swipe-item>
        </van-swipe>
       <van-row gutter="20" style="margin-top:0.5rem">
  <van-col span="6"> <img src="/images/shucheng/mianfei.png" alt style="width:  0.7rem" width="0.7rem"  /><br/>免费</van-col>
  <van-col span="6" ><img src="/images/shucheng/phb.png" alt style="width:  0.7rem" width="0.7rem"  /><br/>排行榜</van-col>
  <van-col span="6"><img src="/images/shucheng/wanjie.png" alt style="width:  0.7rem" width="0.7rem"  /><br/>完结</van-col>
   <van-col span="6"><img src="/images/shucheng/lianzai.png" alt style="width:  0.7rem" width="0.7rem"  /><br/>连载</van-col>
</van-row>
         <h5 style="margin-left: 0.5rem">精品必读</h5>
          <van-row type="flex" style=" margin-top: 0.5rem;" justify="space-around">
        <van-col span="6">  <img v-lazy=images[0] alt width="100%" /><p class="bkname">斩龙</p></van-col>
        <van-col span="6"> <img v-lazy=images[1]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
        <van-col span="6"> <img v-lazy=images[2]  alt width="100%" /><p class="bkname">万古剑穷</p></van-col>
      </van-row>
       <van-row type="flex" style=" margin-top: 0.5rem;" justify="space-around">
        <van-col span="6">  <img v-lazy=images[3]  alt width="100%" /><p class="bkname">斩龙</p></van-col>
        <van-col span="6"> <img v-lazy=images[4]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
        <van-col span="6"> <img v-lazy=images[5]  alt width="100%" /><p class="bkname">万古剑穷</p></van-col>
        
      </van-row>
         <h5 style="margin-left: 0.5rem">今日限免</h5>
         <van-row type="flex" style=" margin-top: 0.5rem;" justify="space-around">
          <van-col span="6">  <img v-lazy=images[0] alt width="100%" /><p class="bkname">斩龙</p></van-col>
          <van-col span="6"> <img v-lazy=images[1]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
          <van-col span="6"> <img v-lazy=images[2]  alt width="100%" /><p class="bkname">万古剑穷</p></van-col>
        </van-row>
         <van-row type="flex" style=" margin-top: 0.5rem;" justify="space-around">
          <van-col span="6">  <img v-lazy=images[3]  alt width="100%" /><p class="bkname">斩龙</p></van-col>
          <van-col span="6"> <img v-lazy=images[4]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
          <van-col span="6"> <img v-lazy=images[5]  alt width="100%" /><p class="bkname">万古剑穷</p></van-col>
          
        </van-row>
      <img src="/images/shucheng/lldq.png" alt="" class="lldq"/>
       <h5 style="margin-left: 0.5rem">畅销热书</h5>
       <van-row type="flex" style=" margin-top: 0.5rem;" justify="space-around">
        <van-col span="6">  <img v-lazy=images[0] alt width="100%" /><p class="bkname">斩龙</p></van-col>
        <van-col span="6"> <img v-lazy=images[1]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
        <van-col span="6"> <img v-lazy=images[2]  alt width="100%" /><p class="bkname">万古剑穷</p></van-col>
      </van-row>
       <van-row type="flex" style=" margin-top: 0.5rem;" justify="space-around">
        <van-col span="6">  <img v-lazy=images[3]  alt width="100%" /><p class="bkname">斩龙</p></van-col>
        <van-col span="6"> <img v-lazy=images[4]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
        <van-col span="6"> <img v-lazy=images[5]  alt width="100%" /><p class="bkname">万古剑穷</p></van-col>
        
      </van-row>
       <h5 style="margin-left: 0.5rem">主编力推</h5>
       <van-row type="flex" style=" margin-top: 0.5rem;" justify="space-around">
        <van-col span="6">  <img v-lazy=images[0] alt width="100%" /><p class="bkname">斩龙</p></van-col>
        <van-col span="6"> <img v-lazy=images[1]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
        <van-col span="6"> <img v-lazy=images[2]  alt width="100%" /><p class="bkname">万古剑穷</p></van-col>
      </van-row>
       <van-row type="flex" style=" margin-top: 0.5rem;" justify="space-around">
        <van-col span="6">  <img v-lazy=images[3]  alt width="100%" /><p class="bkname">斩龙</p></van-col>
        <van-col span="6"> <img v-lazy=images[4]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
        <van-col span="6"> <img v-lazy=images[5]  alt width="100%" /><p class="bkname">万古剑穷</p></van-col>
        
      </van-row>
       <h5 style="margin-left: 0.5rem">影视专区</h5>
       <van-row type="flex" style=" margin-top: 0.5rem;" justify="space-around">
        <van-col span="6">  <img v-lazy=images[0] alt width="100%" /><p class="bkname">斩龙</p></van-col>
        <van-col span="6"> <img v-lazy=images[1]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
        <van-col span="6"> <img v-lazy=images[2]  alt width="100%" /><p class="bkname">万古剑穷</p></van-col>
      </van-row>
       <van-row type="flex" style=" margin-top: 0.5rem;" justify="space-around">
        <van-col span="6">  <img v-lazy=images[3]  alt width="100%" /><p class="bkname">斩龙</p></van-col>
        <van-col span="6"> <img v-lazy=images[4]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
        <van-col span="6"> <img v-lazy=images[5]  alt width="100%" /><p class="bkname">万古剑穷</p></van-col>
        
      </van-row>
      <van-row>
  <van-col span="12">励志文学<br/><span class="sx">在行走的路上你不孤单</span><br/><img src="/images/shucheng/fenlei1.png" alt width="100%" /></van-col>
  <van-col span="12">精品推荐<br/><span class="sx">好闻陪你过夏天</span><br/><img src="/images/shucheng/fenlei1.png" alt width="100%" /></van-col>
</van-row>
  <h5 style="margin-left: 0.5rem">影视专区</h5>
  <van-row type="flex" style=" margin-top: 0.5rem;" justify="space-around">
    <van-col span="6">  <img v-lazy=images[0] alt width="100%" /><p class="bkname">斩龙</p></van-col>
    <van-col span="6"> <img v-lazy=images[1]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
    <van-col span="6"> <img v-lazy=images[2]  alt width="100%" /><p class="bkname">万古剑穷</p></van-col>
  </van-row>
   <van-row type="flex" style=" margin-top: 0.5rem;" justify="space-around">
    <van-col span="6">  <img v-lazy=images[3]  alt width="100%" /><p class="bkname">斩龙</p></van-col>
    <van-col span="6"> <img v-lazy=images[4]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
    <van-col span="6"> <img v-lazy=images[5]  alt width="100%" /><p class="bkname">万古剑穷</p></van-col>
    
  </van-row>

    </div>
</template>

<script>

export default {
  name:'jingxuan',
  data(){
    return{
      images:[
      '/images/shucheng/book1.png',
      '/images/shucheng/book2.png',
      '/images/shucheng/book3.png',
      '/images/shucheng/book4.png',
      '/images/shucheng/book5.png',
      '/images/shucheng/book6.png',
      ],
    }
  }
}
</script>

<style>
    .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    
  }
  .van-swipe-item{
   height:4.6rem;
  }
  .lldq{
          width: 90%;
    /* margin: 0 auto; */
    margin-left: 0.5rem;
    margin-top:0.5rem
  }
  h5{
      margin-top:0.5rem
  }
  .sx{
      font-size:0.2rem
  }
  .van-col--12{
      font-size:0.5rem;
      padding:0.4rem
  }
  .van-col--6{
    text-align:center;
    font-size: 0.3rem;
  }
</style>
