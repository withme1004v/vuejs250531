<script setup>
import { computed } from "vue";

const { fruit: f } = defineProps({
    fruit: Object
});

const imgSrc = computed(() => {
    console.log(f.id);
    return new URL(`../../assets/${f.id}.png`, import.meta.url).href;
});
</script>

<template>
    <div class="div-fruit">
        <input type="checkbox" :id="f.id" :checked="f.checked">
        <label :for="f.id">
            <img :src="imgSrc" class="img-fruit" :alt="f.name">
            {{ f.name }}
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