<template>
    <div>
        <!-- 未完了TODOテーブル -->
        <div v-if="todoStore.incompleteIdList.length > 0">
            <div class="w-100 text-center">
                <img src="~/assets/list-task.svg" alt="" width="20" height="20" />
                未完了 Todo
            </div>
            <IncompleteTable :todo-store="todoStore" />
        </div>
        <div v-else class="no-data rounded">未完了 Todo無し</div>


        <!-- 完了済みTODOテーブル -->
        <div v-if="todoStore.completedIdList.length > 0" class="mt-lg" >
            <div class="w-100 text-center">
                <img src="~/assets/check2-circle.svg" alt="" width="20" height="20" />
                完了済み Todo
            </div>
            <CompletedTable :todo-store="todoStore" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "~/store/todo";
import CompletedTable from "./todoList/CompletedTable.vue";
import IncompleteTable from "./todoList/IncompleteTable.vue";

defineProps({
    todoStore: {
        type: Object as () => ReturnType<typeof useTodoStore>,
        default: () => ({}),
    },
});
</script>

<style>
.todo-table-wrapper {
    display: flex;
    justify-content: center;
}

table.table {
    width: auto;

    & thead tr th {
        text-align: center;
        vertical-align: middle;
        background-color: var(--accent-color);
    }

    & tbody tr td {
        text-align: center;
        vertical-align: middle;
        background-color: var(--content-color);
    }

    & tbody tr:nth-of-type(2n) td {
        background-color: var(--side-bar-color);
    }

    & .large-checkbox {
        transform: scale(1.25);
    }
}

.no-data {
    width: 100%;
    height: 5em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--side-bar-color);
}

.mt-lg {
    margin-top: 5em;
}
</style>
