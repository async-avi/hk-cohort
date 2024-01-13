import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async (resp) => {
        let data = await resp.json();
        setTodos(data.todos);
      });
      setShow(true);
    }, 3000);
  }, []);

  return (
    <>
      {show ? (
        todos.map((todo) => {
          return (
            <div key={todo.id}>
              <h2>{todo.title}</h2>
              <h4>{todo.description}</h4>
            </div>
          );
        })
      ) : (
        <h2>Please wait </h2>
      )}
    </>
  );
}

export default App;
