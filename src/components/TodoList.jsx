import React from 'react';

const TodoList = ({ todos, removeTodo }) => {
  if (todos.length === 0) {
    return <p>No tasks yet. Add some!</p>;
  }

  return (
    <div className='todo__list'>
      <h2>All Todos</h2>
      {todos.length > 0 ? (<ul>
        {todos.map((todo) => (
            <div className='todo__item' key={todo.id}>
          <li>{todo.text}</li>
          <button onClick={() => removeTodo(todo.id)}>X</button>
          </div>
        ))}
      </ul>) : (
        <p>No tasks yet. Add some!</p>
      )}
      
    </div>
  );
};

export default TodoList;
