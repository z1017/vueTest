<template>
  <div class="container">
    <Category title="游戏">
      <template scope="atguigu">
        <ul>
          <li v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <!--  scope="{games}":解构赋值 -->
      <template scope="{games}">
        <ol>
          <li style="color: red" v-for="(g, index) in games" :key="index">
            {{ g }}
          </li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="{ games }">
        <h4 class="foot" v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: { Category },
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