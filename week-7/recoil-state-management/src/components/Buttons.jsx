import { useRecoilState } from "recoil";
import countAtom from "../store/atoms/count";

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        style={{ margin: 20 }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        style={{ margin: 20 }}
      >
        Decrease
      </button>
    </>
  );
}

export default Buttons;
