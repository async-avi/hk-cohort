import { useRecoilValueLoadable, RecoilRoot } from "recoil";
import { todoFamily } from "../store/atoms";

function App() {
  return (
    <>
      <h2>Todos</h2>
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={4} />
      </RecoilRoot>
    </>
  );
}

function Todo({ id }) {
  const todoLoadable = useRecoilValueLoadable(todoFamily(id));

  switch (todoLoadable.state) {
    case "hasValue":
      return (
        <div key={todoLoadable.contents.id}>
          <h4>{todoLoadable.contents.title}</h4>
          <p>{todoLoadable.contents.description}</p>
        </div>
      );
    case "loading":
      return <p>Loading...</p>;
    case "hasError":
      return <p>Error fetching todo data</p>;
    default:
      return null;
  }
}

export default App;
