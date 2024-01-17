import { useState } from "react";
import { styles } from "./styles";
import Card from "../components/Card";

function App() {
  return (
    <>
      <Card
        name="avi"
        companyName="Byjus"
        jobDescription="TA in byjus"
        exp="5 years"
        interests={["football", "gaming"]}
        socials={{
          github: true,
          email: "https://www.google.com",
          linkedIn: "https://github.com",
        }}
      />
    </>
  );
}

export default App;
