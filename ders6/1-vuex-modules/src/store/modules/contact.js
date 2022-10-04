export default {
  namespaced: true,

  state: {
    contactName: "puresol",
    contactAdress: "Kanada",
    propertyList: [],
  },
  mutations: {
    setName(state, name) {
      state.contactName = name;
    },
  },
  getters: {
    _contactName: (state) => state.contactName,
    itemList: (state) => state.propertyList,
  },
};
