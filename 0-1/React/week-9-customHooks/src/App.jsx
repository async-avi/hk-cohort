import { useEffect, useState } from "react";

const App = () => {
  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow((show) => !show);
  }, 5000);
  return (
    <>
      {show ? (
        <>
          <MyComponent />
        </>
      ) : null}
    </>
  );
};
function MyComponent() {
  useEffect(() => {
    console.log("component mounted");

    return () => {
      console.log("component unmounted");
    };
  });

  return (
    <>
      <h3>Hello world!!</h3>
    </>
  );
}

export default App;
