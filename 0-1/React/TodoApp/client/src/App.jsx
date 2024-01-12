import { useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const getAndUpdateTodos = async () => {
    let resp = await axios.get("http://localhost:8000/");
    let data = await resp.data;
    setTodos(data);
  };
  getAndUpdateTodos();

  const postTodo = async () => {
    try {
      await axios.post("http://localhost:8000/", {
        title,
        description: desc,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:8000/${id}`);
  };

  const updateTodo = async (id) => {
    await axios.put(`http://localhost:8000/${id}`);
  };

  const Todo = () => {
    return todos.map((todo) => {
      const { title, description, _id, completed } = todo;
      if (completed === false)
        return (
          <div key={_id}>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <button
              onClick={() => {
                updateTodo(_id);
              }}
            >
              Mark as done
            </button>
            <button onClick={() => deleteTodo(_id)}>Delete</button>
          </div>
        );
      if (completed === true)
        return (
          <div key={_id} style={{ color: "Green" }}>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <button>It is Done!!</button>
            <button onClick={() => deleteTodo(_id)}>Delete</button>
          </div>
        );
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postTodo();
        }}
      >
        <h4>Add title</h4>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" onChange={(e) => setDesc(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <h3>{todos.length}</h3>
      {/* <Todo /> */}
      <Todo />;
    </>
  );
}

export default App;
