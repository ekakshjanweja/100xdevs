import { useState } from "react";
import "./App.css";
import Count from "./components/Count";
import Buttons from "./components/Buttons";
import { CountContext } from "./components/context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={count}>
        <Count count={count} />
      </CountContext.Provider>
    </>
  );
}

export default App;
