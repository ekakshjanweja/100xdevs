import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let sum = 0;

    for (let i = 1; i <= inputValue; i++) {
      sum = sum + i;
    }

    return sum;
  }, [inputValue]);

  return (
    <>
      <input
        type=""
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Find sum from 1 to n"
        style={{ margin: 20 }}
      />

      <br />

      <p>
        Sum from 1 to {inputValue} is: {count}
      </p>

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

export default App;
