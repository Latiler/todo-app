<template>
    <div id="app" class="container">
        <header>
            <h1>Todo App</h1>
        </header>

        <main>
            <div class="mt-3">
                <TodoAdditionForm :todo-store="todoStore" />
            </div>

            <div class="mt-3">
                <TodoList :todo-store="todoStore" />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import TodoAdditionForm from "./components/TodoAdditionForm.vue";
import TodoList from "./components/TodoList.vue";
import { useTodoStore } from "./store/todo";

const todoStore = useTodoStore();
</script>

<style>
:root {
    --back-color: #fdfdea;
    --header-color: #f8d343;
    --menu-bar-color: #ad9570;
    --side-bar-color: #d5ebf2;
    --content-color: #ffffff;
    --footer-color: #ad9570;
    --accent-color: #7abfd6;
    --border-color: #575757;
}

body {
    background-color: var(--back-color);

    & header {
        background-color: var(--header-color);
        display: flex;
        justify-content: center;
        align-items: center;

        min-height: 2em;

        & h1 {
            text-align: center;
            font-size: medium;
            margin-bottom: 0px;
        }
    }
}
</style>
