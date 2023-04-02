<template>
  <div>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @click="handleCheck(todo.id)"
        />
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handleBlur(todo, $event)"
          ref="inputTitle"
        />
      </label>

      <button class="btn btn-danger" @click="handleDelete(todo.id)">
        删除
      </button>
      <!-- 在事件中添加 $event 进行对标签元素的 dom 获取或者修改标签值的属性 -->
      <button
        v-show="!todo.isEdit"
        class="btn btn-edit"
        style="margin-right: 5px"
        @click="handleEdit(todo, $event)"
      >
        编辑
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
    // 勾选 or 取消勾选
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
    // 编辑
    handleEdit(todo) {
      // (todo.hasOwnProperty('isEdit') : 判断 todo 身上有没有 isEdit 属性
      // eslint-disable-next-line no-prototype-builtins
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        // 给 todo 追加一个属性,名为 isEdit, 值为 true
        console.log("没有 isEdit 属性");
        this.$set(todo, "isEdit", true);
      }
      /*  setTimeout(() => {
        this.$refs.inputTitle.focus()
      }, 200); */
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    // 失去焦点回调（真正执行修改逻辑）
    handleBlur(todo, e) {
      todo.isEdit = false;

      // 1.trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。
      // 2.trim() 方法不会改变原始字符串。 trim() 方法不适用于 null, undefined, Number 类型
      if (!e.target.value.trim()) return alert("输入不能为空");
      // event.target.value( ) 获取当前文本框的值
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
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