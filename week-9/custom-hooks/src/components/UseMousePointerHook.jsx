import { useEffect, useState } from "react";

function useMousePointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMovement = (event )=> {
    setPosition({ x: event.clientX, y: event.clientY });
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMovement);
    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);

  return position;
}

function UseMousePointerHook() {
  const position = useMousePointer();

  return (
    <>
      <h3>{`Mouse is at (${position.x},${position.y})`}</h3>
    </>
  );
}

export default UseMousePointerHook;
