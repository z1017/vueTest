<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>学生姓名：{{ name | mySlice }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="test">点我测试一个 hello 方法</button>
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

  methods: {
    test(){
      this.hello()
    }
  },

};
</script>
