import Main from "@/views/Main";
import { createRouter, createWebHistory } from "vue-router";
import MyPlaylist from "@/views/MyPlaylist";
import SignIn from "@/views/SignIn";
import store from "@/store";

const routes = [
  {
    path: "/",
    component: Main,
    name: "Main",
  },
  {
    path: "/playlist",
    component: MyPlaylist,
    name: "MyPlaylist",
  },
  {
    path: "/signin",
    components: {
      signIn: SignIn,
    },
    name: "SignIn",
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
