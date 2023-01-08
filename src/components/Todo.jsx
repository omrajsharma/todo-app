import React from 'react'
import './Todo.css'

function Todo({todo, toggleComplete}) {
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
    </div>
  )
}

export default Todo