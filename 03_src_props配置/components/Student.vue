<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="school">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <h2>学生年龄:{{ myAge }}</h2>
    <button @click="changeAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      msg: "我是一个热爱学习的学生",
      myAge:this.age
    };
  },
  methods: {
    changeAge() {
      // eslint-disable-next-line vue/no-mutating-props
      this.myAge++
    }
  },

  props: ["name", "sex", "age"], // 只接收

  /* 
  // 限制类型
  props: {
    name: String,
    age: Number,
    sex: String,
  },  */

  // 限制类型、限制必要性、指定默认值
  /* props: {
    name: {
      type: String, // name d的类型是字符串
      required: true, // 该属性是否是必须的
    },
    age: {
      type: Number,
      default: 99, // 默认
    },
    sex: {
      type: String,
      required: true,
    },
  }, */
};
</script>
