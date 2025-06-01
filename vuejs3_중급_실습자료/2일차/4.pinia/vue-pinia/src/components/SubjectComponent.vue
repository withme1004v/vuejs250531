<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";

defineProps({ title: String });

const count = ref(0);

const counterStore = useCounterStore();
// increment 액션은 그냥 구조화 가능
// const { increment } = counterStore;

function addCount() {
  count.value++;
  counterStore.increment(); // store에서 직접 접근
  // increment(); // 액션은 그냥 구조화 가능

  // fetch(url).then().then(); // 비동기 호출 가능
}

function addDoubleCount() {
  count.value *= 2;
  counterStore.count += count.value;
}

</script>

<template>
  <div>
    <button @click="addCount">{{ title }} - {{ count }}</button>
    <button @click="addDoubleCount">{{ title }} * 2 - {{ count }}</button>
  </div>
</template>
