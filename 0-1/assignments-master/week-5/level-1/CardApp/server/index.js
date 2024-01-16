import express from "express";
import { Card, connectDB } from "./db/index.js";
import { emailSchemaZod, urlSchemaZod } from "./utils/zodSchema.js";
import cors from "cors";

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Working",
  });
});

app.post("/new", async (req, res) => {
  let socials = {
    email: null,
    github: null,
    linkedIn: null,
  };
  if (req.body.email) {
    socials.email = emailSchemaZod.parse(req.body.email);
  }
  if (req.body.github) {
    socials.github = urlSchemaZod.parse(req.body.github);
  }

  try {
    await Card.create({
      name: req.body.name || "UnKnown",
      companyName: req.body.company,
      jobDescription: req.body.jobDescription,
      socials: socials,
    });
    res.status(202).json({
      msg: "Card created successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/all", async (req, res) => {
  try {
    let allCards = await Card.find({});
    res.status(200).json(allCards);
  } catch (err) {
    throw err;
  }
});

app.get("/card/:id", async (req, res) => {
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
