<template>
  <div class="App">
    <h2>Single User Page</h2>
    <p>The user name is : {{ userName }}</p>
    <p>The user id is : {{ id }}</p>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  props: ['id', 'userName']
  
});
</script>

<style scoped>
</style>
