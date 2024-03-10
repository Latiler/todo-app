<template>
    <div class="todo-input-div">
        <input v-model="todoText" class="form-control" />

        <button class="btn btn-primary" @click="handleTodoAddition">追加</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "~/store/todo";

const props = defineProps({
    todoStore: {
        type: Object as () => ReturnType<typeof useTodoStore>,
        default: () => ({}),
    },
});

const todoText = ref("");

/**
 * 新しくtodoを追加します。
 */
function handleTodoAddition() {
    if (todoText.value === "") {
        return;
    }

    props.todoStore?.addTodo(todoText.value);
    todoText.value = "";
}
</script>

<style>
.todo-input-div {
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 0.5em;
}
</style>
