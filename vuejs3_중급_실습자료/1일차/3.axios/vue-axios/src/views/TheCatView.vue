<script setup>
import {ref} from 'vue';
import axios from 'axios';

const cats= ref([]);
const randomCatImg = () => {
axios.get("https://api.thecatapi.com/v1/images/search").then(({data})=>{
console.log(data[0]);
cats.value.push(data[0])
})
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-12">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="sky">귀여운 냥냥이</mark>
        </h2>
      </div>
      <div class="col-lg-12 text-center mb-3">
        <button type="button" class="btn btn-outline-primary" @click="randomCatImg">랜덤 고양이 사진 얻기</button>
      </div>
      <div class="row">
        <div class="card m-1 p-2" style="width: 18rem;" v-for="cat in cats" :key="cat.id">
          <img :src="cat.url" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">{{ cat.id }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
mark.sky {
  background: linear-gradient(to top, #54fff9 20%, transparent 30%);
}
</style>
