<template>
  <div>
    <Student name="lily" :age="19" sex="女"/>
  </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: { Student },
};
</script>

