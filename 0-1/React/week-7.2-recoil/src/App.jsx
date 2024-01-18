import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "../store/atoms/countAtom";

function App() {
  return <CountRenderer />;
}

function CountRenderer() {
  return (
    <RecoilRoot>
      <Count />
      <Buttons />
    </RecoilRoot>
  );
}

function Count() {
  const count = useRecoilValue(countAtom);

  return (
    <div>
      <b>{count}</b>
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("Buttons rendered");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
