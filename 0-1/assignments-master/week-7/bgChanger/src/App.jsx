import { useState } from "react";
import { colors } from "../colors";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div
      style={{
        background: color,
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "5px",
          margin: "10px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {colors.map((color) => {
          return (
            <Button
              key={color.hex}
              name={color.name}
              hex={color.hex}
              setColor={setColor}
            />
          );
        })}
      </div>
    </div>
  );
}

function Button({ name, hex, setColor }) {
  return (
    <button
      id={name}
      onClick={() => setColor(hex)}
      style={{
        background: `${hex}`,
        color: "white",
        height: "2rem",
        width: "5rem",
        border: "none",
        borderRadius: "20px",
      }}
    >
      {name}
    </button>
  );
}

export default App;
