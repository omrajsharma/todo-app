import React from 'react'
import Todo from './Todo'

function TodoList({todos}) {
  return (
    <div>

      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
      
    </div>
  )
}

export default TodoList