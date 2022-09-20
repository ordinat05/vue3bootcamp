<template>
  <div class="container-sm">
    <h3 class="mb-2">{{ counter }}</h3>
    <button @click="counter--" class="red sm">-</button>
    <button @click="counter++" class="green sm sebom_mr2">+</button>
  </div>
</template>
<!-- Bu Componentin çalışabilmesi için, Benim bu Vue Instance ını dış dünyaya açabilmem lazım. -->
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
};
</script>
