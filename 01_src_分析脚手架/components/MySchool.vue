<template lang="">
<!-- 组件的结构 -->
    <div>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
    export default {
    name:'School',
    data() {
        return {
            name:'尚硅谷',
            address:'北京'
        }
    },
    methods: {
        showName() {
            alert(this.name)
        }
    },
};
</script>

<style lang="">
/* 组件的样式 */
</style>