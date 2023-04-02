<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click='sendStudentName'>把学生名给School组件</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "喵喵",
      sex: "女",
    };
  },
  mounted() {
    
  },
  methods: {
    sendStudentName(){
      this.$bus.$emit('hello',this.name)
    }
  },
};
</script>
<style scoped>
.student {
  background-color: pink;
  margin-top: 10px;
}
</style>
