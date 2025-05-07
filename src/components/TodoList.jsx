import React from "react";

const TodoList = ({todo, todos, removeTodo, toggleTodo }) => {
  if (todos.length === 0) {
    return <p>No tasks yet. Add some!</p>;
  }
  console.log();
  // background-color: #f0f0f0;

  return (
    <div className="todo__list">
      <h2>All Todos</h2>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <div className="todo__item"
            style={{
              backgroundColor: todo.completed ?  "#8ac815":"#f0f0f0"
            }}
            key={todo.id}>
              <span>{todo.text}</span>
              <p>{todo.description}</p>
              <div className="todoButton__div">
                {todo.completed == false ? (<button
                  style={{ fontSize: "15px" }}
                  onClick={() => toggleTodo(todo.id)}
                >
                  Mark as Completed
                </button>) : (<span></span>)}
                <button
                  style={{ fontSize: "25px" }}
                  onClick={() => removeTodo(todo.id)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p>No tasks yet. Add some!</p>
      )}
    </div>
  );
};

export default TodoList;
