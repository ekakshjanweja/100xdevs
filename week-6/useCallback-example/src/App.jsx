import { memo, useCallback, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const logSomeThing = useCallback(() => {
    console.log("SomeThing");
  }, []);

  return (
    <>
      <Child onClick={logSomeThing} />
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {counter}
      </button>
    </>
  );
}

const Child = memo(({ onClick }) => {
  console.log("Child Render");

  return (
    <>
      <button onClick={onClick} style={{ margin: 20 }}>
        Click Me
      </button>
    </>
  );
});

export default App;
