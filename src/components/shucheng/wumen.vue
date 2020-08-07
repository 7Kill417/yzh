<template>
        <div class="add-2">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
              <van-swipe-item><img src="/images/shucheng/wumenbook1.png" alt width="100%" /></van-swipe-item>
              <van-swipe-item><img src="/images/shucheng/wumenbook1.png" alt width="100%" /></van-swipe-item>
              <van-swipe-item><img src="/images/shucheng/wumenbook1.png" alt width="100%" /></van-swipe-item>
              <van-swipe-item><img src="/images/shucheng/lbbook2.png" alt width="100%" /></van-swipe-item>
            </van-swipe>
           <van-row gutter="20" style="margin-top:0.5rem">
      <van-col span="6"> <img src="/images/shucheng/mianfei.png" alt style="width:  0.7rem" width="0.7rem"  /><br/>免费</van-col>
      <van-col span="6" ><img src="/images/shucheng/phb.png" alt style="width:  0.7rem" width="0.7rem"  /><br/>排行榜</van-col>
      <van-col span="6"><img src="/images/shucheng/wanjie.png" alt style="width:  0.7rem" width="0.7rem"  /><br/>完结</van-col>
       <van-col span="6"><img src="/images/shucheng/lianzai.png" alt style="width:  0.7rem" width="0.7rem"  /><br/>连载</van-col>
    </van-row>
             <h5 style="margin-left: 0.5rem">主编推荐</h5>
              <van-row type="flex" class="pb1" style=" margin-top: 0.5rem;" justify="space-around">
            <van-col span="6">  <img v-lazy=images[0] alt width="100%" /><p class="bkname">斩龙</p></van-col>
            <van-col span="6"> <img v-lazy=images[1]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
            <van-col span="6"> <img v-lazy=images[2]  alt width="100%" /><p class="bkname">万古剑穷</p></van-col>
            <van-col span="6"> <img v-lazy=images[1]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
          </van-row>
           <van-row type="flex" class="pb1" style=" margin-top: 0.5rem;" justify="space-around">
            <van-col span="6">  <img v-lazy=images[3]  alt width="100%" /><p class="bkname">斩龙</p></van-col>
            <van-col span="6"> <img v-lazy=images[4]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
            <van-col span="6"> <img v-lazy=images[5]  alt width="100%" /><p class="bkname">万古剑穷</p></van-col>
            <van-col span="6"> <img v-lazy=images[1]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
            
          </van-row>
             <h5 style="margin-left: 0.5rem">本期精品</h5>
             <van-row type="flex" class="pb2" style=" margin-top: 0.5rem;" justify="space-around">
              <van-col span="6">  <img v-lazy=images[0] alt width="100%" /><p class="bkname">斩龙</p></van-col>
              <van-col span="6"> <img v-lazy=images[1]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
              <van-col span="6"> <img v-lazy=images[2]  alt width="100%" /><p class="bkname">万古剑穷</p></van-col>
            </van-row>
    
            <div class="lldq">
                <ul>
                    <li>
                            <img v-lazy=images[6] style="width: 2.5rem;float: left;" alt="" class=""/>
                            <div class="book1">
                                <strong >生生不灭</strong>
                                <p style="margin: 0.3rem;">狮子东</p>
                                <p>少年陈枫身怀绝世神器，修盖世魔功。战
                                        人界，屠魔界，挑仙界，冲神界。打遍诸
                                        世界，杀出冲天血路，成就无上至尊。
                                        </p>
                                        <p style="margin: 0.3rem;">章节数：1233</p>
                            </div>
                    </li>
                    <li>
                            <img v-lazy=images[6] style="width: 2.5rem;float: left;" alt="" class=""/>
                            <div class="book1">
                                <strong >生生不灭</strong>
                                <p style="margin: 0.3rem;">狮子东</p>
                                <p>少年陈枫身怀绝世神器，修盖世魔功。战
                                        人界，屠魔界，挑仙界，冲神界。打遍诸
                                        世界，杀出冲天血路，成就无上至尊。
                                        </p>
                                        <p style="margin: 0.3rem;">章节数：1233</p>
                            </div>
                    </li>
                    <li>
                            <img v-lazy=images[6] style="width: 2.5rem;float: left;" alt="" class=""/>
                            <div class="book1">
                                <strong >生生不灭</strong>
                                <p style="margin: 0.3rem;">狮子东</p>
                                <p>少年陈枫身怀绝世神器，修盖世魔功。战
                                        人界，屠魔界，挑仙界，冲神界。打遍诸
                                        世界，杀出冲天血路，成就无上至尊。
                                        </p>
                                        <p style="margin: 0.3rem;">章节数：1233</p>
                            </div>
                    </li>
                </ul>
             
            </div>
    
    
    
            
         
           <h5 style="margin-left: 0.5rem">男生限免</h5>
       
        <van-row type="flex" class="pb1" style=" margin-top: 0.5rem;" justify="space-around">
         <van-col span="6">  <img v-lazy=images[3]  alt width="100%" /><p class="bkname">斩龙</p></van-col>
         <van-col span="6"> <img v-lazy=images[4]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
         <van-col span="6"> <img v-lazy=images[5]  alt width="100%" /><p class="bkname">万古剑穷</p></van-col>
         <van-col span="6"> <img v-lazy=images[1]  alt width="100%" /><p class="bkname">我的狐仙老婆</p></van-col>
         
       </van-row>
       <h5 style="margin-left: 0.5rem">大家都在读</h5>
       <div class="lldq book2">
            <ul>
                <li>
                        <img v-lazy=images[6] style="width: 2.5rem;float: left;" alt="" class=""/>
                        <div class="book1">
                            <strong >生生不灭</strong>
                            <p style="margin: 0.3rem;">狮子东</p>
                            <p>少年陈枫身怀绝世神器，修盖世魔功。战
                                    人界，屠魔界，挑仙界，冲神界。打遍诸
                                    世界，杀出冲天血路，成就无上至尊。
                                    </p>
                                  
                        </div>
                </li>
                <li>
                        <img v-lazy=images[6] style="width: 2.5rem;float: left;" alt="" class=""/>
                        <div class="book1">
                            <strong >生生不灭</strong>
                            <p style="margin: 0.3rem;">狮子东</p>
                            <p>少年陈枫身怀绝世神器，修盖世魔功。战
                                    人界，屠魔界，挑仙界，冲神界。打遍诸
                                    世界，杀出冲天血路，成就无上至尊。
                                    </p>
                                   
                        </div>
                </li>
                <li>
                        <img v-lazy=images[6] style="width: 2.5rem;float: left;" alt="" class=""/>
                        <div class="book1">
                            <strong >生生不灭</strong>
                            <p style="margin: 0.3rem;">狮子东</p>
                            <p>少年陈枫身怀绝世神器，修盖世魔功。战
                                    人界，屠魔界，挑仙界，冲神界。打遍诸
                                    世界，杀出冲天血路，成就无上至尊。
                                    </p>
                                  
                        </div>
                </li>
            </ul>
         
        </div>
    
    
        </div>
    </template>
    
    <script>
    
    export default {
      name:'jingxuan',
      data(){
        return{
          images:[
          '/images/shucheng/wumenbook2.png',
          '/images/shucheng/wenbk1.png',
          '/images/shucheng/wenbk2.png',
          '/images/shucheng/wenbk3.png',
          '/images/shucheng/book5.png',
          '/images/shucheng/book6.png',
          '/images/shucheng/wenbk4.png'
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
      .pb1>.van-col--6{
          margin: 0 0.3rem;
      }
      .pb2>.van-col--6{
        box-shadow: 0 0 5px black;
      }
      .book1{
        font-size: 0.3rem;
        position: relative;
        left: 0.4rem;
      }
      .book2>ul li{
        height: 4rem;
      }
    </style>
    