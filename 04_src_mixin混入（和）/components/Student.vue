<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
  </div>
</template>

<script>
// 针对分别暴露的引入
// eslint-disable-next-line no-unused-vars
// import { mixin, mixin2 } from "../mixin";
export default {
  name: "MyStudent",
  data() {
    return {
      name: "喵喵",
      sex: "女",
    };
  },
  // mixins:[mixin,mixin2]
};
</script>
