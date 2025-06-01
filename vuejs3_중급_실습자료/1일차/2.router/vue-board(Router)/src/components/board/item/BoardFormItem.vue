<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const props = defineProps({ type: String });

const isUseId = ref(false);

const article = ref({
  articleNo: 0,
  subject: "",
  content: "",
  userId: "",
  userName: "",
  hit: 0,
  registerDate: "",
});

if (props.type === "modify") {
  console.log(route.params.articleno + "번글 수정하기위해 얻어오자!!");
  article.value = {
    articleNo: 100,
    subject: "안녕하세요 뷰테스트 중입니다.",
    content:
      "뷰테스트 중입니다. 컴포넌트 연습하고 있으며, <br>앞으로 props와 custom event를 처리 할 예정입니다!!!",
    userId: "hissam",
    userName: "하이쌤",
    hit: 123,
    registerDate: "31.01.01",
  };
  isUseId.value = true;
}

const subjectErrMsg = ref("");
const contentErrMsg = ref("");
watch(
  () => article.value.subject,
  (value) => {
    let len = value.length;
    if (len == 0 || len > 30) {
      subjectErrMsg.value = "제목을 확인해 주세요!!!";
    } else subjectErrMsg.value = "";
  },
  { immediate: true }
);
watch(
  () => article.value.content,
  (value) => {
    let len = value.length;
    if (len == 0 || len > 500) {
      contentErrMsg.value = "내용을 확인해 주세요!!!";
    } else contentErrMsg.value = "";
  },
  { immediate: true }
);

// watchEffect(() => {
//   console.log("watchEffect call article >>> ", article.value);
//   let len1 = article.value.subject.length;
//   console.log("제목 len :: " + len1);
//   if (len1 == 0 || len1 > 30) {
//     subjectErrMsg.value = "제목을 확인해 주세요!!!";
//   }
//   let len2 = article.value.subject.length;
//   console.log("내용 len :: " + len2);
//   if (len2 == 0 || len2 > 500) {
//     contentErrMsg.value = "제목을 확인해 주세요!!!";
//   }
//   console.log(subjectErrMsg.value + "    " + contentErrMsg.value);
// });

function onSubmit() {
  // event.preventDefault();

  if (subjectErrMsg.value) {
    alert(subjectErrMsg.value);
  } else if (contentErrMsg.value) {
    alert(contentErrMsg.value);
  } else {
    props.type === "regist" ? writeArticle() : updateArticle();
  }
}

function writeArticle() {
  console.log("글등록하자!!", article.value);
}

function updateArticle() {
  console.log("글수정하자!!", article.value);
}

const moveList = () => {
  router.push({ name: 'article-list' });
};
</script>

<template>
  <form @submit.prevent="onSubmit" method="POST">
    <div class="mb-3">
      <label for="userid" class="form-label">작성자 ID : </label>
      <input type="text" class="form-control" v-model="article.userId" :disabled="isUseId" placeholder="작성자ID..." />
    </div>
    <div class="mb-3">
      <label for="subject" class="form-label">제목 : </label>
      <input type="text" class="form-control" v-model="article.subject" placeholder="제목..." />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용 : </label>
      <textarea class="form-control" v-model="article.content" rows="10"></textarea>
    </div>
    <div class="col-auto text-center">
      <button type="submit" class="btn btn-outline-primary mb-3" v-if="type === 'regist'">
        글작성
      </button>
      <button type="submit" class="btn btn-outline-success mb-3" v-else>글수정</button>
      <button type="button" class="btn btn-outline-danger mb-3 ms-1" @click="moveList">목록으로이동...</button>
    </div>
  </form>
</template>

<style scoped></style>
