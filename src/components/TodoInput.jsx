import React from 'react'
import '../App.css'

const TodoInput = ({ todo, setTodo, handleClick, inputRef, editingTodoId }) => {


  return (
    <div className='todo__div'>
        <input type="text" placeholder='Enter a task' ref={inputRef} value={todo.text} onChange={(e) => setTodo({...todo, text: e.target.value })} required />
        <textarea rows="1" cols="50" placeholder='Enter Description' value={todo.description} onChange={(e) => setTodo({...todo, description: e.target.value})} required />

        <button type="submit" onClick={handleClick}>{
          editingTodoId !== null ? "Update Todo": "Add Todo"
          }</button>
    </div>
  )
}

export default TodoInput