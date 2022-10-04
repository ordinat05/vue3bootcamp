import { createStore } from "vuex";
import contact from "./modules/contact";
import taskManager from "./modules/taskManager";

const store = createStore({
  //   namespaced: true,
  state: {
    mainName: "kablosuzkedi",
  },
  modules: {
    // musteri: cemil,
    musteri: contact,
    taskManager: taskManager,
  },
});

export default store;
