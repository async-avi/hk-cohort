import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

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
  let kidneys = users[0].kidneys;
  let numberOfKidneys = kidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < kidneys.length; i++) {
    if (kidneys[i].healthy === true) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  let newHealthyKidney = req.body;
  users[0].kidneys.push(newHealthyKidney);
  res.redirect("/");
});

app.put("/", (req, res) => {
  let kidneys = users[0].kidneys;
  for (let i = 0; i < kidneys.length; i++) {
    if (kidneys[i].healthy === false) {
      kidneys[i].healthy = true;
    }
  }
  res.json({
    msg: "Kidney replaced",
  });
});

app.delete("/", (req, res) => {});

app.listen(port, () => console.log(`App listening on ${port}`));
