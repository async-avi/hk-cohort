import { useState } from "react";

let idCount = 0;

function App() {
  const [todos, setTodos] = useState([]);

  const Form = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    function addTodo(e) {
      e.preventDefault();
      idCount++;
      setTodos([
        ...todos,
        {
          id: idCount,
          title: title,
          description: desc,
        },
      ]);
    }

    return (
      <>
        <h3>Add a new Todo</h3>
        <form onSubmit={addTodo}>
          <h4>Title</h4>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
          <h4>Description</h4>
          <input type="text" onChange={(e) => setDesc(e.target.value)} />
          <br />
          <button type="submit" style={{ margin: "10px 0px 10px 0px" }}>
            Add
          </button>
        </form>
      </>
    );
  };

  const Todo = ({ title, description }) => {
    return (
      <>
        <h2>{title}</h2>
        <h3>{description}</h3>
      </>
    );
  };

  return (
    <>
      <Form />
      {todos.length > 0 ? (
        <>
          <h1>All todos</h1>
          {todos.map((todo) => {
            return (
              <>
                <Todo
                  key={todo.id}
                  title={todo.title}
                  description={todo.description}
                />
              </>
            );
          })}
        </>
      ) : (
        <h1>There are no Todos Added</h1>
      )}
    </>
  );
}

export default App;
