<template>
  <div>
    <button @click="getStudent">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  methods: {
    getStudent() {
      // 请求之后返回的是一个promise值
      axios.get('http://localhost:8081/atguigu/students').then(
        response=>{
          console.log('请求成功了',response.data);
        },
        error => {
          console.log('请求失败了',error.message);
        }
      )
    },
    getCars(){
      axios.get('http://localhost:8081/demo/cars').then(
        response=>{
          console.log('请求成功了',response.data);
        },
        error => {
          console.log('请求失败了',error.message);
        }
      )
    }
  },
};
</script>
