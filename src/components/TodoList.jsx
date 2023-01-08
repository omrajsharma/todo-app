import React from 'react'
import Todo from './Todo'

function TodoList({todos, toggleComplete}) {
  return (
    <div>

      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} toggleComplete={toggleComplete}  />
      ))}
      
    </div>
  )
}

export default TodoList