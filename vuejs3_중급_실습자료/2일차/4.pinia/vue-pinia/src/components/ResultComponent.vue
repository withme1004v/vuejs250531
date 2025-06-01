<script setup>
import { useCounterStore } from "@/stores/counter";
// import { storeToRefs } from "pinia";

const counterStore = useCounterStore();

// 반응성을 깨뜨리기 때문에 작동하지 않음.
const { count, counterMessage } = counterStore;
// storeToRefs()를 이용하여 디스트럭처링
// const { count, counterMessage } = storeToRefs(counterStore);
</script>

<template>
  <div>
    <h2>store count : {{ counterStore.count }}</h2>
    <h2>local count : {{ count }}</h2>
    <h2>store message : {{ counterStore.counterMessage }}</h2>
    <h2>local message : {{ counterMessage }}</h2>
  </div>
</template>
