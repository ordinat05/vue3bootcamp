<template>
  <ul>
    <li v-for="(item, index) in agacElemanlari" :key="index">
      {{ item.id }} {{ item.title }} {{ item.type }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      agacElemanlari: "woodItems",
      cihazlar: "electronical",
      elaman: "activePerson",
    }),
  },
};
</script>
