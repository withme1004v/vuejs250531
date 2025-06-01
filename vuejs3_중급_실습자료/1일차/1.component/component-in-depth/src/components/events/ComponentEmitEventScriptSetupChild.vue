<script setup>
import { ref } from "vue";

const greet = ref("");

// const emit = defineEmits(["greetingEvent", "greetingArgEvent"]);

// payload validation check
const emit = defineEmits({
    greetingEvent: null,
    greetingArgEvent: (payload) => {
        if (payload.trim().length != 0) {
            return true;
        } else {
            console.warn("인사말 입력 !!!");
            return false;
        }
    },
});

// const emit = defineEmits({
//     // 'submit' 이벤트는 객체 형태의 payload를 받아야 하며,
//     // payload가 { name: String, age: Number } 형식을 갖추었는지 검증함
//     submit: (payload) => {
//         return (
//             typeof payload === 'object' &&
//             typeof payload.name === 'string' &&
//             typeof payload.age === 'number'
//         );
//     }
// });

// // 이벤트 발생 예시
// function handleSubmit() {
//     const data = { name: 'Alice', age: 30 };
//     // 조건을 만족하지 못하면 emit 호출시 경고가 발생할 수 있음
//     emit('submit', data);
// }

const noArgGreet = () => {
    emit("greetingEvent");
};

const argGreet = () => {
    emit("greetingArgEvent", greet.value);
};
</script>

<template>
    <div class="child">

        <h3>Child 영역입니다</h3>
        <div class="div-btn">
            <button @click="noArgGreet">인사해요</button>
        </div>
        <div class="div-btn">
            <input type="text" v-model="greet">
            <button @click="argGreet">인사해요(인자전달)</button>
        </div>

    </div>
</template>

<style scoped>
.child {
    background-color: rgb(244, 210, 236);
    padding: 20px;
}

.div-btn {
    margin: 10px;
}
</style>