import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState([
    {
      title: "Todo 1",
      description: "Todo 1 Description",
      complete: false,
    },
    {
      title: "Todo 2",
      description: "Todo 2 Description",
      complete: false,
    },
  ]);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setTodos([
              ...todos,
              {
                title: "New Todo Tile",
                description: "New Todo Description",
                complete: false,
              },
            ]);
          }}
        >
          <h3> Add New Todo</h3>
        </button>

        {todos.map((todo) => {
          return <Todo title={todo.title} description={todo.description} />;
        })}
      </div>
    </>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <button onClick={() => {}}>Mark {props.title} As Done</button>
    </div>
  );
}

export default App;
