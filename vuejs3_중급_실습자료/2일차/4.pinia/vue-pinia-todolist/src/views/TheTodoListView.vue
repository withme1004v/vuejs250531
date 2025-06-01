<script setup>
import TodoHeader from "@/components/todo/TodoHeader.vue";
import TodoInput from "@/components/todo/TodoInput.vue";
import TodoList from "@/components/todo/TodoList.vue";
</script>

<template>
  <div class="container text-center mt-3">
    <div class="alert alert-warning" role="alert">오늘의 할일</div>
    <div class="row">
      <div class="col">
        <TodoHeader />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <TodoInput />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <TodoList />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
