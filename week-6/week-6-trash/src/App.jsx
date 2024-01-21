import { useState, memo } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("title 1");

  return (
    <>
      <div>
        <button
          onClick={() => {
            const random = Math.random();
            setTitle(random);
          }}
        >
          Change Title
        </button>
        <Header title={title} />
        <Header title={"title 2"} />
        <Header title={"title 3"} />
        <Header title={"title 4"} />
      </div>
    </>
  );
}

const Header = memo(function ({ title }) {
  return <div>{title}</div>;
});

export default App;
