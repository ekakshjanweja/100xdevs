import { useEffect, useState } from "react";

const useInterval = (callback, delay) => {
  useEffect(() => {
    const intervalId = setInterval(callback, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [callback, delay]);
};

function UseIntervalCustomHook() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <>
      <h3>Timer: {count}</h3>
    </>
  );
}

export default UseIntervalCustomHook;
