<script setup>
import { reactive } from "vue";
import AppPropsObjectChild from "./AppPropsObjectChild.vue";
import AppPropsObjectChildDestructure from "./AppPropsObjectChildDestructure.vue";

// const props = defineProps(['viewTitle']); 

const props = defineProps({ viewTitle: String });

const fruits = reactive([
    { id: "f1", name: "사과", checked: true },
    { id: "f2", name: "파인애플", checked: false },
    { id: "f3", name: "포도", checked: false },
    { id: "f4", name: "딸기", checked: true },
    { id: "f5", name: "아보카도", checked: false },
    { id: "f6", name: "메론", checked: false },
    { id: "f7", name: "수박", checked: true }
]);
</script>

<template>
    <div>
        <h2>{{ viewTitle }}</h2>
        <div class="fruits">
            <AppPropsObjectChild v-for="fruit in fruits" :key="fruit.id" :fruit="fruit" />
            <hr>
            <h3>props 구조 분해 할당</h3>
            <AppPropsObjectChildDestructure v-for="fruit in fruits" :key="fruit.id" :fruit="fruit" />
        </div>
    </div>
</template>

<style scoped>
.fruits {
    display: inline-block;
    width: 250px;
    text-align: left;
}
</style>