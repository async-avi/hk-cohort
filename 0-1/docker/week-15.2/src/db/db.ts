import mongoose from "mongoose";

async function connectDB() {
  const connection = await mongoose.connect(
    "mongodb://pandaconnection:3200/test"
  );
  console.log(`Connecting to MongoDB: ${connection.connection.db}`);
}

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

export { User, connectDB };
