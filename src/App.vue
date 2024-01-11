<template>
  <div class="App">
    <header>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <!-- <router-link to="/">Home</router-link><br> -----same -->

      <router-link :to="{ name: 'Users' }">Users</router-link>
    </header>
    <p style="gap: 10px">
      <button @click="stepTo(-1)">Go back 1 step</button>
      <button @click="stepTo(1)">Go forward 1 step</button>

      <button @click="pushTo('/user/1/John')">Redirect to "/user/1"</button>
    </p>

    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const router = useRouter();

    function stepTo(step: number) {
      router.go(step);
    }
    function pushTo(route: string) {
      router.push(route);
    }

    return {
      stepTo,
      pushTo,
    };
  },
});
</script>

<style>
body{
  margin: 0;
}

header{
 
  background-color: grey;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
a{
  text-decoration: none;
  color: black;
  border: 0.1rem solid black;
  padding: 5px;
  background: white;
}

a:active,
a.router-link-active{
  color: white;
  border: 0.1rem solid black;
  padding: 5px;
  background: black;
}


</style>
