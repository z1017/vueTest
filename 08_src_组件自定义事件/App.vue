<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!-- 通过父组件给子组件传递函数类型的 props 实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <hr />
    <!-- 通过父组件给子组件绑定 一个自定义事件实现：子给父传递数据 -->
    <!-- <Student v-on:atguigu="sendStudentName" @demo="m1"/> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现子给父传递数据（第二种写法，使用ref） -->
   <Student ref="student" @click.native="show"/> <!-- 🔴native -->
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: { Student, School },
  data() {
    return {
      msg: "hello",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校名", name);
    },
    sendStudentName(name){
      console.log('App收到了学生名',name);
    },
    m1(){
      console.log('demo被触发了');
    },
    show(){
      alert(223)
    }
  },
  mounted() {
    this.$refs.student.$on('atguigu',this.sendStudentName) // 🔴绑定自定义事件
    // this.$refs.student.$once('atguigu', this.sendStudentName) // 绑定自定义事件，一次性
  },
};
</script>
<style scoped>
.app {
  background-color: gainsboro;
  padding: 5px;
}
</style>
