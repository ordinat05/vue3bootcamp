<template>
  <div class="container">
    <div class="class d-flex justify-content-between align-items-center">
      <button class="red" @click="activeComponent = 'RedComp'">Red Comp</button>
      <button class="green" @click="activeComponent = 'GreenComp'">
        Green Comp
      </button>
      <button class="blue" @click="activeComponent = 'BlueComp'">
        Blue Comp
      </button>
    </div>
    <RedComp v-if="activeComponent == 'RedComp'" class="mb-2" />
    <GreenComp v-if="activeComponent == 'GreenComp'" class="mb-2" />
    <BlueComp v-if="activeComponent == 'BlueComp'" class="mb-2" />
  </div>
</template>

<script>
import RedComp from "@/components/RedComp.vue";
import GreenComp from "@/components/GreenComp.vue";
import BlueComp from "@/components/BlueComp.vue";

export default {
  name: "App",
  components: {
    RedComp,
    GreenComp,
    BlueComp,
  },
  data() {
    return {
      activeComponent: "RedComp",
    };
  },
};
</script>
