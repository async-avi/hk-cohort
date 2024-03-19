import { connectDB } from "./db/db";
import express from "express";

const app = express();

// connectDB();
app.listen(3000, () => console.log("listening on port 3000"));
