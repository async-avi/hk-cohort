/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";

const PasswordGen = () => {
  const [password, setPassword] = useState("");
  const [len, setLen] = useState(8);
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  let generatePassword = useCallback(() => {
    let pass = "";
    for (let i = 0; i < len; i++) {
      let char = Math.floor(Math.random() * alphabets.length + 1);
      char = alphabets.charAt(char);
      pass += char;
      setPassword(pass);
    }
  }, [len]);

  useEffect(() => {
    generatePassword();
  }, [len]);

  return (
    <div>
      <h2>Password: {password}</h2>
      <input
        type="range"
        min={3}
        max={100}
        value={len}
        onChange={(e) => {
          setLen(e.target.value);
          generatePassword();
        }}
      />
      {len}
    </div>
  );
};

export default PasswordGen;
