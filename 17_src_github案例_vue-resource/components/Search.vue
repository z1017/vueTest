<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyWord"
        />&nbsp;<button @click="searchUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      // 请求前更新 List 的数据
      this.$bus.$emit("updataListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          console.log("请求成功了");
          // 请求成功后更新 List 的数据
          this.$bus.$emit("updataListData", {
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          // 请求失败后更新List的数据
          this.$bus.$emit("updataListData", {
            isLoading: false,
            errMsg: error.message,
            users: [],
          });
        }
      );
    },
  },
};
</script>
