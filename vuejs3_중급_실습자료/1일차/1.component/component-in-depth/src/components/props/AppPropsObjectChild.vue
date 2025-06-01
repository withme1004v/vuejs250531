<script setup>
import { computed } from "vue";

const props = defineProps({
    fruit: Object
});

const imgSrc = computed(() => {
    return new URL(`../../assets/${props.fruit.id}.png`, import.meta.url).href;
});
</script>

<template>
    <div class="div-fruit">
        <input type="checkbox" :id="fruit.id" :checked="fruit.checked">
        <label :for="fruit.id">
            <img :src="imgSrc" class="img-fruit" :alt="fruit.name">
            {{ fruit.name }}
        </label>
    </div>
</template>

<style scoped>
.div-fruit {
    color: darkgray;
    margin-bottom: 5px;
    font-size: large;
}

.img-fruit {
    width: 20px;
    margin: 0 1px 0 5px;
}
</style>