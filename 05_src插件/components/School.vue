<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <input type="text" v-fbind="name" />
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
