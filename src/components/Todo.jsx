import React from 'react'
import './Todo.css'

function Todo({todo, toggleComplete, deleteTodo}) {
  return (
    <div className='todo-container'>
      <input 
      type="checkbox"
      checked={todo.isCompleted}       
      onChange={ () => toggleComplete(todo.id) }
      />
      
      <p
        style={todo.isCompleted ? {textDecoration: 'line-through', color: '#898989' } : {textDecoration: 'none'}}
      >{todo.text}</p>

      <div className='todo-time'>
        <p>
          {todo.time}
        </p>
        <p>
          {todo.date}
        </p>
      </div>

      <div className='todo-delete'>
        <button onClick={() => deleteTodo(todo.id)}>
          ❌
        </button>
      </div>
    </div>
  )
}

export default Todo