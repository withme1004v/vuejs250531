<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const posts = ref([]);
const loading = ref(false);
const error = ref(null);
const newPost = ref({ title: '', body: '' });
const editPost = ref(null);

const fetchPosts = async () => {
  loading.value = true;
  error.value = null;
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // posts.value = data;
    // 데이터가 많으므로 5개만 표시
    posts.value = data.slice(0, 5);
  } catch (err) {
    error.value = '게시물을 가져오는 데 실패했습니다.' + err;
  } finally {
    loading.value = false;
  }
};

const createPost = async () => {
  if (!newPost.value.title || !newPost.value.body) return;
  try {
    const { data } = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      { ...newPost.value, userId: 1 }
    );
    posts.value.unshift(data);
    newPost.value.title = '';
    newPost.value.body = '';
  } catch {
    alert('글 등록에 실패했습니다.');
  }
};

const deletePost = async (id) => {
  if (!confirm('정말 삭제하시겠습니까?')) return;
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    posts.value = posts.value.filter(p => p.id !== id);
  } catch {
    alert('삭제에 실패했습니다.');
  }
};

const startEdit = (post) => {
  editPost.value = { ...post };
};

const cancelEdit = () => {
  editPost.value = null;
};

const updatePost = async () => {
  try {
    const { data } = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${editPost.value.id}`,
      { title: editPost.value.title, body: editPost.value.body, userId: editPost.value.userId }
    );
    const idx = posts.value.findIndex(p => p.id === data.id);
    posts.value.splice(idx, 1, data);
    editPost.value = null;
  } catch {
    alert('수정에 실패했습니다.');
  }
};

const patchPost = async () => {
  try {
    const { data } = await axios.patch(
      `https://jsonplaceholder.typicode.com/posts/${editPost.value.id}`,
      { title: editPost.value.title, body: editPost.value.body }
    );
    const idx = posts.value.findIndex(p => p.id === data.id);
    posts.value.splice(idx, 1, data);
    editPost.value = null;
  } catch {
    alert('수정에 실패했습니다.');
  }
};

onMounted(fetchPosts);
</script>

<template>
  <div class="container mt-4">
    <h1 class="mb-3 text-center" style="line-height: 1.5;">
      <mark class="orange">
        <svg class="align-middle" xmlns="http://www.w3.org/2000/svg" width="28px" viewBox="0 0 384 512">
          <path
            d="M280 64l40 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l40 0 9.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64l9.6 0zM64 112c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16l-16 0 0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24-16 0zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
        </svg>
        Posts</mark>
    </h1>
    <button @click="fetchPosts" class="btn btn-outline-primary mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 512 512">
        <path
          d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
      </svg>
      다시 불러오기</button>

    <!-- 로딩 / 에러 -->
    <div v-if="loading" class="alert alert-info">Loading...</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <!-- 포스트 리스트 -->
    <ul v-if="!loading && !error" class="list-group mb-4">
      <li v-for="post in posts" :key="post.id" class="list-group-item">
        <div v-if="!editPost || editPost.id !== post.id">
          <h5>{{ post.title }}</h5>
          <p>{{ post.body }}</p>
          <button @click="startEdit(post)" class="btn btn-sm btn-outline-secondary me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="15px" viewBox="0 0 512 512">
              <path
                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM151.2 217.4c-4.6 4.2-7.2 10.1-7.2 16.4c0 12.3 10 22.3 22.3 22.3l41.7 0 0 96c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-96 41.7 0c12.3 0 22.3-10 22.3-22.3c0-6.2-2.6-12.1-7.2-16.4l-91-84c-3.8-3.5-8.7-5.4-13.9-5.4s-10.1 1.9-13.9 5.4l-91 84z" />
            </svg>
            수정</button>
          <button @click="deletePost(post.id)" class="btn btn-sm btn-outline-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="14px" viewBox="0 0 448 512">
              <path
                d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
            </svg>
            삭제</button>
        </div>
        <div v-else>
          <div class="mb-2">
            <input v-model="editPost.title" class="form-control" placeholder="제목" />
          </div>
          <div class="mb-2">
            <textarea v-model="editPost.body" class="form-control" rows="3" placeholder="본문"></textarea>
          </div>
          <button @click="updatePost" class="btn btn-sm btn-outline-success me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="13px" viewBox="0 0 384 512">
              <path
                d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" />
            </svg>
            저장 (PUT)</button>
          <button @click="patchPost" class="btn btn-sm btn-outline-warning me-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="13px" viewBox="0 0 384 512">
              <path
                d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" />
            </svg>
            저장 (PATCH)</button>
          <button @click="cancelEdit" class="btn btn-sm btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="15px" viewBox="0 0 512 512">
              <path
                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
            </svg>
            취소</button>
        </div>
      </li>
    </ul>

    <hr />

    <!-- 새 글 등록 폼 -->
    <h2 class="ms-5 mb-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 512 512">
        <path
          d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z" />
      </svg> 새 글 등록
    </h2>
    <form @submit.prevent="createPost" class="row g-3 mb-5">
      <div class="col-12">
        <input v-model="newPost.title" class="form-control" placeholder="제목을 입력하세요" required />
      </div>
      <div class="col-12">
        <textarea v-model="newPost.body" class="form-control" rows="3" placeholder="본문을 입력하세요" required></textarea>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-outline-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 448 512">
            <path
              d="M48 96l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-245.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l245.5 0c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9L320.8 84.7c-.3-.3-.5-.5-.8-.8L320 184c0 13.3-10.7 24-24 24l-192 0c-13.3 0-24-10.7-24-24L80 80 64 80c-8.8 0-16 7.2-16 16zm80-16l0 80 144 0 0-80L128 80zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
          </svg>
          등록</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
h1 svg {
  vertical-align: middle;
  position: relative;
  top: -0.15em;
}

mark.orange {
  background: linear-gradient(to top, orange 20%, transparent 30%);
}
</style>
