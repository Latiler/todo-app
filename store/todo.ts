import { defineStore } from "pinia";
import type { TodoStoreType } from "~/@types/todo";

export const useTodoStore = defineStore("todo", {
    state: () =>
        ({
            idList: [],
            details: {},
        } as TodoStoreType),
    getters: {
        /** 未完了のTodoのid一覧 */
        incompleteIdList(state) {
            return state.idList.filter((id) => state.details[id]?.isCompleted === false);
        },

        /** 完了済みのTodoのid一覧 */
        completedIdList(state) {
            return state.idList.filter((id) => state.details[id]?.isCompleted === true);
        },
    },
    actions: {
        /**
         * 新しくtodoを追加します。
         * @param text 追加するtodoの内容
         */
        addTodo(text: string) {
            const nextId = (this.idList.at(-1) ?? -1) + 1;

            this.idList.push(nextId);
            this.details[nextId] = {
                text,
                isCompleted: false,
            };
        },

        /**
         * 指定されたidに対応するtodoを削除します。
         * @param todoId 削除したいtodoのid
         */
        removeTodo(todoId: number) {
            this.idList = this.idList.filter((id) => id !== todoId);
            delete this.details[todoId];
        },

        /**
         * 指定されたtodoの、タスク完了・未完了を切り替えます。
         * @param todoId id
         * @param options オプション
         * @param options.completed 現在の状態にかかわらず、
         * 必ず「完了」にする場合は `true`、必ず「未完了」にする場合は `false`。
         * @returns
         */
        toggleCompleted(todoId: number, options?: { completed?: boolean }) {
            if (typeof this.details?.[todoId]?.isCompleted === "undefined") {
                return;
            }
            const newCompleted = options?.completed ?? !this.details[todoId].isCompleted;

            this.details[todoId].isCompleted = newCompleted;
        },
    },
});
