import express from "express";
import cors from "cors";
import { Todo, connectDB } from "./db/index.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    let allTodos = await Todo.find({});
    res.status(200).json(allTodos);
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

app.post("/", async (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let completed = false;
  try {
    await Todo.create({
      title,
      description,
      completed,
    });
    res.status(200).json({
      msg: "Todo created successfully",
    });
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
  connectDB();
});
