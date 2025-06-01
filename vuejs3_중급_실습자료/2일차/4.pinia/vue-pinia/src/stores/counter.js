import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore(
  "counter",
  () => {
    const count = ref(0); // reactive()로 배열이나 객체 생성 가능.

    const counterMessage = computed(() =>
      count.value > 100 ? "100을 넘었습니다." : "100 이전입니다."
    );

    const increment = () => {
      console.log("indcrement call!!!");
      count.value++;
    };

    return { count, counterMessage, increment };
  },
  { persist: true }
);
