import { useEffect, useState } from "react";

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

const useTodos = () => {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    setTodos(todosArr);
  }, []);

  return todos;
};

export default useTodos;
