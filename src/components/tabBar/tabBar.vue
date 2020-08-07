<template>
  <div>
  <div style="height:1.3rem">
  
  </div>
 <div id="footer" >
        <ul>
            <router-link tag="li" to="/shujia">
              <van-icon name="label" />
                <p>书架</p>
            </router-link>
            <router-link tag="li" to="/shucheng">
               <van-icon name="column" />
                <p>书城</p>
            </router-link>
            <router-link tag="li" to="/mine">
              <van-icon name="wap-nav" />
                <p>分类</p>
            </router-link>
              <router-link tag="li" to="/mine">
               <van-icon name="manager" />
                <p>我的</p>
            </router-link>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home"
    };
  }
};
</script>
    
<style scoped>
*{
  margin:0;
  padding:0;
}
 #footer{
        width: 100%;
        height: 1.2rem;
        background: white;
        border-top: 2px solid #ebe8e3;
        position: fixed;
        left: 0;
        bottom: 0px;
    }
    #footer ul{
        display: flex;
        text-align: center;
        height: 50px;
        align-items: center;
        margin-top: 0.35rem;
    }
    #footer ul li{
        flex: 1;
         height: 1.2rem;
        list-style: none;
    }
    #footer li.active{
        color: #f03d37;
    }
    #footer li.router-link-active{
        color: #f03d37;
    }
    #footer ul i{
        font-size: 0.55rem;
    }
    #footer ul p{
        font-size: 0.26rem;
        line-height: 18px;
    } 
</style>