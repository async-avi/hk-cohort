import { RecoilRoot, useRecoilValue } from "recoil";
import { headerCount } from "../store/atoms";

function App() {
  return (
    <RecoilRoot>
      <HeaderComponent />
    </RecoilRoot>
  );
}

function HeaderComponent() {
  const headerCountValue = useRecoilValue(headerCount);
  const { myNetwork, jobs, messages, notifications } = headerCountValue;
  return (
    <>
      <button>My Network ({myNetwork})</button>
      <button>Jobs ({jobs})</button>
      <button>Messages ({messages})</button>
      <button>notifications ({notifications})</button>
    </>
  );
}

export default App;
