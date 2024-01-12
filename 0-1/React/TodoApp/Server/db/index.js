import mongoose from "mongoose";

let mongoURL = "mongodb+srv://avi:notsoweak123@learning.jg5tycr.mongodb.net/";

let connectDB = async () => {
  try {
    let connectionInstance = await mongoose.connect(mongoURL);
    console.log(`Connected to database: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Error connecting to Mongo");
  }
};

export { connectDB };
