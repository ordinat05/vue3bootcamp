<template>
  <!-- <li class="d-flex justify-content-between align-items-center">
      <span> todoItem </span>
      <button class="sm red">Sil</button>
    </li> -->
  <!-- {{ item }} -->
  <li class="d-flex justify-content-between align-items-center">
    <span> {{ item.text }} </span>
    <button @click="$emit('delete-todo-item', item)" class="sm red">Sil</button>
  </li>
</template>
<script>
export default {
  props: ["item"],
  inject: ["deleteItem"],
};
</script>
