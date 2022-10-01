<template>
  <div class="container">
    Hello VUEX
    <br />
    <br />
    <div>
      {{ $store.state.person }}
    </div>
    <br />
    <br />
    <div>
      {{ $store.state.theme }}
    </div>
    <br />
    <br />
    <div>
      {{ $store.state.permissions }}
    </div>
    <hr />
    <div>
      Store içindeki objenin/dizinin iterate edilmesi. Liste halinde
      <ul>
        <li v-for="permission in $store.state.permissions" :key="permission">
          {{ permission }}
        </li>
      </ul>
    </div>
    <hr />
    <div>
      Store içindeki userList in iterate edilmesi. Liste halinde
      <ul>
        <li v-for="user in $store.state.userList" :key="user">
          {{ user }}
        </li>
      </ul>
    </div>
    <hr />
    <div>
      {{ $store.state.fullName }}
      <button @click="changeName">Vuex Datasını Değiştir</button>
    </div>
    <hr />
    <div>yeni konu</div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {
    // console.log(this.$store.state.person);
    // console.log(this.$store.state.theme);
    // console.log(this.$store.state.permissions);
    // console.log(this.$store.state.itemList.filter((i) => i.type == "mobilya"));
    // console.log(this.$store.getters.woodItems);
    // console.log(this.$store.getters.electronical);
    console.log(this.$store.getters.activePerson);
  },
  methods: {
    changeName() {
      // this.$store.state.fullName = "dddddddddd";
      this.$store.state.fullName = new Date().getTime();
    },
  },
};
</script>
