<template>
    <div id="app" class="container">
        <header>
            <h1>Todo App</h1>
        </header>

        <main>
            <TodoAdditionForm :todo-store="todoStore" />
        </main>
    </div>
</template>

<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import TodoAdditionForm from "./components/TodoAdditionForm.vue";
import { useTodoStore } from "./store/todo";

const todoStore = useTodoStore();
</script>

<style>
header h1 {
    width: 100%;
    text-align: center;
    font-size: medium;
}
</style>
