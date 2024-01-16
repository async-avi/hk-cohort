import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import FormLogic from "../components/Form";
import Card from "../components/Card";

function App() {
  const [isFetch, setFetch] = useState(false);
  const [cards, fetchCards] = useState([]);

  useEffect(() => {
    // fetch(`http://localhost:3000/all`).then(async (resp) => {
    //   let data = await resp.json();
    //   fetchCards(data);
    // });
    axios.get(`http://localhost:3000/all`).then(async (resp) => {
      let data = await resp.data;
      fetchCards(data);
    });
  });

  const Cards = () => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // setFetch((prev) => !prev);
        }}
      >
        <button type="submit">Get</button>
      </form>
    );
  };

  return (
    <>
      {isFetch ? <h1>True</h1> : <h1>False</h1>}
      {/* <Cards /> */}
      {/* {cards.map((card) => {
        return (
          <Card
            key={card._id}
            name={card.name}
            company={card.companyName}
            jobDescription={card.jobDescription}
            socials={card.socials}
          />
        );
      })} */}
      <FormLogic />
    </>
  );
}

export default App;
