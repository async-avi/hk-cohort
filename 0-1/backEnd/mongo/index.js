import express from "express";
import mongoose, { Schema } from "mongoose";

const app = express();
const MongoURL =
  "mongodb+srv://avi:Notsoweak1323@assignmentmongo.w0nadub.mongodb.net";
const DB_Name = "basicMongo";

function connectDB() {
  let connectionInstance = mongoose.connect(`${MongoURL}/${DB_Name}`);
  connectionInstance.then((data) => console.log(data.connection.host));
}

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
  connectDB();
});
