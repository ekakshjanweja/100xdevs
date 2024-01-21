import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const [id, setId] = useState(1);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
    });
  }, []);

  return (
    <>
      {todos.map((todo) => {
        return (
          <>
            <button
              onClick={() => {
                setId(todo.id);
              }}
            >
              {todo.id}
            </button>
          </>
        );
      })}
      <Todo id={id} />
    </>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id).then((res) => {
      setTodo(res.data.todo);
    });
  }, [id]);

  return (
    <>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </>
  );
}

export default App;
