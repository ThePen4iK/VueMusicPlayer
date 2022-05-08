import Main from "@/views/Main";
import {createRouter, createWebHistory} from "vue-router";
import MyPlaylist from "@/views/MyPlaylist";
import SignIn from "@/views/SignIn";

const  routes = [
    {
        path: '/',
        component: Main,
        name: 'Main',
    },
    {
        path: '/playlist',
        component: MyPlaylist,
        name: 'MyPlaylist',
    },
    {
        path: '/signin',
        component: SignIn,
        name: 'SignIn',
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
export default router;