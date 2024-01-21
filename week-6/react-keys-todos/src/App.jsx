import { useState } from "react";

import "./App.css";

let todoId = 4;

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Learn React",
      description: "Learn how to use React",
      id: 1,
    },
    {
      title: "Learn Vue",
      description: "Learn how to use Vue",
      id: 2,
    },
    {
      title: "Learn Angular",
      description: "Learn how to use Angular",
      id: 3,
    },
  ]);

  function addTodo() {
    const newTodo = {
      title: "Learn Qwik",
      description: "Learn how to use Qwik",
      id: todoId,
    };

    setTodos([...todos, newTodo]);
    todoId++;
  }

  return (
    <>
      <div></div>
      <button onClick={addTodo}>Add New Todo</button>

      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        );
      })}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Mark {title} As Done</button>
    </div>
  );
}

export default App;
