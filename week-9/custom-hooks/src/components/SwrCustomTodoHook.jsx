import useSWR from "swr";
import { Todos } from "./CustomTodoHook";

const fetcher = async (url) => {
  const data = await fetch(url);
  const json = await data.json();
  return json;
};

function SwrCustomTodoHook() {
  const { data, error, isLoading } = useSWR(
    "https://sum-server.100xdevs.com/todos",
    fetcher
  );

  if (error) {
    return (
      <>
        <h3>Error: {error}</h3>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }

  return (
    <>
      <div>
        <h3>Hello, you have {data.todos.length} todos!</h3>
      </div>
      <br />
      <div>
        {data.todos.map((todo) => (
          <Todos todo={todo} />
        ))}
      </div>
    </>
  );
}

export default SwrCustomTodoHook;
