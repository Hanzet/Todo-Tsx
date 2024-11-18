// Archivo de declaraciones types."d".ts

export interface Todo {
    id: string
    title: string
    completed: boolean
}

export type ListOfTodos = Todo[]