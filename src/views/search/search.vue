<template>
  <div>
    <header>
      <van-row>
        <van-col span="2">
          <van-icon  onclick="window.history.go(-1)" name="arrow-left" />
        </van-col>
        <van-col span="16" offset="1">
          <input class="search1" placeholder="搜索作者，书名" />
        </van-col>
        <van-col style="    font-size: 0.45rem;   margin-top: 0.15rem;" span="4" offset="1">搜索</van-col>
      </van-row>
    </header>
    <section>
      <h6 style="margin-left: 0.5rem;margin-top: 0.55rem;">热门搜索</h6>
      <p class="name">
        <span><van-icon name="fire" size="0.4rem" color="red"/>刘慈欣</span>
        <span>流浪地球</span><br/>
        <span>女总裁的全能兵王</span>
        <span><van-icon name="fire" size="0.4rem" color="red"/>笑笑星儿</span><br/>
        <span><van-icon name="fire" size="0.4rem" color="red"/>修罗神武</span>
        <span>吞天记</span><br/>
      </p>
    </section>
  </div>
</template>

<script>
export default {
    
};
</script>

<style>
header {
  box-shadow: 1px 1px 1px #e2e2e2;
}
.search1 {
  background: #f1f1f1;
  width: 100%;
  font-size: 0.4rem;
  padding: 0.2rem;
  border-radius: 0.1rem;
  border: wheat;
  padding-left: 0.4rem;
}
.name{
    margin-top: 0.5rem
}
.name > span {
    border: 0.02667rem solid #e8e8e8;
    border-radius: 1rem;
    padding: 0.2rem 0.5rem;
    font-size: 0.4rem;
    margin: 0.1rem 0.3rem;
    display: inline-block;
}
</style>