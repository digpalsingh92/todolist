import React, { act, useEffect, useReducer, useRef, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload]; //
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload); // Remove todo by id
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      ); // check the todo via todo. id and then toggle the completed field.
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              text: action.payload.text,
              description: action.payload.description,
            }
          : todo
      );
    default:
      return state;
  }
};

// Lazy initializer to get todos from localStorage before initial render
const init = () => {
  try {
    const storedTodos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(storedTodos); // Parse the JSON string into an object
    return Array.isArray(parsedTodos) ? parsedTodos : []; // Ensure it's an array
  } catch (e) {
    console.error("Failed to load todos from localStorage", e);
    return [];
  }
}; // Initialize state with localStorage data

const App = () => {
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [todo, setTodo] = useState({
    text: "",
    description: "",
  }); // State for input value
  const [todos, dispatch] = useReducer(reducer, [], init); // useReducer with lazy init

  const inputRef = useRef(null); // Ref for input field

  // Save todos to localStorage when they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // Save todos to localStorage
  }, [todos]);

  // Handle add todo
  const handleClick = (e) => {
    e.preventDefault();

    if (!todo.text.trim()) {
      alert("Please enter a task");
      return;
    }

    if (editingTodoId !== null) {
      dispatch({
        type: "UPDATE_TODO",
        payload: {
          id: editingTodoId,
          text: todo.text.trim(),
          description: todo.description,
        },
      }); // Dispatch action to update todo
      setEditingTodoId(null); // Reset editingTodoId
    } else {
      const newTodo = {
        id: Date.now(),
        text: todo.text.trim(),
        description: todo.description,
        completed: false,
        createdAt: new Date().toLocaleString(), // Add createdAt property which is the current date and time
      };

      dispatch({ type: "ADD_TODO", payload: newTodo }); // Dispatch action to add todo
    }
    setTodo({
      text: "",
      description: "",
    }); // Clear input field

    inputRef.current.focus(); // Focus on input field
    inputRef.current.value = ""; // Clear input field
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id }); // Dispatch action to remove todo
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  return (
    <div>
      <TodoInput
        todo={todo} // Pass todo state to TodoInput
        setTodo={setTodo} // Pass setTodo to TodoInput
        handleClick={handleClick} // Pass handleClick to TodoInput
        inputRef={inputRef} // Pass inputRef to TodoInput
        editingTodoId={editingTodoId}
      />
      <TodoList
        todo={todo} // Pass todo state to TodoInput
        todos={todos} // Pass todos state to TodoList
        removeTodo={removeTodo} // Pass removeTodo to TodoList
        toggleTodo={toggleTodo}
        setTodo={setTodo}
        setEditingTodoId={setEditingTodoId} // Pass toggleTodo to TodoList
      />
    </div>
  );
};

export default App;
