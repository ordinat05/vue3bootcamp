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
      { id: 3, title: "TV", type: "elektronik" },
      { id: 4, title: "Monitor", type: "elektronik" },
      { id: 5, title: "Bardak", type: "plastik" },
    ],
  },
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
