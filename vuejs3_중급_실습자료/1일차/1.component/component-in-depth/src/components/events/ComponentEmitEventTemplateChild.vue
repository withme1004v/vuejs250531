<script setup>
import { ref } from "vue";

const greet = ref("");
</script>

<template>
    <div class="child">
        <h3>Child 영역입니다</h3>
        <div class="div-btn">
            <button @click="$emit('greetingEvent')">인사해요</button>
        </div>
        <div class="div-btn">
            <input type="text" v-model="greet">
            <button @click="$emit('greetingArgEvent', greet)">인사해요(인자전달)</button>
        </div>
    </div>
</template>

<style scoped>
.child {
    background-color: rgb(210, 236, 244);
    padding: 20px;
}

.div-btn {
    margin: 10px;
}
</style>