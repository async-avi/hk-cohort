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
      let postedTodo = await axios.post("http://localhost:8000/", {
        title,
        description: desc,
      });
      console.log(postedTodo);
    } catch (error) {
      console.log(error);
    }
  };

  // setInterval(async () => {

  const Todo = () => {
    return todos.map((todo) => {
      const { title, description, _id } = todo;
      return (
        <div key={_id}>
          <h2>{title}</h2>
          <h3>{description}</h3>
        </div>
      );
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({
            title,
            description: desc,
          });
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
