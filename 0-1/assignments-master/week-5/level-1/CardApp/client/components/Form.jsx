import React, { useState } from "react";

const FormLogic = () => {
  const [selectedInputs, setSelectedInputs] = useState([]);

  const [github, setGithub] = useState("null");

  return (
    <>
      <form>
        <select
          style={{
            width: "250px",
          }}
          onChange={(e) => {
            setSelectedInputs([
              ...selectedInputs,
              e.target.value.toLowerCase(),
            ]);
          }}
        >
          <option>Select social media</option>
          <option>Github</option>
          <option>LinkedIn</option>
        </select>
        {selectedInputs.map((input) => {
          return (
            <div key={input} style={{ margin: "10px 0px 10px 0px" }}>
              <input
                type="text"
                placeholder={input}
                id={input}
                onChange={(e) => {
                  console.log(e.target.id);
                }}
              />
            </div>
          );
        })}
      </form>
    </>
  );
};

export default FormLogic;
