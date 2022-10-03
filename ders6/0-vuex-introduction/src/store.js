import { createStore } from "vuex";

const store = createStore({
  state: {
    person: {
      name: "Gokhan",
      lname: "Kandemir",
      age: 33,
      address: {},
      password: 123123,
      tc: 1111,
    },
    theme: "dark",
    fullName: "Defne Kandemir",
    permissions: [1, 2, 3, 4, 5],
    userList: [
      "Gokhan",
      "Tayfun",
      "İlker",
      "Ramazan",
      "Defne",
      "Kamil",
      "Cemil",
    ],
    itemList: [
      { id: 1, title: "Masa", type: "mobilya" },
      { id: 2, title: "Sandalye", type: "mobilya" },
      // { id: 6, title: "ddd", type: "mobilya" },
      // { id: 7, title: "eeee", type: "mobilya" },
      { id: 3, title: "TV", type: "elektronik" },
      { id: 4, title: "Monitor", type: "elektronik" },
      { id: 5, title: "Bardak", type: "plastik" },
    ],
  },
  mutations: {
    newItem(state, item) {
      state.itemList.push(item);
    },
  },
  // actions: {
  //   newItem(context, item) {
  //     console.log("item :>>", item);
  //     setTimeout(() => {
  //       // context.state  STATE deki bir bilgiye erişebilirim.
  //       // context.dispatch Başka bir Action mu çalıştıracağım.
  //       // context.commit Mutation a göndereceğim.
  //       context.commit("newItem", item);
  //     }, 1000);
  //   },
  // },
  // 🔺 1. Yöntem 🏮🏮🏮Context den commit i kullanmak veya state, dispatch, commit seçmek
  actions: {
    newItem({ commit }, item) {
      console.log("item :>>", item);
      setTimeout(() => {
        // context.state  STATE deki bir bilgiye erişebilirim.
        // context.dispatch Başka bir Action mu çalıştıracağım.
        // context.commit Mutation a göndereceğim.
        commit("newItem", item);
      }, 1000);
    },
  },
  // 🔺 2. Yöntem 🏮🏮🏮Contextdeki sadece commiti kullanmak. Yalnız yazılıyorken {commit} bir obje olduğu için {} arasında yazılıyor . Unutma.

  getters: {
    woodItems: (state) => state.itemList.filter((i) => i.type == "mobilya"),
    electronical: (state) =>
      state.itemList.filter((i) => i.type == "elektronik"),
    // activePerson(state) {
    //   const person = state.person;
    // },

    activePerson(state) {
      const person = {
        ...state.person,
      };
      delete person.password;
      delete person.tc;
      return person;
    },
  },
});

export default store;
