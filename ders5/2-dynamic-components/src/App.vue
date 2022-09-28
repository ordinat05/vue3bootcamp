<template>
  <div class="container">
    <div class="class d-flex justify-content-between align-items-center">
      <button class="red" @click="activeComponent = 'RedComp2'">
        Red Comp
      </button>
      <button class="green" @click="activeComponent = 'GreenComp2'">
        Green Comp
      </button>
      <button class="blue" @click="activeComponent = 'BlueComp2'">
        Blue Comp
      </button>
    </div>
    <!-- <RedComp2 v-if="activeComponent == 'RedComp2'" class="mb-2" />
    <GreenComp2 v-if="activeComponent == 'GreenComp2'" class="mb-2" />
    <BlueComp2 v-if="activeComponent == 'BlueComp2'" class="mb-2" /> -->
    {{ activeComponent }}
    <!-- <component :is="activeComponent" propMesaj="loolooll" /> -->
    <!-- 🔺 1. Yöntem Component in Prop u var ise... RedComp2 -->
    <!-- <component :is="activeComponent" propMesaj="loolooll">
      <h3 class="bg-green text-white">Green Component</h3>
    </component> -->
    <!-- 🔺 2. Yöntem Component <slot /> ile alım yapıyor.... GreenComp2 -->
    <keep-alive>
      <component :is="activeComponent" propMesaj="loolooll">
        <h3 class="bg-green text-white">Green Component</h3>
      </component>
    </keep-alive>
    <!-- 🔺 3. Yöntem <keep-alive> .. BlueComp2 -->
  </div>
</template>

<script>
import RedComp2 from "@/components/RedComp2.vue";
import GreenComp2 from "@/components/GreenComp2.vue";
import BlueComp2 from "@/components/BlueComp2.vue";

export default {
  name: "App",
  components: {
    RedComp2,
    GreenComp2,
    BlueComp2,
  },
  data() {
    return {
      activeComponent: "RedComp2",
    };
  },
};
</script>
