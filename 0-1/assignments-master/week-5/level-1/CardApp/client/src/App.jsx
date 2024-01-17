import { useState } from "react";
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
        socials={{ github: true, email: "https://www.google.com" }}
      />
    </>
  );
}

export default App;
