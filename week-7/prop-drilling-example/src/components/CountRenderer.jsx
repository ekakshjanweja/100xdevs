import { useContext } from "react";
import { CountContext } from "./context";

function CountRenderer() {
  const countContext = useContext(CountContext);

  return (
    <>
      <h1>{countContext.count}</h1>
    </>
  );
}
