<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!--  @change 在输入框发生变化且失去焦点后触发 -->
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->

      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成 {{ doneTotal }}</span> / 全部 {{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ["todos", "checkAllTodo", "clearAllTodo"],
  computed: {
    // 总数
    total() {
      return this.todos.length;
    },

    // 已完成数
    doneTotal() {
      /* let i = 0;
      this.todos.forEach((todo) => {
        if(todo.done) i++
      });
      return i */

      // pre:上一次的值，current：当前的值
      /*  this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0);
      }, 0); */

      //此处使用 reduce 方法做条件统计
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    // 控制全选框
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      set(value) {
        this.checkAllTodo(value);
      },
    },
  },
  methods: {
    /* checkAll(e) {
      this.checkAllTodo(e.target.checked);
    }, */

    clearAll() {
      this.clearAllTodo()
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>