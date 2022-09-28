<template>
  <div class="container">
    <div class="class d-flex justify-content-between align-items-center">
      <button class="red" @click="activeComponent = 'RedComp1'">
        Red Comp
      </button>
      <button class="green" @click="activeComponent = 'GreenComp1'">
        Green Comp
      </button>
      <button class="blue" @click="activeComponent = 'BlueComp1'">
        Blue Comp
      </button>
    </div>
    <RedComp1 v-if="activeComponent == 'RedComp1'" class="mb-2" />
    <GreenComp1 v-if="activeComponent == 'GreenComp1'" class="mb-2" />
    <BlueComp1 v-if="activeComponent == 'BlueComp1'" class="mb-2" />
  </div>
</template>

<script>
import RedComp1 from "@/components/RedComp1.vue";
import GreenComp1 from "@/components/GreenComp1.vue";
import BlueComp1 from "@/components/BlueComp1.vue";

export default {
  name: "App",
  components: {
    RedComp1,
    GreenComp1,
    BlueComp1,
  },
  data() {
    return {
      activeComponent: "RedComp1",
    };
  },
};
</script>
