<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <h2>当前求和为：{{ number }}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前的 Student 实例</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "喵喵",
      sex: "女",
      number: 0,
    };
  },
  methods: {
    add() {
      console.log('add调用了');
      this.number++;
    },
    sendStudentName() {
      // 触发Student组件实例身上的atguigu事件
      this.$emit("atguigu", this.name);
      this.$emit("demo");
    },
    unbind() {
      this.$off('atguigu') // 解绑一个自定义事件
      // this.$off(['atguigu', 'demo']) // 解绑多个自定义事件
      // this.$off(); // 解绑 所有自定义事件
    },
    death() {
      this.$destroy(); // 销毁了当前Student组件的实例，销毁后所有的 Student 实例的自定义事件全都不奏效
    },
  },
};
</script>
<style scoped>
.student {
  background-color: pink;
  margin-top: 10px;
}
</style>
