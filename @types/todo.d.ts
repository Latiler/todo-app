/** Todo */
export type Todo = {
    /** todoの内容 */
    text: string;

    /** 完了フラグ。タスクが完了した場合は `true`。 */
    isCompleted: boolean;
};

export type TodoStoreType = {
    /** ID一覧 */
    idList: number[];

    /** 詳細 */
    details: {
        [id: number]: Todo;
    };
};
