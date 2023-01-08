import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([]);

  // AddTodo - function that takes a todo string and adds it to the todos array
  function addTodo(todo) {
    if( todo.length === 0 ) {
      alert('Please enter a todo');
      return;
    }

    let todoObject = {
      id: Math.floor(Math.random() * 100000),
      text: todo,
      isCompleted: false,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    }

    setTodos([...todos, todoObject]);
  }

  // DeleteTodo - function that takes an id and deletes the todo with that id

  // ToggleComplete - function that takes an id and toggles the isCompleted property of the todo with that id
  function toggleComplete(id) {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo;
    }))
  }
  
  return (
    <div className='container'>
      <div className="inner-container">
        <Header />
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} />
      </div>
    </div>
  )
}

export default App
