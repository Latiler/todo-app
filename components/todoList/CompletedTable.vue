<template>
    <div class="todo-table-wrapper">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>レ</th>
                    <th>タスク名</th>
                    <th>削除</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="id in todoStore?.completedIdList" :key="id">
                    <td>
                        <input class="form-check-input large-checkbox" type="checkbox" :checked="todoStore?.details?.[id]?.isCompleted ?? false" @change="handleCompletedToggle(id)" />
                    </td>

                    <td class="text-start text-decoration-line-through">{{ todoStore?.details?.[id]?.text ?? "" }}</td>

                    <td>
                        <button class="btn btn-outline-danger" @click="handleDelete(id)">削除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "~/store/todo";

const props = defineProps({
    todoStore: {
        type: Object as () => ReturnType<typeof useTodoStore>,
        default: () => ({}),
    },
});

/**
 * 「未完了」「完了済み」を切り替えるチェックボックスがクリックされた際の処理です。
 */
function handleCompletedToggle(id: number) {
    props.todoStore?.toggleCompleted(id);
}

/**
 * 削除ボタンが押された際の処理です。
 * 本当に削除するかを確認してから削除処理を行います。
 * @param id 削除するtodoのid
 */
function handleDelete(id: number) {
    const res = window.confirm(
        `以下の完了済みのTodoを削除します。\n
- ${props.todoStore.details[id].text}\n
よろしいですか？`
    );

    if (res !== true) {
        return;
    }
    props.todoStore?.removeTodo(id);
}
</script>