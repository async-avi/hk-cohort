import { RecoilRoot, useRecoilValue } from "recoil";
import { headerCount } from "../store/atoms";

function App() {
  return (
    <>
      <RecoilRoot>
        <HeaderComponent />
      </RecoilRoot>
    </>
  );
}

function HeaderComponent() {
  const headerCountValue = useRecoilValue(headerCount);

  return (
    <>
      <button>Home</button>
      <button>My Networks ({headerCountValue.myNetwork})</button>
      <button>Jobs ({headerCountValue.jobs})</button>
      <button>Messages ({headerCountValue.messages})</button>
      <button>Notifications ({headerCountValue.notifications})</button>
      <button>Me</button>
    </>
  );
}

export default App;
