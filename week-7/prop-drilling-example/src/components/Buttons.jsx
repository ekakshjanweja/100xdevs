import { useContext } from "react";
import { CountContext } from "./context";

function Buttons() {
  const countContext = useContext(CountContext);

  return (
    <>
      <button onClick={() => {}} style={{ margin: 20 }}>
        Increase
      </button>

      <button onClick={() => {}} style={{ margin: 20 }}>
        Decrease
      </button>
    </>
  );
}

export default Buttons;
