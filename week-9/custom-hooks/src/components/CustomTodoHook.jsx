import { useEffect, useState } from "react";
import axios from "axios";

function useTodos(n) {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  function getTodos() {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });
  }
  useEffect(() => {
    const interval = setInterval(() => {
      getTodos();
    }, n * 1000);
    getTodos();

    return () => {
      clearInterval(interval);
    };
  }, [n]);

  return {
    todos: todos,
    loading: loading,
  };
}

function CustomTodoHook() {
  const { todos, loading } = useTodos(3);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {todos.map((todo) => (
        <Todos todo={todo} />
      ))}
    </>
  );
}

function Todos({ todo }) {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </div>
  );
}

export { Todos, CustomTodoHook };
