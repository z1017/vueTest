<template>
  <div>
    <h2>人员列表</h2>
    <h3 style="color:red">Count组件求和为{{sum}}</h3>
    <input
      type="text"
      placeholder="请输入名字"
      style="margin-right: 5px"
      v-model="name"
    />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
// import {mapState} from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personList; 
    },
    sum() {
      return this.$store.state.sum; 
    },
    // ...mapState(['personList'])
  },
  methods: {
    add() {
      const personObj = { id: nanoid, name: this.name ,};
      this.$store.commit("ADD_PERSON", personObj);
      this.name = "";
    },
  },
};
</script>
