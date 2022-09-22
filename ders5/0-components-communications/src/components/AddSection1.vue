<template>
  <button @click="$emit('new-item', new Date().getTime())">Set Data</button>
</template>
