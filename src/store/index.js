import { createStore } from "vuex";
import axios from "@/api";

export default createStore({
  state: {
    isAuth: false,
    user: null,
  },
  mutations: {
    setAuth(state, payload) {
      state.isAuth = payload;
    },
    setUserData(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async signUp({ dispatch }, { email, username, password }) {
      const response = await axios.post("/auth/users/", {
        email,
        username,
        password,
      })

      return response?.data
    },
    async signIn({ commit }, { username, password }) {
      const response = await axios.post("/auth/token/login/", {
        username,
        password,
      });
      localStorage.setItem("token", response?.data?.auth_token);
      commit("setAuth", true);
    },
    async getUserData({ commit }) {
      const response = await axios.get("/auth/users/me/");
      commit("setUserData", response.data);
    },
  },
});
