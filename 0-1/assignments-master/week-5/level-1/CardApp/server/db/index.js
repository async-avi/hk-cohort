import mongoose from "mongoose";

const mongoURL = "mongodb+srv://avi:notsoweak123@learning.jg5tycr.mongodb.net";

async function connectDB() {
  try {
    let connectionInstance = await mongoose.connect(`${mongoURL}/cardApp`);
    console.log(
      `Connection established to DB: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    throw err;
  }
}

let cardSchema = new mongoose.Schema({
  name: String,
  companyName: String,
  jobDescription: String,
  socials: Object,
});

const Card = new mongoose.model("Card", cardSchema);

export { connectDB, Card };
