import express from "express";

const app = express();
const port = 3000;

let users = [
  {
    name: "John",
    age: 42,
    kidneys: [
      { condition: "90%", status: "Healthy functioning" },
      { condition: "50%", status: "Prone to damage" },
    ],
  },
  {
    name: "Tina",
    age: 18,
    kidneys: [{ condition: "Sold for Iphone" }],
  },
];

app.get("/", (req, res) => {
  res.send(users[0].kidneys);
});

app.post("/", (req, res) => {
  let newKidney = {
    condition: "Healthy functioning",
    status: "99%",
  };
  users[0].kidneys.push(newKidney);
  res.redirect("/");
});

app.listen(port, () => console.log(`App listening on ${port}`));
