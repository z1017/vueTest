<!-- eslint-disable vue/multi-word-component-names -->
<template >
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>
