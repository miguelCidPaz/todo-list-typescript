import { Todo } from "../types/TodoType"

export interface ITodoInput {
    upText: (text: String | undefined) => void,
    removeTodos: () => void
}

export interface ITodoItem { 
    todo: Todo, 
    changeActivate: (activate: boolean, id: number) => void 
}