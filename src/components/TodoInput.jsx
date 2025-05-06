import React from 'react'
import '../App.css'

const TodoInput = ({ todo, setTodo, handleClick, inputRef }) => {


  return (
    <div className='todo__div'>
        <input type="text" placeholder='Enter a task' ref={inputRef} value={todo} onChange={(e) => setTodo(e.target.value)} required />

        <button type="submit" onClick={handleClick}>Add Todo</button>
    </div>
  )
}

export default TodoInput