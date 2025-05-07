import React from 'react'
import '../App.css'

const TodoInput = ({ todo, setTodo, handleClick, inputRef }) => {


  return (
    <div className='todo__div'>
        <input type="text" placeholder='Enter a task' ref={inputRef} value={todo.text} onChange={(e) => setTodo({...todo, text: e.target.value })} required />
        <input type="text" placeholder='Enter Description' value={todo.description} onChange={(e) => setTodo({...todo, description: e.target.value})} required />

        <button type="submit" onClick={handleClick}>Add Todo</button>
    </div>
  )
}

export default TodoInput