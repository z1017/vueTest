<template>
  <div class="container">
    <Category title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
    </Category>

    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
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
.container {
  display: flex;
  /* 主轴的对齐方式 */
  justify-content: space-around; /* 均匀排列每个元素,每个元素周围分配相同的空间 */
}
video{
    width: 100%;
}
</style>