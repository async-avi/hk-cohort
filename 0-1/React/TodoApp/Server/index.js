import express from "express";
import { Todo, connectDB } from "./db/index.js";

const app = express();
const port = 8000;

app.get("/", async (req, res) => {
  try {
    let allTodos = await Todo.find({});
    res.status(200).json(allTodos);
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
  connectDB();
});
