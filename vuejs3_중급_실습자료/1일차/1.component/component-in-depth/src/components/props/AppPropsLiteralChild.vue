<script setup>
import { computed } from "vue";

const props = defineProps({
    fruitId: String,
    fruitName: String,
    isChecked: Boolean
});

const imgSrc = computed(() => {
    console.log("이미지호출출")
    return new URL(`../../assets/${props.fruitId}.png`, import.meta.url).href;
});
</script>

<template>
    <div class="div-fruit">
        <input type="checkbox" :id="fruitId" :checked="isChecked">
        <label :for="fruitId">
            <img :src="imgSrc" class="img-fruit" :alt="fruitName">
            {{ fruitName }}
        </label>
    </div>
</template>

<style scoped>
.div-fruit {
    margin-bottom: 5px;
    font-size: large;
}

.img-fruit {
    width: 20px;
    margin: 0 1px 0 5px;
}
div{
    color: red;
}
</style>