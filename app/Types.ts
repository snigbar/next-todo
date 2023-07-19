
export type ToDo = {
    id: string
    todo: string
    completed: boolean
}

export type TodoContextType = {
    todos: ToDo[]
    handleAddToDo: (type:string) => void
    toggleCompleted: (type:string) => void
    addEdit: (data:string, id:string) => void
}