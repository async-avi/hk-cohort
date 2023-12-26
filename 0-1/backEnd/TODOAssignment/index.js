import express from "express";
import fs from "fs";

const port = 8000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => console.log(`Listening on ${port}`));
