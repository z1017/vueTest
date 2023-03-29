<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
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
};
</script>
<style scoped>
.student {
  background-color: pink;
  margin-top: 10px;
}
</style>
