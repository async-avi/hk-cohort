import useMousePointer from "../hooks/useMousePointer";
import { useOnline } from "../hooks/useOnline";
import useTimer from "../hooks/useTimer";
import useTodos from "../hooks/useTodos";

const App = () => {
  const online = useOnline();
  const count = useTimer();
  return (
    <>
      <RenderMouseOver />
      {online ? (
        <>
          <p>You are now online</p>
          <RenderTodos />
          {count ? <>Timer: {count}</> : null}
        </>
      ) : (
        "You are now offline"
      )}
    </>
  );
};
// function MyComponent() {
//   // useEffect(() => {
//   //   console.log("component mounted");

//   //   return () => {
//   //     console.log("component unmounted");
//   //   };
//   // });

//   return (
//     <>
//       <h3>Hello world!!</h3>
//     </>
//   );
// }

function RenderTodos() {
  const todos = useTodos();
  return (
    <>
      {todos ? (
        todos.map((todo) => (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
          </div>
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}

function RenderMouseOver() {
  const position = useMousePointer();
  return (
    <>
      {position ? (
        <>
          Your mouse is on {position.x}:{position.y}
        </>
      ) : null}
    </>
  );
}

export default App;
