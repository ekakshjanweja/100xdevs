import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>hi there</div>
      <CustomButton count={count} setCount={setCount} />
    </>
  );
}

function CustomButton(props) {
  return (
    <button
      onClick={() => {
        props.setCount(props.count + 1);
      }}
    >
      Counter {props.count}
    </button>
  );
}

export default App;
