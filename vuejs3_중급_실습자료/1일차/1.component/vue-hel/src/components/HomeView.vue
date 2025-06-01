<script setup>
import { ref } from 'vue'
const msg = ref('')
</script>

<template>
  <div>
    <input type="text" v-model="msg" />>
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped></style>
