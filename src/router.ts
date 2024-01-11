import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./components/views/HomeView.vue";
import UsersView from "./components/views/UsersView.vue";
import UsersSingleView from "./components/views/UsersSingleView.vue";
import NotFound from "./components/navigations/NotFound.vue";
import HomeFooter from "./components/footers/HomeFooter.vue";
import UsersFooter from "./components/footers/UsersFooter.vue";


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
      components: {default: HomeView, footer: HomeFooter}
    },
    {
      path: "/user",
      name: "Users",
      components: {default: UsersView, footer: UsersFooter},
      children: [
        {path: ":id/:userName" , name: "UserSingle", props: true, component: UsersSingleView}
        
      ]
    },
    // {
    //   path: "/user/:id",
    //   name: "UserSingle",
    //   props: true,
    //   component: UsersSingleView,
    // },
    {
      path: "/:notFound(.*)",
      name: "NotFound",
      props: true,
      component: NotFound,
    },
  ],
});

export default router;