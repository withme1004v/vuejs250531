<script setup>
import { ref } from "vue";
import ComponentEmitEventScriptSetupChild from "./ComponentEmitEventScriptSetupChild.vue";

defineProps({
    viewTitle: String
});

const message = ref("");

const greet = () => {
    message.value = "지금 이 순간도 너의 성공 이야기의 한 페이지야~";
};

const greetArg = (greet) => {
    message.value = greet;
};
</script>

<template>
    <div>
        <h1>{{ viewTitle }}</h1>
        <ComponentEmitEventScriptSetupChild v-on:greeting-event="greet" @greeting-arg-event="greetArg" />
        <h3>{{ message }}</h3>
    </div>
</template>

<style scoped></style>