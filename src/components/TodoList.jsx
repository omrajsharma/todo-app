import React from 'react'
import Todo from './Todo'

function TodoList({todos, toggleComplete, deleteTodo}) {
  return (
    <div>

      {todos.map((todo, index) => (
        <Todo 
        key={index} 
        todo={todo} 
        toggleComplete={toggleComplete} 
        deleteTodo={deleteTodo}
        />
      ))}
      
    </div>
  )
}

export default TodoList