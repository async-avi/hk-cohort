import mongoose from "mongoose";
import { Schema } from "mongoose";

let mongoURL = "mongodb+srv://avi:notsoweak123@learning.jg5tycr.mongodb.net";

let connectDB = async () => {
  try {
    let connectionInstance = await mongoose.connect(`${mongoURL}/todoApp`);
    console.log(`Connected to database: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Error connecting to Mongo");
  }
};

let todoSchema = new Schema({
  title: String,
  description: String,
  completed: Boolean,
  owner: String,
});

const Todo = new mongoose.model("Todo", todoSchema);

export { connectDB, Todo };
