import { useRecoilValue } from "recoil";
import countAtom from "../store/atoms/count";

function Count() {
  const count = useRecoilValue(countAtom);
  return (
    <>
      <h1>{count}</h1>
    </>
  );
}

export default Count;
