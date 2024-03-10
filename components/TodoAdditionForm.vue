<template>
    <div id="todo-addition-form-div">
        <div>新規 Todo</div>

        <div class="todo-input-div">
            <input v-model="todoText" class="form-control" @keypress="handleKeyPress" autofocus />

            <button class="btn btn-primary" @click="handleTodoAddition">追加</button>
        </div>
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
 * タスク内容入力欄にて、キーが押された際の処理。
 * エンターキーであれば、追加ボタンと同等の処理をします。
 */
function handleKeyPress(ev: KeyboardEvent) {
    if (ev.key !== "Enter") {
        return;
    }
    handleTodoAddition();
}

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
#todo-addition-form-div {
    max-width: 400px;
}

.todo-input-div {
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 0.5em;
}
</style>
