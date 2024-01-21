import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <CardWrapper component={<TextComponent />} />
      <CardWrapper component={<AnotherTextComponent />} />
    </>
  );
}

function CardWrapper({ component }) {
  return <div style={{ margin: 20 }}>{component}</div>;
}

function TextComponent() {
  return <h1>Hello, World!</h1>;
}

function AnotherTextComponent() {
  return <h5>Hello, World! Again.....</h5>;
}

export default App;
