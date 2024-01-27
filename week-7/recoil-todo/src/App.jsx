import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilStateLoadable } from "recoil";
import todoAtomFamily from "./atoms";

function App() {
  return (
    <>
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={3} />
        <Todo id={4} />
      </RecoilRoot>
    </>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilStateLoadable(todoAtomFamily(id));

  if (todo.state === "loading") {
    return <p>Loading...</p>;
  } else if (todo.state === "hasError") {
    return <p>Error: {todo.contents.message}</p>;
  } else {
    return (
      <>
        <h3>{todo.contents.title}</h3>
        <p>{todo.contents.description}</p>
      </>
    );
  }
}

export default App;
