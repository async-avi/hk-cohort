import { useCallback, useState } from "react";
import { commonEnglishWords } from "./words.js";

function App() {
  const [wordCountLength, setCount] = useState(0);
  const [para, setPara] = useState("");

  const generatePara = useCallback(() => {
    // let chars =
    //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
    let finalInput = "";
    let finalOutput = "";
    for (let i = 0; i < wordCountLength; i++) {
      let random =
        commonEnglishWords[
          Math.floor(Math.random() * commonEnglishWords.length)
        ];
      finalOutput = ` ${random}`;
      finalInput += finalOutput;
    }
    setPara(finalInput);
  }, [wordCountLength]);

  return (
    <>
      <h3>Para Generator</h3>
      <input type="text" onChange={(e) => setCount(e.target.value)} />
      <button onClick={generatePara}>Click</button>
      <Para input={para} />
    </>
  );
}

const Para = ({ input }) => {
  return (
    <div>
      <p style={{ overflow: "hidden" }}>{input}</p>
    </div>
  );
};

export default App;
