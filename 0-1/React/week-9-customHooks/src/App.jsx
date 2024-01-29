import { useEffect, useState } from "react";

const App = () => {
  const todos = useTodos();
  return (
    <>
      <MyComponent />
      {todos ? (
        todos.map((todo) => (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
          </div>
        ))
      ) : (
        <h2>Loading....</h2>
      )}
    </>
  );
};
function MyComponent() {
  // useEffect(() => {
  //   console.log("component mounted");

  //   return () => {
  //     console.log("component unmounted");
  //   };
  // });

  return (
    <>
      <h3>Hello world!!</h3>
    </>
  );
}

const todosArr = [
  {
    id: 1,
    title: "Buy milk",
  },
  {
    id: 2,
    title: "Buy bread",
  },
  {
    id: 3,
    title: "Buy pan",
  },
];

function useTodos() {
  const [todos, setTodos] = useState(null);
  setInterval(() => {
    setTodos(todosArr);
  }, 1500);

  return todos;
}

export default App;
