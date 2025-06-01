<script setup>
defineProps({ article: Object });
</script>

<template>
  <tr class="text-center">
    <th scope="row">{{ article.articleNo }}</th>
    <td class="text-start">
      <router-link class="link-dark" :to="{ name: 'article-view', params: { articleno: article.articleNo } }">
        {{ article.subject }}
      </router-link>
    </td>
    <td>{{ article.userName }}</td>
    <td>{{ article.hit }}</td>
    <td>{{ article.registerDate }}</td>
  </tr>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
