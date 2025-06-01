<script setup>
// main.js에서 app.use(router);
// Vue Router 플러그인을 애플리케이션에 등록하면,
// <router-view>와 <router-link>와 같은 컴포넌트들이 전역(global)으로 자동 등록됨
// 그래서 각 컴포넌트 파일마다 이를 수동으로 import 할 필요가 없음
// import { RouterView } from "vue-router";

import TheHeadingNavbar from "./components/layout/TheHeadingNavbar.vue";
</script>

<template>
  <div>
    <TheHeadingNavbar />
    <!-- 현재 라우트에 맞는 Component가 렌더링 -->
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
