import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function Todo({ id }) {
    const [todo, setTodo] = useState();

    useEffect(() => {
      fetch(`https://sum-server.100xdevs.com/todo?id=${id}`).then(
        async (response) => {
          let data = await response.json();
          setTodo(data.todo);
        }
      );
    });
    return (
      <>
        {todo ? (
          <>
            <h2>{todo.title}</h2>
            <h4>{todo.description}</h4>
          </>
        ) : (
          <h2>not available</h2>
        )}
      </>
    );
  }
  return (
    <>
      <button id="1" onClick={(e) => setCount(e.target.id)}>
        1
      </button>
      <button id="2" onClick={(e) => setCount(e.target.id)}>
        2
      </button>
      <button id="3" onClick={(e) => setCount(e.target.id)}>
        3
      </button>
      <button id="4" onClick={(e) => setCount(e.target.id)}>
        4
      </button>

      <Todo id={count} />
    </>
  );
}

export default App;
