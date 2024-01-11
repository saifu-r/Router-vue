<template>
  <div class="App">
    <h2>Users Page</h2>
    

    <p v-for="user in users" :key="user.id">
      <router-link :to="{
        name: 'UserSingle',
        params:{ id: user.id, userName: user.name}
      }">
      ({{ user.id }}) {{ user.name }}
      </router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup(){
    const users= ref([
      {id: 1, name: 'John'},
      {id: 2, name: 'Jack'},
      {id: 3, name: 'Mark'},
      {id: 4, name: 'Marry'},
    ])
    

    return {users}
  },
  
});
</script>

<style scoped>
</style>

