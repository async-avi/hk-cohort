import express from "express";
import { Card, connectDB } from "./db/index.js";

const port = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Working",
  });
});

app.post("/new", async (req, res) => {
  let name = req.body.name;
  let company = req.body.company;
  let jobDescription = req.body.jobDescription;
  let email = req.body.email;
  let github = req.body.github;
  let linkedIn = req.body.linkedIn;

  try {
    await Card.create({
      name,
      company,
      jobDescription,
      socials: {
        email: email,
        github: github,
        linkedIn: linkedIn,
      },
    });
  } catch (error) {
    res.status(505).json({ msg: "Mind your inputs" });
  }
});

app.get("/userCard/:id", async (req, res) => {
  let id = req.params.id;
  const findUser = await Card.findOne({ _id: id });
  res.json(findUser);
});

app.use((err, req, res, next) => {
  res.status(500).json({
    msg: "Something went wrong with our servers",
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
  connectDB();
});
