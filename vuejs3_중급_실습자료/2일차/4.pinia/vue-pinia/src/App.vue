<script setup>
import ResultComponent from "./components/ResultComponent.vue";
import SubjectComponent from "./components/SubjectComponent.vue";
</script>

<template>
  <div>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <h1>좋아하는 과일 선택</h1>
    <SubjectComponent title="딸기" />
    <SubjectComponent title="복숭아" />
    <ResultComponent />
  </div>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
