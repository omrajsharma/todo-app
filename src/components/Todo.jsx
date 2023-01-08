import React from 'react'
import './Todo.css'

function Todo({todo}) {
  return (
    <div className='todo-container'>
      <input type="checkbox"/>
      <p>{todo.text}</p>

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