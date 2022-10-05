<template>
  <h1>HOME</h1>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quidem
    eum omnis quia, cumque maxime id quis autem optio iure obcaecati,
    consectetur, a necessitatibus aspernatur ab dolor accusamus esse natus?
  </p>
  <input type="text" @keydown.enter="goToDetails" />
</template>

<script>
export default {
  name: "HomeComp",
  props: {
    // msg: String
  },
  methods: {
    // goToDetails(e) {
    //   alert(e.target.value);
    //   this.$router.push(`/detay/${e.target.value}`);
    //   // 🔺 2. Yöntem
    //   // this.$router.push(`/detay/view/details/${e.target.value}`);
    // },
    goToDetails(e) {
      this.$router.push({
        name: "DetailPage",
        params: {
          userID: e.target.value,
        },
        query: {
          type: "DetailAuth",
          user: "tayfunerbilen",
        },
      });
      // 🔺 Yöntem Bunun içerisinde veri göndermek.
    },
  },
};
</script>
