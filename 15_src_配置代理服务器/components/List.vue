<template>
  <div>
    <ul class="todo-main">
      <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__bounceInRight"
        leave-active-class="animate__backOutUp"
      >
        <Item v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
      </transition-group>
    </ul>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: "TodoList",
  components: { Item },
  props: ["todos"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>