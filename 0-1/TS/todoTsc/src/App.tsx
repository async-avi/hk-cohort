const App = () => {
  return (
    <div>
      <Todo title="Go to gym" description="Gym from 5-6" done={true} />
    </div>
  );
};

interface TodoObject {
  title: string;
  description: string;
  done?: boolean;
}

function Todo(props: TodoObject) {
  return <>{props.title}</>;
}

export default App;
