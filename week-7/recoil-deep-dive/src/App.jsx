import { RecoilRoot } from "recoil";
import "./App.css";
import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <RecoilRoot>
        <Buttons />
      </RecoilRoot>
    </>
  );
}

export default App;
