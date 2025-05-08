import React from "react";

const TodoList = ({ todos, removeTodo, toggleTodo, setEditingTodoId, setTodo }) => {
  return (
    <div className="todo__list">
      <h2 style={{color:'white'}}>All Todos</h2>
      {todos.length > 0 ? (
        <div className="todoList__mainDiv">
          {todos.map((todo) => (
            <div className="todo__item"
            style={{
              backgroundColor: todo.completed ?  "#8ac815":"#f0f0f0"
            }}
            key={todo.id}>
              <div className="todoList__div">
              <h2>{todo.text}</h2>
              <span style={{width: "100%", border: "1px solid grey"}}></span>
              <p>{todo.description}</p>
              <p style={{ fontSize: '12px', color: '#666' }}>Created At: {todo.createdAt}</p>
              </div>
              <div className="todoButton__div">
             {todo.completed === false ? ( <button
                  style={{borderRadius:'5px', border: '2px solid grey'}}
                  onClick={() => {
                    setTodo({
                      text: todo.text,
                      description: todo.description,
                    }); // Set the todo state to the todo being edited
                    setEditingTodoId(todo.id); // Set the editingTodoId to the id of the todo being edited
                  }}
                >
                  Edit
                </button>):( <button style={{display: 'none'}}>Edit</button>)}
                {todo.completed == false ? (<button
                  style={{border:"2px solid green", color:'green', borderRadius:"5px" }}
                  onClick={() => toggleTodo(todo.id)}
                >
                 Done
                </button>) : (<button style={{display:'none' }}>Done</button>)}
                <button
                  style={{borderRadius:'5px', color:'red', border:'2px solid red' }}
                  onClick={() => removeTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{color:'white'}}>No tasks yet. Add some!</p>
      )}
    </div>
  );
};

export default TodoList;
