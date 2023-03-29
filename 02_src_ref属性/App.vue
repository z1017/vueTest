<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDom">点我输出上方的DOM元素</button>
    <School ref="sch" />
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  components: { School },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
  methods: {
    showDom() {
      console.log(this.$refs.title); // 真实 DOM 元素
      console.log(this.$refs.btn); // 真实 DOM 元素
      console.log(this.$refs.sch); // School 组件地实例对象（vc）
      console.log(this.$refs);
    },
  },
};
</script>

<style>
</style>