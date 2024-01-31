import { CustomTodoHook } from "./components/CustomTodoHook";
import SwrCustomTodoHook from "./components/SwrCustomTodoHook";
import UseDebounceCustomHook from "./components/UseDebounceCustomHook";
import UseIntervalCustomHook from "./components/UseIntervalCustomHook";
import UseIsOnlineHook from "./components/UseIsOnlineHook";
import UseMousePointerHook from "./components/UseMousePointerHook";

function App() {
  return (
    <>
      {/* <CustomTodoHook /> */}
      <UseIsOnlineHook />
      <UseMousePointerHook />
      <UseIntervalCustomHook />
      <UseDebounceCustomHook />
      <SwrCustomTodoHook />
    </>
  );
}

export default App;
