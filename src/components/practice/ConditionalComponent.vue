<template>
    <h1>conditional component</h1>

    <button @click="login">로 그 인</button>
    <div v-if="isLogined">안 녕 로 그 인 했 네 ?</div>
    <div v-else></div>

    <h1 class="shining">팀원목록조회</h1>
    <ul>
        <!-- v-for에서는 반드시 key값을 지정. key를 지정함으로서 각 요소마다의 고유식별 -->
        <li v-for="person in persons" :key="person.id" >{{ person.name }}</li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            isLogined: false,
            persons: [
                { id: 1, name: "요한" },
                { id: 2, name: "예나" },
                { id: 3, name: "창현" },
                { id: 4, name: "한아" },
                { id: 5, name: "정은" }
            ],
        }
    },
    methods: {
        login() {
            this.isLogined = true;
        }
    }
}
</script>

<style scoped>
.shining {
    animation: shine 1s infinite;
}

@keyframes shine {
    0% { color: black; }
    50% { color: gold; }
    100% { color: black; }
}
</style>
