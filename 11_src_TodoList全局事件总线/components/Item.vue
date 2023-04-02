<template>
  <div>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @click="handleCheck(todo.id)"
        />
        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">
        删除
      </button>
    </li>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  // 声明接收 todo 对象
  props: ["todo"],

  methods: {
    handleCheck(id) {
      // 通知 App 组件将对应的 todo对象的 done 值取反
      // this.checkTodo(id);
      this.$bus.$emit("checkTodo", id);
    },
    // 删除
    handleDelete(id) {
      // confirm(): js自带的一个确定框，点击确认则返回true,取消返回false
      if (confirm("确定删除吗？")) {
        // this.deleteTodo(id)
        this.$bus.$emit("deleteTodo", id);
      }
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #999;
}
li:hover button {
  display: block;
}
</style>