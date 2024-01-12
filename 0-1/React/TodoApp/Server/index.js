import express from "express";
import { connectDB } from "./db/index.js";

const app = express();
const port = 8000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
  connectDB();
});
