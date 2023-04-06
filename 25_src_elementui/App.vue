<template>
  <div>
    <button>原生的按钮</button>
    <input type="text" />
    <hr />
    <atguigu-row>
      <atguigu-button>默认按钮</atguigu-button>
      <atguigu-button type="primary">主要按钮</atguigu-button>
      <atguigu-button type="success">成功按钮</atguigu-button>
      <atguigu-button type="info">信息按钮</atguigu-button>
      <atguigu-button type="warning">警告按钮</atguigu-button>
      <atguigu-button type="danger">危险按钮</atguigu-button>
    </atguigu-row>
    
    <hr />
    <span class="demonstration">默认</span>
    <atguigu-date-picker type="date" placeholder="选择日期">
    </atguigu-date-picker>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>