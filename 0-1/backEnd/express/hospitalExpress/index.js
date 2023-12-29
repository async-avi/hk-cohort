import express from "express";

const app = express();
const port = 3000;

let users = [
  {
    name: "John",
    age: 42,
    kidneys: [
      { condition: "90%", healthy: true },
      { condition: "50%", healthy: false },
    ],
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

app.put("/", (req, res) => {});

app.delete("/", (req, res) => {
  let kidneyArr = users[0].kidneys;
  kidneyArr = kidneyArr.filter((kidney) => {
    return kidney.healthy === true;
  });
  res.redirect("/");
});

app.listen(port, () => console.log(`App listening on ${port}`));
