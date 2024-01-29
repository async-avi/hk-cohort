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
  setTimeout(() => {
    setTodos(todosArr);
  }, 1500);

  return todos;
}

export default useTodos;
