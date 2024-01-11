<template>
  <div class="App">
    <h1>Home Page</h1>
    <button @click="navigateUser">User</button>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "App",
  components: {},
  setup(){

    const router = useRouter();
    const navigateUser= ()=>{
      router.push('/user')
    }
    return {navigateUser}
  }
  
});
</script>

<style scoped>
</style>
