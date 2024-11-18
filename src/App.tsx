import React from "react"
import { Todos } from "./components/Todos"

const mockTodos = [
  {
    id: 1,
    title: "Learn React",
    completed: true,
  },
  {
    id: 2,
    title: "Learn TypeScript",
    completed: false,
  },
  {
    id: 3,
    title: "Learn JSON",
    completed: false,
  },
]

const App: React.FC = (): JSX.Element => {
  const [todos, setTodos] = React.useState(mockTodos)

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos
        onRemoveTodo={handleRemove}
        todos={todos}
      />
    </div>
  )
}

export default App 