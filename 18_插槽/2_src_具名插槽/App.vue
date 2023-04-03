<template>
  <div class="container">
    <Category title="美食">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="#" class="foot">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="#">经典</a>
          <a href="#">热门</a>
          <a href="#">推荐</a>
        </div>
        <h4 class="foot">欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾"],
      games: ["红色警戒", "穿越火线", "劲舞团"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》"],
    };
  },
};
</script>

<style>
.container,
.foot {
  display: flex;
  /* 主轴的对齐方式 */
  justify-content: space-around; /* 均匀排列每个元素,每个元素周围分配相同的空间 */
}
video {
  width: 100%;
}
</style>