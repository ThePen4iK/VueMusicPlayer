import Main from "@/views/Main";
import { createRouter, createWebHistory } from "vue-router";
import MyPlaylist from "@/views/MyPlaylist";
import SignIn from "@/views/SignIn";
import store from "@/store";
import Album from "../views/Album";
import MyTracks from "../views/MyTracks";

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
    path: "/album",
    component: Album,
    name: "Album",
  },
  {
    path: "/mytrack",
    component: MyTracks,
    name: "MyTracks",
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
