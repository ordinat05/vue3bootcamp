import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    saltKey: "hashlemekicintext",
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    _isAuthenticated: (state) => state.user != null,
    _getCurrentUser(state) {
      const user = state.user;
      //   if (user != null && user.hasOwnProperty("password")) {
      //     delete user.password;
      //   }
      //   🔺 ya bu 1. yöntem obje mi diye bakarak
      delete user?.password;
      //   🔺 ya bu 2. yöntem optional chaining
      return user;
    },
    _saltKey: (state) => state.saltKey,
  },
});
