import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let todoId = 0;

  const [todos, setTodos] = useState([]);

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  function addTodo() {
    const newTodo = {
      id: todoId,
      title: newTitle,
      description: newDescription,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    todoId++;

    setNewTitle("");
    setNewDescription("");
  }

  return (
    <>
      <div>
        <input
          id="new-title"
          value={newTitle}
          placeholder="Add a title"
          onChange={(e) => setNewTitle(e.target.value)}
          type="text"
          style={{ marginRight: 50, padding: 10 }}
        />
        <input
          id="new-description"
          value={newDescription}
          placeholder="Add a description"
          onChange={(e) => setNewDescription(e.target.value)}
          type="text"
          style={{ padding: 10 }}
        />
      </div>
      <div>
        <button onClick={addTodo} style={{ margin: 50 }}>
          Add New Todo
        </button>

        {todos.map((todo) => {
          return (
            <Todo
              title={todo.title}
              description={todo.description}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </div>
    </>
  );
}

function Todo(props) {
  let todos = props.todos;
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <button
        onClick={() => {
          const updatedTodos = todos.filter((todo) => todo.id !== todo.id);

          props.setTodos(updatedTodos);
        }}
      >
        Mark {props.title} As Done
      </button>
    </div>
  );
}

export default App;
