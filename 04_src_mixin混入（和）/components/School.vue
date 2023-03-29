<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2 @click="showName">学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
// import {mixin, mixin2} from '../mixin'
export default {
  name: "MySchool",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  // mixins:[mixin,mixin2]
};
</script>
