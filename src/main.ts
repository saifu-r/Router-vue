import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./components/views/HomeView.vue";
import UsersView from "./components/views/UsersView.vue";
import UsersSingleView from "./components/views/UsersSingleView.vue";
import NotFound from "./components/navigations/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      // component: ()=> import('./views/HomeView.vue')
      redirect: "/home",
    },
    {
      path: "/home",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/user",
      name: "Users",
      component: UsersView,
    },
    {
      path: "/user/:id",
      name: "UserSingle",
      props: true,
      component: UsersSingleView,
    },
    {
      path: "/:notFound(.*)",
      name: "NotFound",
      props: true,
      component: NotFound,
    },
  ],
});

const app = createApp(App);
app.use(router);

app.mount("#app");
