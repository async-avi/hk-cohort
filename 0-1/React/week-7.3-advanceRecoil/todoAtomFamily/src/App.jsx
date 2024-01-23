import { useRecoilValue, RecoilRoot } from "recoil";
import { todoFamily } from "../store/atoms";

function App() {
  return (
    <>
      <h3>Todos</h3>
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={5} />
        <Todo id={10} />
        <Todo id={2} />
      </RecoilRoot>
    </>
  );
}

function Todo({ id }) {
  const getTodo = useRecoilValue(todoFamily(id));
  return (
    <div key={getTodo.id}>
      <h4>{getTodo.title}</h4>
      <p>{getTodo.description}</p>
    </div>
  );
}

export default App;
