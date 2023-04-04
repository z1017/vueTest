<template>
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <h2>当前求和放大10倍为：{{ bigSum }}</h2>
    <h2>我是{{ name }}，我在{{ school }}学习</h2>
    <select v-model.number="num">
      <!-- 加了冒号当成JS表达式去解析 -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd(num)">当前求和值为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Count",
  data() {
    return {
      name: "root",
      num: 1, // 用户选择的数字
    };
  },
  computed: {
    ...mapState(["sum", "name", "school"]),
    ...mapGetters(["bigSum"]),
  },
  methods: {
    /*  increment() {
      this.$store.commit("JIA", this.num);
    },
    decrement() {
      this.$store.commit("JIAN", this.num);
    }, */

    // 借助mapMutations 生成对应的方法，方法中会调用 commit 去联系 mutations (对象写法)
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),

    /* ************************************************** */

    /* incrementOdd() {
      this.$store.dispatch("jiaOdd", this.num);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.num);
    }, */

    // 借助mapActions 生成对应的方法，方法中会调用 dispath 去联系 actions (对象写法)
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
  },
};
</script>
<style scoped>
button {
  margin-left: 5px;
}
</style>