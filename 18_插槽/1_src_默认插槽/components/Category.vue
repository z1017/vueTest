<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- <ul>
      <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
    </ul> -->
    <!-- 定义一个插槽 （等着组件的使用者填充内容）-->
    <slot></slot>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  props: ["title"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
img{
    width: 100%;
}

</style>