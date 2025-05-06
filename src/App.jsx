import React, { useEffect, useReducer, useRef, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
   
    default:
      return state;
  }
};

// Lazy initializer to get todos from localStorage before initial render
const init = () => {
  try {
    const storedTodos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(storedTodos);
    return Array.isArray(parsedTodos) ? parsedTodos : [];
  } catch (e) {
    console.error("Failed to load todos from localStorage", e);
    return [];
  }
}; // Initialize state with localStorage data

const App = () => {
  const [todo, setTodo] = useState(""); // State for input value
  const [todos, dispatch] = useReducer(reducer, [], init); // useReducer with lazy init

  const inputRef = useRef(null); // Ref for input field

  // Save todos to localStorage when they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // Save todos to localStorage
  }, [todos]);

  // Handle add todo
  const handleClick = (e) => {
    e.preventDefault();

    if (!todo.trim()) {
      alert("Please enter a task");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: todo.trim(),
      completed: false,
    };

    dispatch({ type: "ADD_TODO", payload: newTodo }); // Dispatch action to add todo 
    setTodo(""); // Clear input field

    inputRef.current.focus(); // Focus on input field
    inputRef.current.value = ""; // Clear input field
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id }); // Dispatch action to remove todo
  }

  return (
    <div>
      <TodoInput
        todo={todo} // Pass todo state to TodoInput
        setTodo={setTodo} // Pass setTodo to TodoInput
        handleClick={handleClick} // Pass handleClick to TodoInput
        inputRef={inputRef} // Pass inputRef to TodoInput
      />
      <TodoList todos={todos} removeTodo={removeTodo}/>
    </div>
  );
};

export default App;
