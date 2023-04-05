<template>
  <div>
    <ul>
        <li>消息编号：{{$route.query.id}}</li>
        <li>消息标题：{{$route.query.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Detail",
  mounted() {
    // this.$route：输出该组件相关的路由配置信息
    console.log(this.$route);
  },
};
</script>